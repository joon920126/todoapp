import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state={
    todos:[
      {id:1, content: 'TODO을 적어보세요'},
      {id:2, content: '작성된 TODO를 누르면 삭제됩니다'}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random() 
    const newTodos=[...this.state.todos, todo]
    this.setState({todos:newTodos})
  }

  deleteTodo = (id) => {
    const newTodos=this.state.todos.filter(todos=>todos.id!==id)
    this.setState({todos:newTodos})
  }
 
  render(){
      return (
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>
      );
    }
  }

export default App;