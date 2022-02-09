import { Component } from "react";

class ListTodo extends Component {
    delete = (todo) => {
        if (window.confirm("Do you really want to delete this data?")) {
            this.props.todoDispatch({type:"DELETE_TODO",todo:todo})
        }
    }
    done = (todo) => {
        this.props.todoDispatch({type:"DONE_TODO",tdo:todo})
    }
    todoList = (tdo, index) => {
        if (tdo.status) {
            return(
                <>
                <th scope="row"><s>{index+1}</s></th>
                <td className="text-start"><s>{tdo.todo}</s></td>
                <td className="text-start"><s>{tdo.description}</s></td>
                <td>
                    <input className="form-check-input" type="checkbox" onClick={()=>this.done(tdo.todo)} />
                </td>
                <td>
                    {/* <button className="btn btn-warning me-2" onClick={()=>this.done(tdo.todo)}>
                        Undone
                    </button> */}
                    <button className="btn btn-danger" onClick={()=>this.delete(tdo.todo)}>
                        Delete
                    </button>
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
                    <input className="form-check-input" type="checkbox" onClick={()=>this.done(tdo.todo)} />
                </td>
                <td>
                    {/* <button className="btn btn-success me-2" onClick={()=>this.done(tdo.todo)}>
                        Done
                    </button> */}
                    <button className="btn btn-danger" onClick={()=>this.delete(tdo.todo)}>
                        Delete
                    </button>
                </td>
                </>
            )
        }
    }
    render(){
        return(
            <>
            <div className="card bg-dark p-4 d-block">
                <button onClick={this.props.changeFormList} className="btn btn-primary mb-3 ">+ Add New To-do</button>
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
                        this.props.todo.length === 0 ?
                        <tr>
                            <td colSpan={4} className="text-center">No Data Available</td>
                        </tr>
                        :
                        this.props.todo.map((tdo, index) => {
                            return (
                                <tr key={index}>
                                {this.todoList(tdo, index)}
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
}

export default ListTodo