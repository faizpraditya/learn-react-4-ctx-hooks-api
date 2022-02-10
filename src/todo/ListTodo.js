import { Button } from '@mui/material'
import { Add, Edit, Delete } from '@mui/icons-material';

const ListTodo = (props) => {
    // let isLoading = false



    // const setLoading = () => {
    //     if()
    // }

    const handleDelete = (todo) => {
        if (window.confirm("Do you really want to delete this data?")) {
            // props.todoDispatch({type:"DELETE_TODO",todo:todo})
            props.deleteTodo(todo)
        }
    }
    const handleAdd = () => {
        props.changeFormList()
    }
    const handleUpdate = (index,todo) => {
        setTimeout(() => {
            console.log(index,todo);
            props.changeUpdateIndex(index, todo)
            props.changeAddUpdate()
            props.changeFormList()
        }, 1000);
    }
    const done = (index, todo) => {
        // props.todoDispatch({type:"DONE_TODO",tdo:todo})
        props.doneTodo(index, todo)
    }
    const todoList = (tdo, index) => {
        if (tdo.status) {
            return(
                <>
                <th scope="row"><s>{index+1}</s></th>
                <td className="text-start"><s>{tdo.todo}</s></td>
                <td className="text-start"><s>{tdo.description}</s></td>
                <td>
                    <input className="form-check-input" type="checkbox" onClick={()=>done(index, tdo)} />
                </td>
                <td>
                    <Button className='me-2' startIcon={<Edit/>} variant='contained' color='success' onClick={()=>handleUpdate(index,tdo)}>Update</Button>
                    {/* <button className="btn btn-success me-2" onClick={()=>handleUpdate(index,tdo)}>
                        Update
                    </button> */}
                    <Button startIcon={<Delete/>} variant='contained' color='error' onClick={()=>handleDelete(tdo.todo)}>Delete</Button>
                    {/* <button className="btn btn-danger" onClick={()=>handleDelete(tdo.todo)}>
                        Delete
                    </button> */}
                </td>
                </>
            )
        } else {
            return(
                <>
                <th scope="row">{index+1}</th>
                <td className="text-start">{tdo.todo}</td>
                <td className="text-start">{tdo.description}</td>
                <td>
                    <input className="form-check-input" type="checkbox" onClick={()=>done(index, tdo)} />
                </td>
                <td>
                    <Button className='me-2' startIcon={<Edit/>} variant='contained' color='success' onClick={()=>handleUpdate(index,tdo)}>Update</Button>
                    {/* <button className="btn btn-success me-2" onClick={()=>handleUpdate(index,tdo)}>
                        Update
                    </button> */}
                    <Button startIcon={<Delete/>} variant='contained' color='error' onClick={()=>handleDelete(tdo.todo)}>Delete</Button>
                    {/* <button className="btn btn-danger" onClick={()=>handleDelete(tdo.todo)}>
                        Delete
                    </button> */}
                </td>
                </>
            )
        }
    }

    return(
        <>
        <div className="card bg-dark p-4 d-block">

            <Button startIcon={<Add/>} variant='contained' onClick={handleAdd}>Add New To-do</Button>
            {/* <button onClick={handleAdd} className="btn btn-primary mb-3 ">+ Add New To-do</button> */}
            <table className="table table-hover table-dark table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">To-do</th>
                        <th scope="col">Description</th>
                        <th scope="col">Completion</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.todo.length === 0 ?
                    <tr>
                        <td colSpan={5} className="text-center">No Data Available</td>
                    </tr>
                    :
                    props.todo.map((tdo, index) => {
                        return (
                            <tr key={index}>
                            {todoList(tdo, index)}
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ListTodo