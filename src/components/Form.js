import React, { useState } from "react";

function Form(props) {
  const [task, setTask] = useState({ name: "", dueDate: "", category: "" });


  function handleChange(e) {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  }
 
  function handleCategoryChange(e) {
    setTask((prevTask) => ({
      ...prevTask,
      category: e.target.value
    }));
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(task.name, task.dueDate, task.category);
    setTask({ name: "", dueDate: "", category: "" });
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
      What do you need to get done?
        <input
          type="text"
          id="name"
          className="form-control form-control-lg"
          placeholder="Enter your task here..."
          name="name"
          autoComplete="off"
          value={task.name}
          onChange={handleChange}
          required
        />
        When do you need to finish it by?
        <input
          type="date"
          id="dueDate"
          className="form-control form-control-lg"
          name="dueDate"
          autoComplete="off"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      What category is this task? 
      <div className="row align-items-start">
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id="schoolRadio"
              value="School"
              onChange={handleCategoryChange}
              checked={task.category === "School"}
            />
            <label htmlFor="schoolRadio" className="form-check-label">
              School
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id="personalRadio"
              value="Personal"
              onChange={handleCategoryChange}
              checked={task.category === "Personal"}
            />
            <label htmlFor="personalRadio" className="form-check-label">
              Personal
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id="workRadio"
              value="Work"
              onChange={handleCategoryChange}
              checked={task.category === "Work"}
            />
            <label htmlFor="workRadio" className="form-check-label">
              Work
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn__primary btn__lg rounded-pill">
        Add
      </button>
    </form>
  );
}
 
export default Form;