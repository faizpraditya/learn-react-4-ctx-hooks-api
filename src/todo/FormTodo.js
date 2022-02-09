import { useState } from "react";

const FormTodo = (props) => {
    let stateForm = props.td

    let [state, setState] = useState(stateForm)

    // const checkForm = () => {
    //     console.log(state)
    //     if (state.todo !== '' && state.description !== '') {
    //         // state.isDisable = false
    //         // setState(state)
    //     } else {
    //         // state.isDisable = true
    //         // setState(state)
    //     }
    // }

    const handleChange = (event) => {
        if(event.target.name === 'todo'){
            // state.todo=event.target.value
            setState({
                ...state,
                todo:event.target.value
            })
            // checkForm()
        } else if(event.target.name === 'todoDescription'){
            // state.description=event.target.value
            setState({
                ...state,
                description:event.target.value
            })
            // checkForm()
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(state);
        // props.todoDispatch({type:"ADD_TODO",newTodo:state})
        props.addTodo(state)
        props.changeFormList()
    }

    const handleUpdate = (event, index) => {
        event.preventDefault()
        // console.log(state);
        props.updateTodo(index, state)
        props.changeAddUpdate()
        props.changeFormList()
        setFormState(index)
    }

    const setFormState = (index) => {
        setState(
            props.todo[index]
        )
    }

    const handleCancel = (event) => {
        props.changeFormList()
        event.preventDefault()
    }

    const handleCancelUpdate = (event) => {
        props.changeAddUpdate()
        props.changeFormList()
        event.preventDefault()
    }

    return(
        <>
        {/* {setFormState()} */}
        {
            props.update ? 
                <div className="d-flex text-light justify-content-center">
                <div className="col-6 card bg-dark p-4 d-flex justify-content-start">
                    <form onSubmit={(event)=>handleUpdate(event, props.updateIndex)}>
                    <h3 className="mb-4">Update New To-do</h3>
                    <div className="form-group">
                        <label>To-do Name<small className="text-danger">*</small></label>
                        <input value={state.todo} name="todo" onChange={handleChange} className="form-control" placeholder="Enter To-do Name"/><br/>
                    </div>
                    <div className="form-group">
                        <label>Description<small className="text-danger">*</small></label>
                        <input value={state.description} name="todoDescription" onChange={handleChange} className="form-control" placeholder="Enter Description"/><br/>
                    </div>
                    <button onClick={handleCancelUpdate} className="btn btn-secondary mx-2 mt-3">Back</button>
                    <button type="submit" className="btn btn-primary mt-3">Update</button>
                    </form>
                </div>
                </div>
            :
                <div className="d-flex text-light justify-content-center">
                <div className="col-6 card bg-dark p-4 d-flex justify-content-start">
                    <form onSubmit={handleSubmit}>
                    <h3 className="mb-4">Add New To-do</h3>
                    <div className="form-group">
                        <label>To-do Name<small className="text-danger">*</small></label>
                        <input name="todo" onChange={handleChange} className="form-control" placeholder="Enter To-do Name"/><br/>
                    </div>
                    <div className="form-group">
                        <label>Description<small className="text-danger">*</small></label>
                        <input name="todoDescription" onChange={handleChange} className="form-control" placeholder="Enter Description"/><br/>
                    </div>
                    <button onClick={handleCancel} className="btn btn-secondary mx-2 mt-3">Back</button>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
                </div>
        }
        </>
    )
}

export default FormTodo