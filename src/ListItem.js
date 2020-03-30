import React, { Component } from 'react'
import './ListItem.css'

class ListItem extends Component {

  completeTask(name) {
    this.props.completeTask(name)
  }


  render() {
    return (
      <ul>
        {
          this.props.data.map(element => {
            return (
              <li className="listItem" key={element.name}>

                <span style={{color: element.done === false ? "red" : "green"}}>{element.name}</span>
                <button className="complete" onClick={this.completeTask.bind(this, element.name)}>完成</button>
              </li>)
        })
      }
      </ul>
    )
  }
}

export default ListItem