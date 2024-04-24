import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <h4 onClick={() => this.props.markAsDone(this.props.todo)}> {this.props.todo.name} {this.props.todo.completed? "👌": ""} </h4>
      </div>
    )
  }
}
