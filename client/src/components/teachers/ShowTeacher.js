import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

class ShowTeacher extends Component {
    constructor(props){
        super(props)
        this.state = {
            teacher: []
        }
    }

    componentDidMount(){
        //console.log(this.props)
        axios
            .post('http://localhost:5000/teacher/show/' + this.props.match.params.id)
            .then(res=>{
                //console.log(res.data)
                //this.setState({teacher: res.data[0]})
                this.props.dispatch({
                    type: 'LOAD_TEACHER',
                    payload: res.data[0]
                })
            })
            .catch(err=>console.log(err.response.data))
    }
    render() {

        const  { teacher }  = this.props
        //console.log(teacher.cell)
        return (
            <div>
                <p>{teacher.teachername}</p>        
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowTeacher);
