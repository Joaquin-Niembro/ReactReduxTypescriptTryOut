import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}
const url = 'https://jsonplaceholder.typicode.com/todos';

export interface FetchTodoAction {
	type: ActionTypes.fetchTodos;
	payload: Todo[];
}

export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		const response = await axios.get<Todo[]>(url);

		dispatch<FetchTodoAction>({
			type: ActionTypes.fetchTodos,
			payload: response.data,
		});
	};
};

export interface DeleteTodoAction {
	type: ActionTypes.deleteTodo;
	payload: number;
}
export const deleteTodo = (id: number): DeleteTodoAction => {
	return {
		type: ActionTypes.deleteTodo,
		payload: id,
	};
};
