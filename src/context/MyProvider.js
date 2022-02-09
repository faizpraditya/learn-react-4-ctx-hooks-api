import ActionType from "./actionType";
import RootContext from "./RootContext";

const MyProvider = () => {
  const state = {
    todo : [
      {
        todo:'tes',
        description:'description tes',
        done: false,
      },
    ],
  }

  const todoDispatch = (action) => {
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

export default MyProvider