import logo from './logo.svg';
import './App.css';
import { createContext, useReducer, useState } from 'react';
import Todo from './todo/Todo';
import DecrementButton from './component/DecrementButton';
import IncrementButton from './component/IncrementButton';
import { TodoList } from './todo2/TodoList';
import { TodoForm } from './todo2/TodoForm';
import ActionType from './redux/ActionType';

export const RootContext = createContext()

// const initial = 5
const initial = {
  nilai : 5,
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.PLUS:
        return {
            ...state,
            nilai : state.nilai + 1
        }
    case ActionType.MINUS:
        return {
            ...state,
            nilai : state.nilai - 1
        }
    default: return state
}
}

const App = () => {
  // let todo = [
  //   {
  //     todo:'tes',
  //     description:'description tes',
  //     status: false,
  //   },
  // ]
  
  // const [todos, setTodo] = useState(todo)
  
  // const addTodo = (newTodo) => {
  //   setTodo([
  //     ...todos, newTodo
  //   ])
  // }

  // const deleteTodo = (todo) => {
  //   setTodo(
  //     todos.filter(td => td.todo !== todo)
  //   )
  // }

  // const updateTodo = (index, updatedTodo) => {
  //   setTodo([...todos.slice(0, index), updatedTodo, ...todos.slice(index+1)])
  // }

  // const doneTodo = (index, todo) => {
  //   todo.status = !todo.status
  //   setTodo([...todos.slice(0,index), todo, ...todos.slice(index+1)])
  // }
  
  const [nilai, dispatch] = useReducer(reducer, initial)

  const handleIncrement = (data) => {
    dispatch(data)
  }

  return (
    <RootContext.Provider
      value = {
        {
          nilaiz: nilai,
          dispatch: handleIncrement,
        }
      }
    >
    <div className="App">
      {/* <button onClick={decrement}>+</button> */}
      {/* {number} */}
      {/* <button onClick={increment}>+</button> */}
      {/* <ButtonDecrement number={number} callback={setVal} /> */}
      {/* <ButtonIncrement number={number} callback={setVal} /> */}
      {/* <Todo
        todo = {todos}
        addTodo = {addTodo}
        deleteTodo = {deleteTodo}
        updateTodo = {updateTodo}
        doneTodo = {doneTodo}
      /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br/>
      <DecrementButton/>
      <IncrementButton/>
      {/* <br/>
      <TodoList/>
      <br/>
      <TodoForm/> */}
    </div>
    </RootContext.Provider>
  );
}

export default App;
