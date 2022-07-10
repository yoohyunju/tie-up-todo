import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import TodoIntsert from "./components/TodoInsert";

const App = () => {
  let nextId = 4;
  const [insertToggle, setIntertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할일 3",
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    setIntertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일이 입력되지 않았습니다.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo)); // 기존 배열 변경 방지를 위해 push가 아닌 concat 사용
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} onCheckToggle={onCheckToggle}/>
      <div className="add-todo-btn">
        <MdAddCircle onClick={onInsertToggle} />
      </div>
      {/* insertToggle이 true인 경우에만 나오게 */}
      {insertToggle && (
        <TodoIntsert
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
        />
      )}
    </Template>
  );
};

export default App;
