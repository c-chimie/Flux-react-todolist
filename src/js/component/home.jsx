import React, { useState, useEffect, useContext } from "react";
import { render } from "react-dom";
import { Context } from "../store/appContext.js";
import injectContext from "../store/appContext.js";

//create component
const Home = () => {
  // bringing in a global state/context
  const { store, actions } = useContext(Context);

  // use state bc tasks are constantly changing
  const [tasks, setTasks] = useState(store.list);

  // add state to my input
  const [input, setInput] = useState("");

  // when the form is submitted, this is what happens (a task is added)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input != "") {
      const addTask = {
        id: Math.floor(Math.random() * 1000),
        text: input,
      }; // if input is empty, do not let user submit

      setTasks([store.list, actions.addNewTask(addTask)]); // add the user input to the state (use spread operator to copy existing array of tasks)

      setInput(""); // make the input box appear empty again after the user submits
    }
  };

  console.log(input);

  return (
    <div>
      <h1 className="todos">todos</h1>
      <div className="list-card">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="input-box"
            placeholder="What needs to be done?"
            type="text"
          />
        </form>

        {/* use .map to display submitted text inputs */}
        <div className="list-item">
          {store.list.map((task) => {
			return (
            <div className="todo" key={task.id}>
              <p>
                {task.text}
                <button
                  className="button"
                  onClick={() => setTasks(actions.deleteTask(task.id))}
                >
                  &#10060;
                </button>
              </p>
            </div>
			)
          })}
          <p className="counter">
            {" "}
            {store.list.length === 1 ? "1 task left" : `${store.list.length} tasks left`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default injectContext(Home);
