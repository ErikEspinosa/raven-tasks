import React, { Component } from "react";
import Task from "./Task";
import AddTaskForm from "./AddTaskForm";
import httpInstance from "../lib/httpInstance";
import { BiTime } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";

export default class TaskList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pendingTasks: [],
			completeTasks: [],
			isFetching: true,
		};

		this.addTask = this.addTask.bind(this);
		this.completeTask = this.completeTask.bind(this);
		this.editTask = this.editTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	// Get all tasks
	getTasks() {
		httpInstance
			.get("/tasks")
			.then((response) => {
				this.setState({
					pendingTasks: response.data[0],
					completeTasks: response.data[1],
					isFetching: false,
				});
			})
			.catch((e) => {
				console.log("Error", e);
				this.setState({ ...this.state, isFetching: false });
			});
	}

	// Add a new task
	addTask(task) {
		const newTask = {
			description: task,
		};

		httpInstance
			.post("/tasks", newTask)
			.then((response) => {
				console.log(response.status);
				this.getTasks();
			})
			.catch((e) => {
				console.log("Error: ", e);
			});
	}

	// Mark as complete task
	completeTask(id) {
		httpInstance
			.put(`/tasks/${id}`)
			.then((response) => {
				console.log(response);
				this.getTasks();
			})
			.catch((e) => {
				console.log("Error ", e);
			});
	}

	// Edit a task
	editTask(id, description) {
		const editedTask = {
			description: description,
		};

		httpInstance
			.put(`/tasks/${id}`, editedTask)
			.then((response) => {
				console.log(response.status);
				this.getTasks();
			})
			.catch((e) => {
				console.log("Error ", e);
			});
	}

	// Delete a task
	deleteTask(id) {
		httpInstance
			.delete(`/tasks/${id}`)
			.then((response) => {
				console.log(response.status);
				this.getTasks();
			})
			.catch((e) => {
				console.log("Error ", e);
			});
	}

	// Load tasks list
	componentDidMount() {
		this.getTasks();
	}

	render() {
		return (
			<div className="section">
				<div className="container">
					{/* Title */}
					<p className="is-size-5 has-text-grey mb-4">
						What needs to be done today?
					</p>

					{/* Add new task form */}
					<AddTaskForm onSubmit={this.addTask} />

					{/* Is fetching notification */}
					{this.state.isFetching ? (
						<div className="notification is-warning my-4">
							{this.state.isFetching ? "Loading" : ""}
						</div>
					) : null}

					{/* Pending tasks */}
					<div className="box mt-4">
						<h2 className="is-size-5 has-text-weight-semibold has-text-warning mb-4">
							<BiTime /> Pending
						</h2>
						{this.state.pendingTasks.length < 1 ? (
							<span className="is-size-7">No tasks pending</span>
						) : null}
						<ul>
							{this.state.pendingTasks.map((task) => (
								<Task
									key={task.id}
									task={task}
									onClickComplete={this.completeTask}
									onClickEdit={this.editTask}
									onClickDelete={this.deleteTask}
								/>
							))}
						</ul>
					</div>

					{/* Complete tasks */}
					<div className="box">
						<h2 className="is-size-5 has-text-weight-semibold has-text-success mb-4">
							<BiCheck /> Complete
						</h2>
						{this.state.completeTasks.length < 1 ? (
							<span className="is-size-7">No tasks completed</span>
						) : null}
						<ul>
							{this.state.completeTasks.map((task) => (
								<Task
									key={task.id}
									task={task}
									onClickDelete={this.deleteTask}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
