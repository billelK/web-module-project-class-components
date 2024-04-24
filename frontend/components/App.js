import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"

const todoListMock = [
  {
    name: "Gear up Ilvl + ",
    id: 1528826598,
    completed: false
  },
  {
    name: "Raid Lfr",
    id: 1528816598,
    completed: false
  }
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoListMock,
      inputVal: "",
      showAll: true
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({todoList: [...this.state.todoList, 
      {name: this.state.inputVal, id: Math.floor(Math.random() * 1000000000), completed: false }]})
      this.setState({inputVal: ""})
  }

  onChange = (e) => {
    this.setState({inputVal: e.target.value})
  }

  markAsDone = (mTodo) => {
    let todos = this.state.todoList.map(todo => {
      if ( todo.id === mTodo.id ) return {...mTodo, completed: !todo.completed}
      return todo
    })
    this.setState({todoList: todos })
  }

  hideCompleted () {
    console.log("lell");
    let filtered = [...this.state.todoList]
    console.log(filtered);
    // this.setState({todoList: filtered})
  }
  render() {
    return (
      <div>
        <h2>Todos :</h2>
        <br/>
        <TodoList todoList ={this.state.todoList} markAsDone={this.markAsDone} showAll={this.state.showAll}/>
        <br/>
        <Form hideCompleted={this.hideCompleted} submit= {this.onSubmit} inputVal ={this.state.inputVal} onChange={this.onChange}/>
      </div>
    )
  }
}
