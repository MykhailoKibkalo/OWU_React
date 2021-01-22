import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function App () {
    const counter = useSelector(({counter}) => counter);
    const user = useSelector(({user}) => user)
    const dispatch = useDispatch();
    return (    
        <div>
            <h1> Hello {counter} {user.name} </h1>
            <div className={'btn'}>
                <button onClick={() => dispatch({type: 'INC_COUNTER'})} >inc</button>
                <button onClick={() => dispatch({type: 'DEC_COUNTER'})} >dec</button>
                <button onClick={() => dispatch({type: 'RESET'})} >reset</button>
                <button onClick={() => dispatch({type: 'CHANGE_NAME'})} >name</button>
            </div>

        </div>
    );
}
