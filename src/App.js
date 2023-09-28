import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name, dueDate, category) {
    const newTask = {
      id: `todo-${nanoid()}`, //assigns unique ids
      name,
      dueDate,
      category,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    console.log("INSIDE ADDTASKS: " + tasks);
  }

  function deleteTask(id) {
    //filter out all tasks that do not match the id
    const remainingTasks = tasks.filter((task) => id !== task.id);
    //save a new version of tasks w/o the task that was deleted
    setTasks(remainingTasks);
  }

  function editTask(id, newName, newDate) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName, dueDate: newDate };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //new const that stores the inverted state of the checkbox (completed variable)
        const updatedTask = { ...task, completed: !task.completed };

        if (updatedTask.completed) { //triggers a toast notification when a checkbox is checked
          toast.success("Task completed! Keep up the good work!", { position: "top-right" });
        }
        // returns updated task with updated checkbox
        return updatedTask;
      }
      //if ids dont match, return original obj
      return task;
    });
    //update our tasks w/ updated tasks
    setTasks(updatedTasks);
  }

  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      dueDate={task.dueDate}
      category={task.category}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>Diana Hung's To Do List Assignment</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception"></div>
      <h2 id="list-heading">
        <u>TASK LIST:</u>
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
