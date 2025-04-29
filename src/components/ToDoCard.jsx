import React from "react";

export default function ToDoCard(props) {
  const { children, index, handleDeleteTodo, handleEditTodo } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer"></div>
      <button></button>
      <i
        onClick={() => handleEditTodo(index)}
        className="fa-solid fa-pen-to-square"
      ></i>
      <i
        onClick={() => handleDeleteTodo(index)}
        className="fa-solid fa-trash"
      ></i>
    </li>
  );
}
