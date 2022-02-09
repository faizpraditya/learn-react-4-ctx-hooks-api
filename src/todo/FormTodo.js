import { Component } from "react";

class FormTodo extends Component {
    state = {
        id: '',
        todo: '',
        description: '',
        done: false,
        isDisable: true,
    }

    checkForm = () => {
        console.log(this.state)
        if (this.state.todo !== '' && this.state.description !== '') {
            this.setState({
                isDisable : false
            })
        } else {
            this.setState({
                isDisable : true
            })
        }
    }

    handleChange = (event) => {
        if(event.target.name === 'todo'){
            this.setState({
                todo: event.target.value
            },this.checkForm)
        } else if(event.target.name === 'todoDescription'){
            this.setState({
                description: event.target.value
            },this.checkForm)
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
        this.props.todoDispatch({type:"ADD_TODO",newTodo:this.state})
        this.props.changeFormList()
    }

    handleCancel = (event) => {
        this.props.changeFormList()
        event.preventDefault()
    }

    render(){
        return(
            <>
            <div className="d-flex text-light justify-content-center">
            <div className="col-6 card bg-dark p-4 d-flex justify-content-start">
                <form onSubmit={this.handleSubmit}>
                <h3 className="mb-4">Add New To-do</h3>
                <div className="form-group">
                    <label>To-do Name<small className="text-danger">*</small></label>
                    <input name="todo" onChange={this.handleChange} className="form-control" placeholder="Enter To-do Name"/><br/>
                </div>
                <div className="form-group">
                    <label>Description<small className="text-danger">*</small></label>
                    <input name="todoDescription" onChange={this.handleChange} className="form-control" placeholder="Enter Description"/><br/>
                </div>
                <button onClick={this.handleCancel} className="btn btn-secondary mx-2 mt-3">Back</button>
                <button type="submit" className="btn btn-primary mt-3" disabled={this.state.isDisable}>Submit</button>
                </form>
            </div>
            </div>
            </>
        )
    }
}

export default FormTodo