import { Component } from "react";
import RootContext from "../context/RootContext";
// import { RootContext } from "../App";
import FormMenu from "./FormTodo";
import ListMenu from "./ListTodo";

class Todo extends Component {
    state = {
        addForm : false,
    }

    changeFormList = () => {
        this.setState({
            addForm : !this.state.addForm
        })
    }

    render(){
        return(
            <RootContext.Consumer>
                {
                    fromCtx => {
                        console.log(fromCtx);
                        return(
                            <>
                                {
                                    this.state.addForm ? <FormMenu
                                        changeFormList = {this.changeFormList}
                                        // reducer/dispatch
                                        todoDispatch = {fromCtx.todoDispatch}
                                    /> : <ListMenu
                                        changeFormList = {this.changeFormList}
                                        todo = {fromCtx.state.todo}
                                        // reducer/dispatch
                                        todoDispatch = {fromCtx.todoDispatch}
                                    /> 
                                }
                            </>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

export default Todo