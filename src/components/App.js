import React from 'react';
import './App.css';

import TodoList from './todoList/todoList';
import AddTodo from './addTodo/addTodo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

  onAddTodo = (e) => {
    const _id = Math.round(Math.random() * 100000);
    const inputValue = e.target.parentNode.querySelector('input').value;
    const newTodo = { _id, text: inputValue, completed: false };
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  onToggleTodo = (e) => {
    const todoId = this.state.todos.findIndex(todo => todo._id.toString() === e.target.id);
    e.target.style.textDecoration = !(this.state.todos[todoId].completed) ? 'line-through' : 'none';
    this.setState(state => {
      state.todos[todoId].completed = !(state.todos[todoId].completed)
    })
  }

  render() {
    return (
      <div className="App">
        < AddTodo data={this.state.todos} onClick={this.onAddTodo} />
        < TodoList data={this.state.todos} onCompleteStatusChange={this.onToggleTodo} />
      </div>
    )
  }
}

export default App;
