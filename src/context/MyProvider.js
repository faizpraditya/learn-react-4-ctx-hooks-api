import { Component } from "react";
import ActionType from "./actionType";
import RootContext from "./RootContext";

class MyProvider extends Component {
  state = {
    globalNumber : 0,
    todo : [
      {
        todo:'tes',
        description:'description tes',
        done: false,
      },
    ],
  }

  dispatch = (action) => {
    if(action.type === "PLUS") {
      // return this.setState({
      this.setState({
        globalNumber: this.state.globalNumber + 1
      })
    }
    if(action.type === "MINUS") {
      // return this.setState({
      this.setState({
        globalNumber: this.state.globalNumber - 1
      })
    }
  }

  todoDispatch = (action) => {
    if(action.type === ActionType.ADD_TODO) {
      this.setState({
        todo : [...this.state.todo, action.newTodo]
      })
    }
    if(action.type === ActionType.DELETE_TODO) {
      this.setState({
        todo : this.state.todo.filter(td => td.todo !== action.todo)
      })
    }
    if(action.type === ActionType.DONE_TODO) {
      this.state.todo.forEach((tdo) => {
        if (tdo.todo===action.tdo) {
          tdo.status = !tdo.status
        }
      })
      this.setState({})
    }
  }

  render(){
    return(
      <RootContext.Provider value={
        {
          state: this.state,
          dispatch: this.dispatch,
          todoDispatch: this.todoDispatch
        }
      }>
        {this.props.children}
      </RootContext.Provider>
    )
  }
}

export default MyProvider