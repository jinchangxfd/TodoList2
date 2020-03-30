import React, { Component } from 'react';
import ListItem from './ListItem';
import './index.css';

class TodoList extends Component {
    constructor() {
      super()
      this.state = {
        list: [
            {name:'React practice',done:true},
            {name:'game time',done:false}],
        inputVal: ''
      }
    }
    addTask() {
      if (!this.state.inputVal) return
      this.setState({
        list: [...this.state.list, {
          name: this.state.inputVal,
          done: false
        }],
        inputVal: ''
      })
    }
    handleChange(e) {
      this.setState({
        inputVal: e.target.value
      })
    }

    completeTask(name) {
      const TodoList = []
      this.state.list.forEach((element, index) => {
        if (element.name === name) {
          const item = this.state.list[index]
          TodoList.push(Object.assign({}, item, {done: item.done = true}))
          this.setState({
            list: TodoList
          })
        } else {
          TodoList.push(element)
        }
      })
    }
    render() {
      return (
        <div className="reactTodoList">
        <ListItem data={this.state.list} 
          completeTask={this.completeTask.bind(this)}/>
        <footer>
          <input type="text" value={this.state.inputVal} onChange={this.handleChange.bind(this)} ></input>
          <button className= "addTodo" onClick={this.addTask.bind(this)}>添加</button>
        </footer>
      </div>
      )
    }
  }

  export default TodoList;
  