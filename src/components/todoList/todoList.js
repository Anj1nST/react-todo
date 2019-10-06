import React from 'react';
import Todo from '../todo/todo';

const TodoList = (props) => {
    return (
        <div>
            This is TodoList
            {props.data.map(todo => {
                return (
                    < Todo key={todo._id} id={todo._id} text={todo.text} onCompleteStatusChange={props.onCompleteStatusChange} />
                )
            })}
        </div>
    )
}

export default TodoList;