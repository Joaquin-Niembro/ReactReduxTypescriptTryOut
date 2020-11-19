import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
	todos: Todo[];
	fetchTodos(): any;
	deleteTodo(id: number): any;
}
interface AppState {
	fetching: boolean;
}
class Todos extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);

		this.state = {
			fetching: false,
		};
	}
	componentDidUpdate(prevProps: AppProps):void{
		if(!prevProps.todos.length && this.props.todos.length){
			this.setState({fetching: false})
		}
	}
	onClick = (): void => {
		this.props.fetchTodos();
		this.setState({ fetching: true })
	};
	onTodoClick = (id: number):void =>{
		this.props.deleteTodo(id);
	}
	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => (
			<div key={todo.id} onClick={()=> this.onTodoClick(todo.id)}>{todo.title}</div>
		));
	}
	render() {
		console.log(this.props)
		return (
			<div>
				<button onClick={this.onClick}>Fetch</button>
				{this.state.fetching ? 'Loading...': null}
				{this.renderList()}
			</div>
		);
	}
}
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return {
		todos: todos,
	};
};
const mapDispatchToProps = {
	fetchTodos,
	deleteTodo
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
