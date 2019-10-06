import React from 'react';
import './todo.css';

const Todo = (props) => {
    return (
        <div className='Todo' id={props.id} onClick={props.onCompleteStatusChange}>{props.text}</div>
    )
}

export default Todo;