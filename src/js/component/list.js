import React from "react";
import ReactDOM from "react-dom";
import { ToDoItems } from "./toDoItems";
import { ToDoList } from "./toDoList";
import { InputToDo } from "./inputToDo";

import "../../styles/index.scss";

//include bootstrap npm library into the bundle
import "bootstrap";
import uuid from "uuid";

export class List extends React.Component {
	state = {
		items: [],
		id: uuid(),
		item: "",
		editItem: false
	};
	handleChange = e => {
		this.setState({
			item: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();

		const newItem = {
			id: this.state.id,
			title: this.state.item
		};

		const updatedItems = [...this.state.items, newItem];

		this.setState({
			items: updatedItems,
			item: "",
			id: uuid(),
			editItem: false
		});
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capilize text-center" />
						TODO INPUT
						<InputToDo
							item={this.state.item}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
						/>
						<ToDoList items={this.state.items} />
					</div>
				</div>
			</div>
		);
	}
}
