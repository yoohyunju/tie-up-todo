import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";
import "./TodoInsert.css";

const TodoInsert = ({ onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    if (value !== "") {
      setValue("");
      onInsertToggle(); // 창 닫아짐
    }
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]); // 의존성 배열: selectedTodo가 변경될 때 마다 호출

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <div className="form-container">
        <form onSubmit={selectedTodo ? () => onUpdate(selectedTodo.id, value) : onSubmit}>
          <input
            placeholder="할 일을 입력하세요."
            value={value}
            onChange={onChange}
          ></input>
          {selectedTodo ? (
            <div className="rewrite">
              <TiPencil onClick={() => onUpdate(selectedTodo.id, value)}/>
              <TiTrash onClick={() => onRemove(selectedTodo.id)}/>
            </div>
          ) : (
            <button type="submit">
              <MdAddCircle />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default TodoInsert;
