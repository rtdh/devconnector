import React, { Component } from 'react';
import moment from 'moment';
import './PersonalDetails.css'
import axios from 'axios';

class AddTeacher extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            name: '', surname: '', gender: '', 
            hrmsid: '', cfmsid: '', aadhaar: '',
            maritalstatus: '', caste: '', phc: '',
            dob: '', dojs: '', retirementage: 60, dor: '',
            pbstate: '', pbdistrict: '', pbmandal: '', pbvillage: '',pbpincode: '', nationality: '',
            lstate: '', ldistrict: '', lrevenuedivision: '', lmandal:'',
            moleone: '', moletwo: '', height: '', selectedFile: null,dobchange: false
        }
        // this.onDOBChange = this.onDOBChange.bind(this)
        // this.onRetirementAgeChange = this.onRetirementAgeChange.bind(this)
        // this.onEmployeeDetailsSubmit = this.onEmployeeDetailsSubmit.bind(this)
        // this.onChange = this.onChange.bind(this)
        // this.onDOJSChange = this.onDOJSChange.bind(this)
        // this.onImageChange = this.onImageChange.bind(this)
    }

    // onDOBChange(e){
        
    //     const dob = moment(e.target.value).format('DD/MM/YYYY')
    //     const days = moment(e.target.value).daysInMonth()
    //     const date = moment(e.target.value).get('date')
    //     const noOfDaysToBeAdded = days - date;
    //     const dor = moment(e.target.value).add(this.state.retirementAge, 'years').add(noOfDaysToBeAdded, 'days').format('DD/MM/YYYY')
    //     this.setState({dob: dob})
    //     this.setState({dor: dor})
    //     alert(dob)
    // }

    // onDOJSChange(e){
    //     const dojs = moment(e.target.value).format('DD/MM/YYYY')
    //     this.setState({dojs: dojs})
    // }

    // onRetirementAgeChange(e){

    //     this.setState({retirementAge: e.target.value})
    //     const dob = moment(this.state.dob, 'DD/MM/YYYY')
    //     const days = moment(dob).daysInMonth()
    //     const date = moment(dob).get('date')
    //     const noOfDaysToBeAdded = days - date;
    //     const dor = moment(dob).add(e.target.value, 'years').add(noOfDaysToBeAdded, 'days').format('DD/MM/YYYY')
    //     this.setState({dor:dor})
    // }

    // onChange(e){
    //     this.setState({[e.target.name] : e.target.value})
    // }

    // onImageChange(e){
    //     e.preventDefault()
    //     //console.log(e.target.files[0])
    //     this.setState({selectedFile: e.target.files[0]})
    // }

    onEmployeeDetailsSubmit(e){
        e.preventDefault()

        const data = new FormData()

        data.append('name', this.state.name)
        data.append('surname', this.state.surname)
        data.append('gender', this.state.gender)
        data.append('hrmsid', this.state.hrmsid)
        data.append('cfmsid', this.state.cfmsid)
        data.append('aadhaar', this.state.aadhaar)
        data.append('maritalstatus', this.state.maritalstatus)
        data.append('caste', this.state.caste)
        data.append('phc', this.state.phc)
        data.append('dob', this.state.dob)
        data.append('dojs', this.state.dojs)
        data.append('retirementage', this.state.retirementage)
        data.append('dor', this.state.dor)
        data.append('pbstate', this.state.pbstate)
        data.append('pbdistrict', this.state.pbdistrict)
        data.append('pbmandal', this.state.pbmandal)
        data.append('pbvillage', this.state.pbvillage)
        data.append('pbpincode', this.state.pbpincode)
        data.append('nationality', this.state.nationality)
        data.append('lstate', this.state.lstate)
        data.append('ldistrict', this.state.ldistrict)
        data.append('lrevenuedivision', this.state.lrevenuedivision)
        data.append('lmandal', this.state.lmandal)
        data.append('moleone', this.state.moleone)
        data.append('moletwo', this.state.moletwo)
        data.append('height', this.state.height)
        data.append('file', this.state.selectedFile)

        console.log(data)
   
            // axios.post('http://localhost:5000/esrentry', data)
            //     .then(res=>console.log(res))
            //     .catch(err=>console.log(err))

       
    }

    render() {

        //console.log(this.state.selectedFile)
                
        return (
            <div className="container-fluid py-2 px-5">
                <form onSubmit={this.onEmployeeDetailsSubmit} encType='multipart/form-data'>
                    <div className="basic-details">
        <h6 className="bg-info text-center text-white text-bold p-1">Basic Details</h6>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputname">Name</label>
                        <input type="text" className="form-control" id="inputname" placeholder="Name"
                        name='name'
                        value={this.state.name}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputsurname">Surname</label>
                        <input type="text" className="form-control" id="inputsurname" placeholder="Surname"
                        name='surname'
                        value={this.state.surname}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="selectgender">Gender</label>
                        <select onChange={this.onChange} name='gender' id="selectgender" className="form-control">
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label htmlFor="inputhrmsid">HRMS ID</label>
                    <input type="text" className="form-control" id="inputhrmsid" placeholder="HRMS Id"
                    name='hrmsid'
                    value={this.state.hrmsid}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inputcfmsid">CFMS ID</label>
                    <input type="text" className="form-control" id="inputcfmsid" placeholder="CFMS Id"
                    name='cfmsid'
                    value={this.state.cfmsid}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputaadhaar">Aadhaar Number</label>
                        <input type="text" className="form-control" id="inputaadhaar" placeholder="Aadhaar Number"
                        name='aadhaar'
                        value={this.state.aadhaar}
                        onChange={this.onChange}
                    /> 
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label htmlFor="inputhrmsid">Marital Status</label>
                    <select onChange={this.onChange} name='maritalstatus' id="selectmaritalstatus" className="form-control">
                        <option value=''>Select</option>
                        <option value='married'>Married</option>
                        <option value='unmarried'>Un-married</option>
                        <option value='widow'>widow</option>
                        <option value='divorced'>Divorced</option>
                        <option value='widower'>Widower</option>
                    </select>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="selectcaste">Caste Category</label>
                    <select onChange={this.onChange} name='caste' id="selectcaste" className="form-control">
                        <option value=''>Select</option>
                        <option value='ST'>ST</option>
                        <option value='SC'>SC</option>
                        <option value='BC-A'>BC-A</option>
                        <option value='BC-B'>BC-B</option>
                        <option value='BC-C'>BC-C</option>
                        <option value='BC-D'>BC-D</option>
                        <option value='BC-E'>BC-E</option>
                        <option value='OTHERS'>OTHERS</option>
                    </select>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inputaadhaar">Differently Abled</label>
                    <select onChange={this.onChange} name='phc' id="selectcaste" className="form-control">
                        <option value=''>Select</option>
                        <option value='No'>No</option>
                        <option value='ortho'>ortho</option>
                        <option value='deafanddumb'>deafanddumb</option>
                        <option value='visual'>visual</option>
                        
                    </select>
                   
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputdob">Date of Birth(DD/MM/YYYY)(As Per SSC Records)</label>
                        <input onChange={this.onDOBChange} type="date" className="form-control"
                          
                        />
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputdojs">Date of Initial Entry into Govt Service (As per Joining Report)</label>
                        <input type="date" className="form-control"
                        
                        onChange={this.onDOJSChange}
                        />
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputdojs">Age of Retirement</label>
                        <select onChange={this.onRetirementAgeChange}
                        name='retirementage' id="selectAgeOfRetirement" className="form-control">
                            <option value='60'>60 Years</option>
                            <option value='62'>62 Years</option>
                            <option value='63'>63 Years</option>
                    </select>
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputdojs">Date of Superannuation(DD/MM/YYYY)</label>
                        <input type="text" className="form-control"
                        name='dor'
                            value={this.state.dor}
                            disabled
                             
                        /> 
                    </div>
                </div>
        <h6 className="bg-info text-center text-white text-bold p-1">Place of Birth</h6>
                <div className="form-row">
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="inputname">State</label>
                        <select onChange={this.onChange} name='pbstate' id="selectgender" className="form-control">
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="inputsurname">District</label>
                        <select onChange={this.onChange} name='pbdistrict' id="selectgender" className="form-control">
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="selectgender">Mandal</label>
                        <select onChange={this.onChange} name='pbmandal' id="selectgender" className="form-control">
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="inputname">Village</label>
                        <select onChange={this.onChange} name='pbvillage' id="selectgender" className="form-control">
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="inputsurname">Pincode</label>
                        <select onChange={this.onChange} name='pbpincode' id="selectgender" className="form-control">
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="selectgender">Nationality</label>
                        <select onChange={this.onChange} name='nationality' id="selectgender" className="form-control">
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                    </div>
                </div>
    <h6 className="bg-info text-center text-white text-bold p-1">Local Status</h6>     
                <div className="form-row">
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputname">State</label>
                        <select onChange={this.onChange} name='lstate' id="selectgender" className="form-control">
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputsurname">District</label>
                        <select onChange={this.onChange} name='ldistrict' id="selectgender" className="form-control">
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="selectgender">Revenue Division</label>
                        <select onChange={this.onChange} name='lrevenuedivision' id="selectgender" className="form-control">
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="selectgender">Mandal</label>
                        <select onChange={this.onChange} name='lmandal' id="selectgender" className="form-control">
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                    </div>
                </div>
    <h6 className="bg-info text-center text-white text-bold p-1">Other Details</h6>  
                <div className="form-row">
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputname">Identification Mole: 1</label>
                        <textarea onChange={this.onChange} name='moleone' id="w3review"  rows="2" cols="50">
                        </textarea>
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputsurname">Identification Mole: 2</label>
                        <textarea onChange={this.onChange} name='moletwo' id="w3review" rows="2" cols="50">
                        </textarea>
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="selectgender">Height in cms</label>
                        <input type="text" className="form-control" id="height"
                        name='height'
                        value={this.state.height}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label>Upload scanned SSC Certificate SR Copy</label>
                        <input type="file" name="file" accept="image/*" onChange={this.onImageChange} />
                        
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-lg-3 col-md-12 m-auto">
                    <button type="submit" className="text-center btn btn-primary btn-block">Save</button>
                    </div>   
                </div>       
            </div>
        </form>
    </div>
            
        )
    }
}

export default AddTeacher;
