import React from "react";

const ToDoItem = (props) => {
  return (
    <div className="todoitem">
      <div>
        <input name={props.id} type="checkbox" id={props.id}></input>
        <span>
          <p>&#10003;</p>
        </span>
        <label htmlFor={props.id}>{props.name}</label>
        <p>{props.description}</p>
      </div>

      <div className="priority" data-value={props.priority}>
        {props.priority}
      </div>

      <button onClick={() => props.removeToDo(props.id)}>X</button>
    </div>
  );
};

export default ToDoItem;
