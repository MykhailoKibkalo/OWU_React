import './App.css';
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';

export default function App () {
    const counter = useSelector(({counter}) => counter);

    return (    
        <div>
            <h1> Hello {counter} </h1>
            <div>
                <button onClick={() => dispath({type: 'INC_COUNTER'})} ></button>
                <button onClick={() => dispath({type: 'DEC_COUNTER'})} ></button>
                <button onClick={() => dispath({type: 'RESET'})} ></button>
            </div>
        </div>
    );
}
