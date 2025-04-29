import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const persistData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <ToDoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
