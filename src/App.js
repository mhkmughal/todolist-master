import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';

// Importing React-Router
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  constructor(props){
    super (props);
      console.log('[App.js] constructor');
      this.state = {
        todos: []
      }       
  }
  
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
    })

      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }));
  }

  async getTitles() {
    try {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      if (resp) this.setState({ todos: resp.data })
      console.log(this.state)
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getTitles() 
    console.log('[App.js] componentDidMount')
  }

  delTodo = async id => {
    try {
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)    
        if (resp)  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
      } catch (error) {
          console.log(error)
      }
    }

  editTodo= async id => {
    try{
      const id = this.props.match.params.id
      const resp = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}/edit`)
      const currentState = this.state.todos
      this.setState({Todos: currentState.concat(resp)})
    }catch(error){
      console.log(error)
    }
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <br />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} editTodo={this.editTodo} delTodo={this.delTodo} />
        </div>
      </Router>
    );
  }
}
export default App;