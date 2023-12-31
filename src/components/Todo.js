import React, { useState } from "react";
import moment from "moment";


export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          Now editing: {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel rounded-pill"
          onClick={() => setEditing(false)}
        >
          {" "}
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button
          type="submit"
          className="btn btn__primary todo-edit rounded-pill"
        >
          Save
          <span className="visually-hidden">Now editing: {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className={`c-cb ` + props.category}>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-dueDate">
          Due Date: {moment(props.dueDate).format("MM/DD/YYYY")}{" "}
        </label>
        <br />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn__danger rounded-pill"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
        {/* <button
          type="button"
          className="btn rounded-pill"
          onClick={() => setEditing(true)}
        >
          Edit <span className="visually-hidden">{props.name}</span>
        </button> */}
      </div>
    </div>
  );

  return (
    <li className="todo">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}
