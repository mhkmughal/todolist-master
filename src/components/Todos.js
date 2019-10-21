import React, { Component } from "react";

import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => {
            return (<TodoItem key={todo.id} editTodo={this.props.editTodo} todo = {todo} delTodo={this.props.delTodo}/>)
        });
    }
}
export default Todos;