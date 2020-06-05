import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class EmployeeDetailsReport extends Component {

    componentDidMount(){

        axios
            .get('http://localhost:5000/getTeacher')
            .then(res=>{
                console.log(res.data)
                this.props.dispatch({
                    type : 'LOAD_TEACHER',
                    payload: res.data
                })
            })
            .catch(err=>console.log(err))
    }

    render() {

        const { teacher } = this.props
        const { user } = this.props
        

        return (
            <div>
                Employee details report
                {teacher ? (<div>{teacher.basicDetails[0].name}</div>) : null}
                
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        teacher : state.esr.esrteacher,
        user : state.auth.loginUser
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetailsReport);

