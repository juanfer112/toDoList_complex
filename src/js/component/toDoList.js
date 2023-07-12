import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "../../styles/index.scss";
import ToDoItems from "./toDoItems";

export class ToDoList extends React.Component {
	render() {
		const { items } = this.props;
		return (
			<div>
				<ul className="list-group my-5">
					<h3 className="text-capitalize text-center">todo list</h3>
					{items.map(item => {
						return <ToDoItems key={item.id} title={item.title} />;
					})}

					<button
						type="button"
						className="btn btn-danger btn-block text-capitalize mt-5">
						clear list
					</button>
				</ul>
			</div>
		);
	}
}