import React from "react";
import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";

//setting the seed values for tasks to be passed in as props in app.js
const DATA = [
  {
    id: "todo-0",
    name: "I'm a placeholder task! Feel free to delete me and add your own tasks above!",
    dueDate: "2023-09-20",
    category: "Personal",
    completed: true,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </React.StrictMode>
);
