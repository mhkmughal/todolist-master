import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onSubmit = (value) => {
        value.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    onChange = (value) => 
        this.setState({ title: value.target.value });
        
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add Todo..."
                    onChange={this.onChange}          
                />
                <input
                    type="submit"
                    value="Add Todo-Item"
                    style={{ flex: '1',marginLeft:'10px' }}
                />
            </form>
        )
    }
}
export default AddTodo;