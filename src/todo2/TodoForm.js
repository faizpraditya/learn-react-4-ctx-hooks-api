import { useState } from "react"
import { useDispatch } from "react-redux"
import ActionType from "../redux/ActionType"

export const TodoForm = () => {
    const [todos, setTodo] = useState()
    const dispatch = useDispatch()

    const handleTodo = (event) => {
        setTodo({...todos, todo : event.target.value})
    }

    const handleDesc = (event) => {
        setTodo({...todos, desc : event.target.value})
    }

    const handleSubmit = (event) => {
        dispatch({type:ActionType.ADD_TODO, payload: todos})
        event.preventDefault()
    }

    return(
        <div className="container"> TODOS FORM <form onSubmit={handleSubmit}> <div className="form-group"> <label htmlFor="exampleInputEmail1">To Do</label> <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ToDo" onChange={handleTodo} /> </div> <div className="form-group"> <label htmlFor="exampleInputPassword1">Desc</label> <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Desc" onChange={handleDesc} /> </div> <br/> <button type="submit" className="btn btn-primary"> Submit </button> </form> </div> 
    )
}