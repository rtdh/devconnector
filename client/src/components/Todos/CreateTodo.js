import React, { Component } from 'react';
import axios from 'axios';

class CreateTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            description: '',
            responsible: '',
            priority: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    onChangeTodoPriority(e){
        //console.log(e.target.value)
        this.setState({priority : e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        
        const newTodo = {
            description : this.state.description,
            responsible : this.state.responsible,
            priority : this.state.priority
        }
        console.log(newTodo)
        axios
            .post('http://localhost:5000/createtodo', newTodo)
            .then(res=>{
                //console.log(res.data)
                this.props.history.push('/todoslist');
            })
            .catch(error=>{
                console.log(error)
            })
    
    }

    render() {
        return (
            <div className="container" style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                name="responsible"
                                value={this.state.responsible}
                                onChange={this.onChange}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.priority==='Low'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium"
                                    checked={this.state.priority==='Medium'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High"
                                    checked={this.state.priority==='High'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateTodo;
