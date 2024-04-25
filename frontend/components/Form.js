import e from 'cors'
import React from 'react'

export default class Form extends React.Component {
  render() {
    let {toggleShow, showAll} = this.props
    return (
      <div>
        <form >
          <input onChange={this.props.onChange} value={this.props.inputVal} type='text' placeholder='type todo'/>
          <input type='submit' onClick={this.props.submit}/>
          <br/>
          <br/>
        </form>
          <button onClick={() => toggleShow()}>{showAll? "Hide Completed" : "Show All"}</button>
      </div>
    )
  }
}
