import React, {useEffect} from 'react';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {incCounter, decCounter, resetCounter, setTodos, toggleStatus, removeTodos, fetchTodo} from './redux';


export default function App()  {
    const storeData = useSelector(({counter: {counter}, todos: {todos}}) => ({counter, todos}));
    const dispatch = useDispatch();
    const handleInc = () => dispatch(incCounter());
    const handleDec = () => dispatch(decCounter());
    const handleReset = () => dispatch(resetCounter());

    useEffect(() => {
        fetchTodo(dispatch);
    }, [dispatch])


    return (
        <div>
            <h1>HomeWork less9 React Redux</h1>
            <h2>Counter: {storeData.counter}</h2>
            <button onClick={handleInc}>inc</button>
            <button onClick={handleDec}>dec</button>
            <button onClick={handleReset}>res</button>
            {storeData.todos.map((todo) => (
                <h3>
                    ID:{todo.id}; Title:{todo.title};
                </h3>
            ))}
        </div>
    );
}
