import React, { useState, useEffect } from "react";
import { render } from "react-dom";


//create component
const Home = () => {
	// use state bc tasks are constantly changing
	const [tasks, setTasks] = useState([]);

	// add state to my input
	const [input, setInput] = useState('')


	// when the form is submitted, this is what happens (a task is added)
	const handleSubmit = (event) => {
		event.preventDefault()
		if(input != ""){
			const addTask = {
				id: Math.floor(Math.random() * 1000),
				text: input,
				completed: false
			} // if input is empty, do not let user submit
	
			setTasks([...tasks, addTask]) // add the user input to the state (use spread operator to copy existing array of tasks)
	
			setInput('') // make the input box appear empty again after the user submits
		}
	
	}

	// delete tasks
	const deleteTask = (id) =>{
		let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id)
		setTasks(filteredTasks)
	}

	console.log(input)

	return (
		<div>
			<h1 className="todos">todos</h1>
			<div className="list-card">
				<form onSubmit={handleSubmit}>
					<input 
					value={input}
					onChange={event => setInput(event.target.value)}
					className="input-box" 
					placeholder="What needs to be done?" 
					type="text" />
				</form>

				{/* use .map to display submitted text inputs */}
				<div className="list-item">{tasks.map(task => (
					<div className="todo" key={task.id}>
						<p>{task.text}<button className="button" onClick={() => deleteTask(task.id)}>	
&#10060;</button></p>
					</div>
				))}
				<p className="counter"> {(tasks.length === 1) ? "1 task left" : `${tasks.length} tasks left`}</p>
				</div>

			</div>
		</div>
	)
};

export default Home;
