import React, { Component } from 'react';

export class TodoItem extends Component {
    
    addBtn = () => {
        return {
            background: '#F4F4F4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    };

    delBtn = () => {
        return {
            borderBottom: '1px #ccc dotted',
            marginLeft:'90%',
        }
    };
    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.addBtn()}>
                <p>
                    {title}      

                <button 
                    onClick={this.props.delTodo.bind(this, id)}  
                    style={this.delBtn()}>
                    Delete
                </button>

                <button 
                    onClick={this.props.editTodo}
                    style={this.delBtn()}>
                    Edit
                </button>
                </p>              
            </div>
        )
    }
}
export default TodoItem;