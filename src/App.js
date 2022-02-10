import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './todo/Todo';
import ActionType from './context/actionType';
import { useSelector } from 'react-redux';
import DecrementButton from './component/DecrementButton';
import IncrementButton from './component/IncrementButton';
import { TodoList } from './todo2/TodoList';
import { TodoForm } from './todo2/TodoForm';

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
  

  const counter = useSelector((state) => state.nilai)

  return (
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
      {counter}
      <br/>
      <DecrementButton/>
      <IncrementButton/>
      <br/>
      <TodoList/>
      <br/>
      <TodoForm/>
    </div>
  );
}

export default App;
