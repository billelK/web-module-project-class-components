import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todoList.map(todo => <Todo markAsDone={this.props.markAsDone} key={todo.id} todo={todo}/> )} 
      </div>
    )
  }
}
