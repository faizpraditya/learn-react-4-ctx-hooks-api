import { useState } from "react";
import RootContext from "../context/RootContext";
import FormMenu from "./FormTodo";
import ListMenu from "./ListTodo";

const Todo = (props) => {
    let todoState = {
        todo: '',
        description: '',
        done: false,
    }

    let [td, setTd] = useState(todoState)
    // const todoListForm = {
    //     addForm : false,
    // }
    
    // const [listForm, setListForm] = useState(todoListForm)
    
    let addForm = false
    let [listForm, setListForm] = useState(addForm)

    let isUpdate = false
    let [update, setUpdate] = useState(isUpdate)

    let [updateIndex, setUpdateIndex] = useState(0)

    // const changeFormList = () => {
    //     console.log(listForm)
    //     setListForm(
    //         listForm.addForm=!listForm.addForm
    //     )
    //     console.log(listForm)
    // }

    const changeUpdateIndex = (index, todo) => {
        setUpdateIndex(index)
        setTd(todo)
    }

    const changeFormList = () => {
        setListForm(
            listForm=!listForm
        )
    }

    const changeAddUpdate = () => {
        setUpdate(
            update = !update
        )
    }

    return(
        <>
        <div className="container my-5 py-5">
            {
                listForm ? <FormMenu
                    changeFormList = {changeFormList}
                    todo = {props.todo}
                    addTodo = {props.addTodo}
                    update = {update}
                    changeAddUpdate = {changeAddUpdate}
                    updateIndex = {updateIndex}
                    updateTodo = {props.updateTodo}
                    td = {td}
                /> : <ListMenu
                    changeFormList = {changeFormList}
                    todo = {props.todo}
                    deleteTodo = {props.deleteTodo}
                    changeAddUpdate = {changeAddUpdate}
                    changeUpdateIndex = {changeUpdateIndex}
                    doneTodo = {props.doneTodo}
                />
            }
        </div>
        </>
    )
}

export default Todo