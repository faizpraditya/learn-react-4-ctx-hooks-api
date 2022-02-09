import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './todo/Todo';
import ActionType from './context/actionType';

// function App() {
const App = () => {
  let todo = [
    {
      todo:'tes',
      description:'description tes',
      status: false,
    },
  ]

  // const [number, setNumber] = useState(0)

  // // harus di declar type dari variablenya, misal const
  // const increment = () => {
  //   setNumber(
  //     number+1
  //   )
  // }
  // const decrement = () => {
  //   if (number>0) {
  //     setNumber(
  //       number-1
  //     )
  //   }
  // }

  // const [number, setNumber] = useState(0)

  // harus di declar type dari variablenya, misal const
  // const setVal = (val) => {
  //   setNumber(val)
  // }
  
  const [todos, setTodo] = useState(todo)
  
  const addTodo = (newTodo) => {
    setTodo([
      ...todos, newTodo
    ])
  }

  const deleteTodo = (todo) => {
    setTodo(
      todos.filter(td => td.todo !== todo)
    )
  }

  const updateTodo = (index, updatedTodo) => {
    todos[index] = updatedTodo
    setTodo(todos)
  }

  const doneTodo = (index) => {
    console.log(todos[index]);
    todos[index].status = !todos[index].status
    setTodo(todos)
  }
  

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      {/* <button onClick={decrement}>+</button> */}
      {/* {number} */}
      {/* <button onClick={increment}>+</button> */}
      {/* <ButtonDecrement number={number} callback={setVal} /> */}
      {/* <ButtonIncrement number={number} callback={setVal} /> */}
      <Todo
        todo = {todos}
        addTodo = {addTodo}
        deleteTodo = {deleteTodo}
        updateTodo = {updateTodo}
        doneTodo = {doneTodo}
      />
    </div>
  );
}

export default App;
