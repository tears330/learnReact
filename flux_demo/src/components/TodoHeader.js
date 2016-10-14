import React, { Component } from 'react';
import { TodoActions } from '../actions/todoActions';

class TodoHeader extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onAdd = this.onAdd.bind(this);
		this.state = {
			text: '',
			editing: false,
		};
	}
	onChange(event) {
		this.setState({
			text: event.target.value,
		});
	}
	onAdd() {
		TodoActions.addTodo(this.state.text);
		this.setState({
			text: '',
		});
	}
	render() {
		return (
			<div>
				<h1>TodoFlux</h1>
				<div>
					<input type="text"
						value={this.state.text}
						placeholder="type some thing"
						onChange={this.onChange}/>
					<button onClick={this.onAdd}>添加</button>
				</div>
			</div>
		);
	}
}

export default TodoHeader;