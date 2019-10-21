import React, { Component } from "react";

class editTodo extends Component {
    render() {
        return (
            <div>
                <input type="text"
                    style={{ display: 'inline-block' }}
                    onClick={this.editTodo} 
                />
            </div> 
        )};
}
export default editTodo;