import React, {useState, useEffect, useReducer, useRef} from "react";

const inputId = React.createRef();
const inputTitle = React.createRef();
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER' : {
            return action.payload;
        }
        case 'SET_USER_ID': {
            return {
                ...state,
                id: action.payload
            };
        }
        case 'SET_TITLE': {
            return {
                ...state,
                title: action.payload
            };
        }
        case 'SET_STATUS': {
            return {
                ...state,
            completed: !state.completed
        }
        }

        default : {
            return state;
        }
    }
}

const initialState = {
    userId: null,
    id: null,
    title: '',
    completed: false
}
export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [counter, setCounter] = useState(1);
    const inputId = useRef(null);
    const inputTitle = useRef(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(response => response.json())
            .then(json => {
                dispatch({type: 'SET_USER', payload: json});
            });
    }, [counter])

    const onClickSetTodo = () => {
        setCounter((next) => next + 1);
    }
    const changeId = () => {
        dispatch({type:'SET_USER_ID',payload: inputId.current.value})
    }
    const changeTitle = () => {
        dispatch({type:'SET_TITLE', payload: inputTitle.current.value})
    }
    const changeStatus = () => {
        dispatch({type:'SET_STATUS'})
    }
    return (
        <div>
            <h3> Counter: {counter}</h3>
            <button onClick={onClickSetTodo}> Next user</button>

            {state &&
            <div>
                Id:{state.id};
                title:{state.title},
                Status:{state.completed.toString()}.
            </div>
            }
            <form>
                <input type={'number'} placeholder={'New Id'} ref={inputId}/>
                <input type={'text'} placeholder={'New Title'} ref={inputTitle}/>
                <input type={'button'} onClick={changeId} value={'Change userId'}/>
                <input type={'button'} onClick={changeTitle} value={'Change title'}/>
                <input type={'button'} onClick={changeStatus} value={'Change status'}/>
            </form>
        </div>
    );
}