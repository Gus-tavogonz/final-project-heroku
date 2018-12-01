import React, { Component } from 'react'

class TodoItems extends Component {




  createTasks(goals) {
    return (
    <div>
    <div className="list-group-item" key={goals.key}>
    <h3>
    
    {goals.text}
    </h3>
    <p> {goals.body} </p>
    </div>
    
    
    </div>
    
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="list-group theList">{listItems}</ul>
  }
}

export default TodoItems