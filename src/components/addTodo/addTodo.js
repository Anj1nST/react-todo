import React from 'react';

const AddTodo = (props) => {
    return (
        <form>
            <input />
            <button type='button' onClick={props.onClick}>Add Todo</button>
        </form>
    )
}

export default AddTodo;