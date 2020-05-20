import React from "react";
import ToDoList from "./toDoList";

//include images into your bundle

//create your first component
export default class ToDoItems extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<li className="list-group-item text-capitalize d-flex justify-content-between my-2">
				<h6>{title}</h6>
				<div className="todo-icon">
					<span className="mx-2 text-success">
						<i className="fas fa-pen" />
					</span>
					<span className="mx-2 text-danger">
						<i className="fas fa-trash" />
					</span>
				</div>
			</li>
		);
	}
}
