import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem.tsx";
import MyModal from "../UI/MyModal/MyModal.jsx";
import ToDoForm from "./ToDoForm.tsx";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  let [todolist, setTodolist] = useState(
    JSON.parse(String(localStorage.getItem("todolist"))) || []
  );

  const addToDo = (ToDo) => {
    setTodolist([...todolist, ToDo]);
  };
  const removeToDo = (id) => {
    setTodolist(todolist.filter((elem) => elem.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div className="todo">
      <p>To-Do list</p>
      {todolist.map((elem) => (
        <ToDoItem
          name={elem.title}
          id={elem.id}
          description={elem.description}
          priority={elem.priority}
          removeToDo={removeToDo}
        />
      ))}
      <button onClick={() => setModal(true)} id="add">
        +
      </button>
      <MyModal visible={modal} setVisible={setModal}>
        <ToDoForm create={addToDo} />
      </MyModal>
    </div>
  );
};

export default ToDoList;
