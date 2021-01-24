import {SET_TODOS, TOGGLE_TODO_STATUS, REMOVE_TODOS} from '../action-types';

export const setTodos = (payload) => ({type: SET_TODOS,payload});
export const toggleStatus = () => ({type: TOGGLE_TODO_STATUS});
export const removeTodos = () => ({type: REMOVE_TODOS});

export const  fetchTodo =  async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        dispatch(setTodos(data));
}

