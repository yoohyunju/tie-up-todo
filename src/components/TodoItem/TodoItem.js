import React from "react";
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoItem.css";

const TodoItem = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const { id, text, checked } = todo;
  return (
    <div className="todo-item">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox onClick={() => onCheckToggle(id)} />
        ) : (
          <MdOutlineCheckBoxOutlineBlank onClick={() => onCheckToggle(id)} />
        )}
        <div
          className="text"
          onClick={() => {
            onChangeSelectedTodo(todo); // 현재 todo 객체 전달
            onInsertToggle();
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
