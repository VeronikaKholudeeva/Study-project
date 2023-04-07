import React, { useEffect, useState } from "react";

interface IToDo {
  id: String;
  title: string;
  description?: string;
  priority: string;
}

const ToDoForm = (props) => {
  let priority = ["Highest", "High", "Medium", "Low", "Lowest"];
  let [priorityValue, setPriorityValue] = useState("Medium");
  let [ToDo, setToDo] = useState<IToDo>({
    id: "",
    title: "",
    description: "",
    priority: priorityValue,
  });

  const create = (e) => {
    e.preventDefault();
    const newToDo = {
      ...ToDo,
      id: String(Date.now()),
    };
    props.create(newToDo);
    setPriorityValue("Medium");
    setToDo({
      id: "",
      title: "",
      description: "",
      priority: "Medium",
    });
  };

  return (
    <div>
      <h4>Add To-Do</h4>
      <form className="todoform" id="todoform">
        <label>
          Title
          <input
            value={ToDo.title}
            onChange={(event) =>
              setToDo({
                ...ToDo,
                title: event.target.value,
              })
            }
            type="text"
            placeholder="Title"
          ></input>
        </label>
        <label>
          Description
          <textarea
            value={ToDo.description}
            onChange={(event) =>
              setToDo({
                ...ToDo,
                description: event.target.value,
              })
            }
            placeholder="Description"
          ></textarea>
        </label>
        <label>
          Priority
          <select
            onChange={(event) => {
              setPriorityValue(event.target.value);
              setToDo({
                ...ToDo,
                priority: event.target.value,
              });
            }}
            value={priorityValue}
          >
            {priority.map((elem) => (
              <option>{elem}</option>
            ))}
          </select>
        </label>

        <button onClick={create}>Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;
