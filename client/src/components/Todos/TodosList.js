import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './todo.css'

class TodosList extends Component {

    constructor(props){
        super(props)
        this.state = {
            loading : false,
            items: [],
            completed : false
            
        }
        this.onClick = this.onClick.bind(this)
        this.getTodos = this.getTodos.bind(this)
        this.onCheckboxChange = this.onCheckboxChange.bind(this)
        
    }

    componentDidMount(){
        this.setState({loading: true})
        this.getTodos()
    }

    getTodos(){
        axios   
            .get('http://localhost:5000/todoslist')
            .then(res=>{
                this.setState({loading: false})
                //console.log(res.data)
                this.props.dispatch({
                    type: 'GET_TODOS',
                    payload: res.data
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }

    onClick(e,id){
        e.preventDefault()
        axios
            .delete('http://localhost:5000/todos/delete/' + id)
            .then(res=>{
                this.getTodos()
                // this.props.history.push('/todoslist')
            })
    }
    
    onCheckboxChange(e, id){
        
            axios
                .post('http://localhost:5000/update/' + id)
                .then(res=>{
                    this.getTodos()
                    console.log(res.data)
                })
                .catch(error=>{
                    console.log(error)
                })
                
    }

    render() {
        const { todos } = this.props
        return (
            <div className="container mt-4">
                {this.state.loading ? <div>loading data ....</div> : null}
                {todos.length > 0 ? (
                <table className="table table-bordered table-striped table-hover">
                    <thead className="bg-dark text-white">
                        <tr><td>Slno</td><td>Completed</td><td>Item</td><td>Priority</td><td colSpan="2">Options</td></tr>
                    </thead>
                    <tbody>
            {todos.map((todo,index)=>(
                <tr key={todo._id}>
                    <td>{index + 1}</td>
                    <td><input type="checkbox" checked = {todo.completed ? 'checked' : null} onChange={(e)=>this.onCheckboxChange(e,todo._id)}/>
                    </td><td className={todo.completed ? 'completed' : ''}>{todo.description}</td>
                    <td>{todo.priority}</td>
                    <td><Link to={'/edit/' + todo._id}>Edit</Link></td>
                    <td><a href="" onClick={(e)=>this.onClick(e,todo._id)}>Delete</a></td></tr>
            ))}
                    </tbody>
                </table>) : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo.todos
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);