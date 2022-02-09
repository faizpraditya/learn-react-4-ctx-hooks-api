import logo from './logo.svg';
import './App.css';
import { Component, createContext } from 'react';
import FirstCounter from './FirstCounter';
import SecondCounter from './SecondCounter';
import Todo from './todo/Todo';
import MyProvider from './context/MyProvider';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export const RootContext = createContext()

// // kalau mau menyingkat RootContext.Provider
// const Provider = RootContext.Provider
class App extends Component{
// const Provider = RootContext.Provider
  render(){
    return(
      // <Provider value={
      //     {
      //       state: this.state,
      //       reducer: this.reducer,
      //       todoReducer: this.todoReducer
      //     }
      //   }
      // >
      <MyProvider>
      <div className='App'>
        {/* <header className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FirstCounter/>
        <br/>
        <SecondCounter/>
        <br/> */}
        <div className="container my-5 py-5">
          <Todo/>
        </div>
      </div>
      </MyProvider>
      // </Provider>
    )
  }
}

export default App;
