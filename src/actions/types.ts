import {DeleteTodoAction,FetchTodoAction} from './todos'
export enum ActionTypes{
    fetchTodos = 'FETCH_TODOS',
    deleteTodo = 'DELETE_TODO'
}
export type ActionTodo = (FetchTodoAction | DeleteTodoAction)