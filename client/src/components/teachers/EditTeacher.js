import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class EditTeacher extends Component {

    constructor(props){
        super(props)
        this.state = {
            teacher : []
        }
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
        //console.log(this.props)
        axios
            .post('http://localhost:5000/teacher/' + this.props.match.params.id)
            .then(res=>{
                //console.log(res.data)
                this.setState({teacher: res.data[0]})
                this.props.dispatch({
                    type: 'LOAD_TEACHER',
                    payload: res.data[0]
                })
            })
            .catch(err=>console.log(err.response.data))
    }

    onChange(e){
                    
        let newState = Object.assign({}, this.state)
        newState.teacher.teachername = e.target.value;
        this.setState(newState)

        this.props.dispatch({
            type: 'LOAD_TEACHER',
            payload: this.state.teacher
        })
        
        
    }

    render() {
        const {teacher} = this.state

        console.log(teacher)

        return (
            <div className="container">
            <div className="form-group">
                <input type="text" 
                className="form-control"
                value={teacher.teachername}
                onChange={this.onChange}
                />
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teacher : state.teachers.teacher
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTeacher);
