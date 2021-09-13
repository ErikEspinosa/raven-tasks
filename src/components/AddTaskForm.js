import React, { Component } from "react";

export default class AddTaskForm extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
		};

		this.inputHandle = this.inputHandle.bind(this);
		this.submitHandle = this.submitHandle.bind(this);
	}

	inputHandle(e) {
		this.setState({ input: e.target.value });
	}

	submitHandle(e) {
		e.preventDefault();

		if (this.state.input === "") {
			return false;
		}

		this.props.onSubmit(this.state.input);

		this.setState({
			input: "",
		});
	}

	componentDidMount() {
		this.description.focus();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submitHandle}>
					<input
						type="text"
						name="description"
						placeholder="Add a new task"
						autoComplete="false"
						className="input is-primary is-medium has-text-primary"
						ref={(input) => {
							this.description = input;
						}}
						value={this.input}
						onChange={this.inputHandle}
					/>
				</form>
			</div>
		);
	}
}
