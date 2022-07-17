import "./App.css";
import Nav from "./components/Nav";
import Template from "./components/Template/Template";
import TodoList from "./components/TodoList/TodoList";
import { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "./components/TodoInsert/TodoInsert";
import Weather from "./components/Weather/Weather";

const App = () => {
  let nextId = 4;
  let dummyTodo = [
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
  ];
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setIntertToggle] = useState(false);
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("localTodo")) || dummyTodo);

  // 모달 창 핸들러
  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null); // todo 선택 후 남아있는 내용 초기화
    }
    setIntertToggle((prev) => !prev);
  };

  // Todo 입력 핸들러
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

  // todos의 상태가 바뀔 때 마다 저장
  useEffect(() => {
    localStorage.setItem("localTodo", JSON.stringify(todos));
  }, [todos])

  // checkbox 핸들러
  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  // todo 선택 핸들러
  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  // todo 삭제 핸들러
  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  // todo 수정 핸들러
  const onUpdate = (id, text) => {
    onInsertToggle();
    // 해당 아이디를 가진 todo의 text를 수정
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className="add-todo-btn">
        <MdAddCircle onClick={onInsertToggle} />
      </div>
      {/* insertToggle이 true인 경우에만 나오게 */}
      {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
        />
      )}
      <Weather/>
    </Template>
  );
};

export default App;