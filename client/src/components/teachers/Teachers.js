import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class Teachers extends Component {

    constructor(){
        super()
        this.state = {
            mandal : '',
            school : ''
        }
        this.onMandalChange = this.onMandalChange.bind(this)
        this.onSchoolChange = this.onSchoolChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        axios
            .get('http://localhost:5000/mandals')
            .then(res=>{
                //console.log(res.data)
                this.props.dispatch({
                    type: 'LOAD_MANDALS',
                    payload: res.data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }

    
    onMandalChange(e){
        this.setState({mandal: e.target.value})
       const mandal = {
            mandal : e.target.value
        }
       
        axios.post('http://localhost:5000/schools', mandal)
            .then(res=>{
                this.props.dispatch({
                    type: 'LOAD_SCHOOLS',
                    payload: res.data
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
    onSchoolChange(e) {
        this.setState({school: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const mandalName = this.state.mandal;
        const schoolName = this.state.school;
        const newData = {
            mandal : mandalName, school: schoolName
        }

        axios
            .post('http://localhost:5000/teachers', newData)
            .then(res=>{
                this.props.dispatch({
                    type: 'LOAD_TEACHERS',
                    payload: res.data
                })
            })
            .catch(err=>console.log(err))
        
    }

    render() {
        const { mandals, schools, teachers } = this.props
        
        const mandalsList = mandals.length > 0
        && mandals.map((mandal, i) => (<option key={mandal.mandal} value={mandal.mandal}>{mandal.mandal}</option>))

        const schoolsList = schools.length > 0
        && schools.map((school, i) => (<option key={i} value={school.schoolname}>{school.schoolname}</option>))

        const teachersList = teachers.length > 0
        && teachers.map((teacher, i) => (<tr>
            <td>{i + 1}</td>
            <td>{teacher.teachername}</td>
            <td>{teacher.post}</td>
            <td>{teacher.gender}</td>
            <td>{teacher.dob}</td>
            <td>{teacher.yojs}</td>
            <td>{teacher.cell}</td>
            <td><a href={'/teacher/show/' + teacher.id}>Show</a></td>
            <td><a href={'/teacher/edit/' + teacher.id}>Edit</a></td>
            <td>Delete</td>
            </tr>))

        
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
            <form onSubmit={this.onSubmit}>
				<div className="form-row align-items-end">
					<div className="form-group col-lg-3 col-md-6 col-sm-12">
					  <label className="d-none d-lg-block d-md-block d-sm-none">Mandal</label>
					  <select onChange={this.onMandalChange} id="mandal" name="mandal" className="form-control">
                        <option>Select Mandal</option>
					  	{mandalsList}
                      </select>
					</div>
					{/* <div className="form-group col-lg-3 col-md-6 col-sm-12">
					  <label className="d-none d-lg-block d-md-block d-sm-none">Category</label>
					  <select id="type" name="type" className="form-control">
						  <option>Select Category</option>
					  </select>
					</div> */}
					<div className="form-group col-lg-3 col-md-6 col-sm-12">
					  <label className="d-none d-lg-block d-md-block d-sm-none">Schoolname</label>
					  <select onChange={this.onSchoolChange} id="school" name="school" className="form-control">
					  	<option>Select School</option>
                          {schoolsList}
					  </select>
					</div>
					<div id="getenrolmentBtn" className="form-group col-lg-3 col-md-6 col-sm-12">
					  <button id="enrolmentBtn" className="btn btn-success">
						  Get Teacher Data
						</button>
					</div>
				</div>
			</form>
            </div>
            </div>
            </div>
<div className="container-fluid px-5">
    <div className="row">
        <div className="col-lg-12">
            <table className="table table-bordered table-striped table-hover">
                <thead className="bg-dark text-white">
                    <tr><td>SlNo</td><td>TeacherName</td><td>Post</td><td>Gender</td><td>DOB</td><td>YOJS</td><td>CellNo</td><td>Show</td><td>Edit</td><td>Delete</td></tr>
                </thead>
                <tbody>
                    {teachersList}
                </tbody>
            </table>
        </div>
    </div>
</div>
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teachers: state.teachers.teachers,
        mandals: state.teachers.mandals,
        schools : state.teachers.schools,
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Teachers);
