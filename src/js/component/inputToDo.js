import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { ToDoItems } from "./toDoItems";
import { ToDoList } from "./toDoList";
import "../../styles/index.scss";

export class InputToDo extends React.Component {
	render() {
		const { item, handleChange, handleSubmit } = this.props;
		return (
			<div className="card card-body my-3">
				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fas fa-book" />
							</div>
						</div>
						<input
							type="text"
							className="form-control text-capitalize"
							placeholder="add to do items"
							value={this.state.item}
							onChange={this.handleChange}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-block btn-primary mt-3">
						Add Items
					</button>
				</form>
			</div>
		);
	}
}

/*export class InputToDo extends React.Component {
	constructor() {
		super();
		this.state = {
			content: ""
		};
		/*handleChange = e => {
			this.setState({
				[e.target.name]: e.target.value
			});
		};*/
/*	}
	render() {
		return (
			<div id="container">
				<h1 className="header">TODOS</h1>
				<input
					className="addToDo"
					onChange={this.handleChange}
					value={this.state.content}
					type="text"
					placeholder="What need to be done?"
				/>
				<ul>
					<li>
						<span>
							<i className="items" />
						</span>
						Eat
					</li>
				</ul>
			</div>
		);
	}
}*/
