import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.css";

const TodoIntsert = ({ onInsertToggle, onInsertTodo }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    if(value !== ""){
      setValue("");
      onInsertToggle(); // 창 닫아짐
    }
  };

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <input placeholder="할 일을 입력하세요." value={value} onChange={onChange}></input>
          <button type="submit">
            <MdAddCircle />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoIntsert;
