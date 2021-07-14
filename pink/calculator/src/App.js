import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Cart from "./componet/cartTask";
import Calculator from "./componet/calculator"

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [tasktebl, setTaskteb] = useState([]);
  const changeHandler = (e) => {
    setNewTask(e.target.value);
  };

  const deleteText = (txt) => {
    console.log(tasks.filter(item=>item!=txt));
    setTasks(tasks.filter(item=>item!=txt))
  };
  useEffect(()=>{
    setTaskteb(
      [...tasks].map((item, index) => (
        <Cart key={index} text={item} func={deleteText} />
      ))
    );
  },[tasks])

  const add = () => {
    if (newTask) {
      setTasks((oldTasks) => {
        return [...oldTasks, newTask];
      });
      setNewTask("");
    }
  };
  const remove = () => {
    setNewTask("");
  };
  return (
    <div className="flex">
      <div className="border border-red-700 w-1/5 h-96"></div>
      <div className="flex justify-center flex-wrap content-center border border-red-700 w-3/5 h-96">
        <div className="flex justify-center  w-4/5 h-3/4 rounded-lg  ">
          <div>
          <Calculator/>
            <div className="border border-gray-500 rounded">
              <input
                className="placeholder-gray-100 placeholder-opacity-0 h-8 w-60 pl-2"
                placeholder="text"
                onChange={changeHandler}
                value={newTask}
              />
              <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold h-8 px-4 border border-gray-400 rounded shadow"
                onClick={add}
              >
                add
              </button>
              <button
                className="bg-white hover:bg-gray-100 text-red-700 font-semibold h-8 px-4 border border-gray-400 rounded shadow"
                onClick={remove}
              >
                remove
              </button>
            </div>
            {tasktebl}
          </div>
        </div>
      </div>
      <div className="border border-red-700 w-1/5 h-96"></div>
    </div>
  );
}

export default App;
