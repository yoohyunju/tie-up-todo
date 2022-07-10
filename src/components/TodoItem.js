import React from "react";
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoItem.css";

const TodoItem = ({ todo, onCheckToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="todo-item">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox onClick={() => onCheckToggle(id)} />
        ) : (
          <MdOutlineCheckBoxOutlineBlank onClick={() => onCheckToggle(id)} />
        )}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
