import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {
  render() {
    let {showAll, todoList} = this.props
    let filtered
    if (showAll) filtered = todoList
    else filtered = todoList.filter(td => td.completed === false)
    console.log(filtered);
    return (
      <div>
        {filtered.map(todo => <Todo markAsDone={this.props.markAsDone} key={todo.id} todo={todo}/> )} 
      </div>
    )
  }
}
