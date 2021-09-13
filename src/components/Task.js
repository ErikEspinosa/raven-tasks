import React, { Component } from "react";
import moment from "moment";
import { BiCheck } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";

export default class Task extends Component {
	constructor() {
		super();
		this.state = {
			inputEdit: "",
			isEdit: false,
		};
	}

	// Complete button handle
	clickCompleteHandle(id, e) {
		e.preventDefault();
		this.props.onClickComplete(id);
	}

	// Edit button handle
	clickEditHandle(id, description, e) {
		e.preventDefault();
		this.props.onClickEdit(id, description);
		this.setState({ isEdit: false });
	}

	// Delete button handle
	clickDeleteHandle(id, e) {
		e.preventDefault();
		this.props.onClickDelete(id);
	}

	// Open modal button handle
	openModalHandle(e) {
		e.preventDefault();
		this.setState({
			inputEdit: this.props.task.description,
			isEdit: true,
		});
	}

	// Close modal button handle
	closeModalHandle(e) {
		e.preventDefault();
		this.setState({
			inputEdit: "",
			isEdit: false,
		});
	}

	render() {
		return (
			<li
				key={this.props.task.id}
				className={`notification ${
					this.props.task.is_complete ? "is-success" : "is-warning"
				} is-light`}
			>
				<div className="columns">
					{/* Task information */}
					<div className="column is-two-thirds">
						<p>
							<span className="is-block has-text-weight-semibold">
								{this.props.task.description}
							</span>
							<span className="is-block is-size-7">
								{`Created at: ${moment(this.props.task.created_at).format(
									"MMMM Do YYYY, h:mm:ss a"
								)}`}
							</span>
						</p>
					</div>

					{/* Task buttons */}
					<div className="column auto">
						<div className="is-flex is-justify-content-end buttons">
							{!this.props.task.is_complete ? (
								<>
									<button
										type="submit"
										className="button is-success"
										onClick={(e) => {
											this.clickCompleteHandle(this.props.task.id, e);
										}}
									>
										<BiCheck />
									</button>

									<button
										className="button is-info"
										onClick={(e) => this.openModalHandle(e)}
									>
										<BiEdit />
									</button>
								</>
							) : null}

							<button
								type="submit"
								className="button is-danger"
								onClick={(e) => {
									this.clickDeleteHandle(this.props.task.id, e);
								}}
							>
								<BiTrash />
							</button>
						</div>
					</div>
				</div>

				{/* Modal edit task */}
				<div className={`modal ${this.state.isEdit ? "is-active" : ""}`}>
					<div className="modal-background"></div>
					<div className="modal-content">
						<div className="box">
							<h3 className="subtitle">Edit task</h3>
							<form
								onSubmit={(e) => {
									this.clickEditHandle(
										this.props.task.id,
										this.state.inputEdit,
										e
									);
								}}
							>
								<div className="field">
									<input
										type="text"
										name="description"
										className="input"
										value={this.state.inputEdit}
										onChange={(e) => {
											this.setState({ inputEdit: e.target.value });
										}}
									/>
								</div>
								<div className="field">
									<div className="buttons">
										<button type="submit" className="button is-success">
											Save changes
										</button>
										<button
											className="button is-danger"
											onClick={(e) => {
												this.closeModalHandle(e);
											}}
										>
											Cancel
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<button
						className="modal-close is-large"
						aria-label="close"
						onClick={(e) => {
							this.closeModalHandle(e);
						}}
					></button>
				</div>
			</li>
		);
	}
}
