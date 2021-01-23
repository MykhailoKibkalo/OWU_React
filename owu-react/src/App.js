import './App.css';
import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function App() {
    const input1 = useRef(null);
    const input2 = useRef(null);
    const counter = useSelector(({counter}) => counter);
    const user = useSelector(({user}) => user)
    const dispatch = useDispatch();

    return (
        <div>
            <h1> Hello {counter} Name: {user.name}; Age:{user.age}; </h1>
            <div className={'btn'}>
                <button onClick={() => dispatch({type: 'INC_COUNTER'})}>inc</button>
                <button onClick={() => dispatch({type: 'DEC_COUNTER'})}>dec</button>
                <button onClick={() => dispatch({type: 'RESET'})}>reset</button>
                <br/>
                <input type={'text'} ref={input1} placeholder={'New name'}/>
                <input type={'number'} ref={input2} placeholder={'New age'}/>
                <br/>
                <button onClick={() => dispatch({type: 'CHANGE_NAME', payload: input1.current.value})}>NEW_NAME</button>
                <button onClick={() => dispatch({type: 'CHANGE_AGE', payload: input2.current.value})}>NEW_AGE</button>

            </div>

        </div>
    );
}
