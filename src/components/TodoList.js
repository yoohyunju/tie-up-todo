import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = ({ todos, onCheckToggle }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle}/>
      ))}
    </div>
  );
};

export default TodoList;