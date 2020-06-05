import React, { Component } from 'react';
import moment from 'moment';
import './PersonalDetails.css'
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { set } from 'mongoose';

class AddTeacherSample extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            name: '', surname: '', gender: '', 
            hrmsid: '', cfmsid: '', aadhaar: '',
            maritalstatus: '', caste: '', phc: '',
            dob: '', dojs: '', retirementage: 60, dor: '',
            pbstate: '', pbdistrict: '', pbmandal: '', pbvillage: '',pbpincode: '', nationality: '',
            lstate: '', ldistrict: '', lrevenuedivision: '', lmandal:'',
            moleone: '', moletwo: '', height: '', file: null , dobchange: false
        }
        
        
    }

      
       

    render() {
                 
        return (
            
            <Formik
                initialValues={this.state}
        
                onSubmit={(values, {setSubmitting, resetForm})=>{
                    setTimeout(()=>{
                        console.log('Logging in', values)
                        resetForm({})
                        const data = new FormData()

                        data.append('name', values.name)
                        data.append('surname', values.surname)
                        data.append('gender', values.gender)
                        data.append('hrmsid', values.hrmsid)
                        data.append('cfmsid', values.cfmsid)
                        data.append('aadhaar', values.aadhaar)
                        data.append('maritalstatus', values.maritalstatus)
                        data.append('caste', values.caste)
                        data.append('phc', values.phc)
                        data.append('dob', values.dob)
                        data.append('dojs', values.dojs)
                        data.append('retirementage', values.retirementage)
                        data.append('dor', values.dor)
                        data.append('pbstate', values.pbstate)
                        data.append('pbdistrict', values.pbdistrict)
                        data.append('pbmandal', values.pbmandal)
                        data.append('pbvillage', values.pbvillage)
                        data.append('pbpincode', values.pbpincode)
                        data.append('nationality', values.nationality)
                        data.append('lstate', values.lstate)
                        data.append('ldistrict', values.ldistrict)
                        data.append('lrevenuedivision', values.lrevenuedivision)
                        data.append('lmandal', values.lmandal)
                        data.append('moleone', values.moleone)
                        data.append('moletwo', values.moletwo)
                        data.append('height', values.height)
                        data.append('file', values.file)

                        console.log(data)
                
                            axios.post('http://localhost:5000/esrentry', data)
                                .then(res=>console.log(res))
                                .catch(err=>console.log(err))
                    },500)
                }}
            //here validation goes
         validationSchema = {Yup.object().shape({
            name: Yup.string()
                 .required('Name can not be blank')
                 .min(3,'Name should contain at least 3 characters')
                 .max(40,'Name should not containe more than 40 characters'),

            surname: Yup.string()
                 .required('Surname can not be blank')
                 .min(3,'Surname should contain at least 3 characters')
                 .max(40,'Surname should not containe more than 40 characters'),

            gender: Yup.string()
                 .required('Gender can not be blank'),

            hrmsid: Yup.string()
                 .required('HRMS Id can not be blank'),

            cfmsid: Yup.string()
                .required('CFMS id can not be blank'),
                
            aadhaar: Yup.string()
                .required('Aahdaar number can not be blank')
                .min(12, 'Aadhaar Number should contain 12 digits'),

            maritalstatus: Yup.string()
                .required('Marital Status can not be blank'),

            caste: Yup.string()
                .required('Caste  can not be blank'),

            phc: Yup.string()
                .required('Differently Able field can not be blank'),

            dob: Yup.string()
                .required('Date of Birth can not be blank'),

            dojs: Yup.string()
                .required('Date of Joining in Govt Service can not be blank'),

            retirementage: Yup.string()
                .required('Retirement age can not be blank'),

            // dor: Yup.string()
            //     .required('Date of Retirement field can not be blank'),

            pbstate: Yup.string()
                .required('State can not be blank'),

            pbdistrict: Yup.string()
                .required('District  can not be blank'),

            pbmandal: Yup.string()
                .required('Mandal can not be blank'),

            pbvillage: Yup.string()
                .required('Village can not be blank'),

            pbpincode: Yup.string()
                .required('Pincode number can not be blank'),

            nationality: Yup.string()
                .required('Nationality can not be blank'),

            lstate: Yup.string()
                .required('State  can not be blank'),

            ldistrict: Yup.string()
                .required('District  can not be blank'),

            lrevenuedivision: Yup.string()
                .required('Revenue Division can not be blank'),

            lmandal: Yup.string()
                .required('Mandal number can not be blank'),

            moleone: Yup.string()
                .required('Moles filed can not be blank'),

            moletwo: Yup.string()
                .required('Moles filed can not be blank'),

            height: Yup.string()
                .required('Height filed can not be blank'),

            file: Yup.mixed()
                .required('Pls upload SSC copy')
        })}
        >
        {
            props =>{
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                    setFieldValue
                } = props;
        return (
            <div className="container-fluid py-2 px-5">
                <h3>Sample</h3>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className="basic-details">
        <h6 className="bg-info text-center text-white text-bold p-1">Basic Details</h6>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputname">Name</label>
                        <input type="text" id="inputname" placeholder="Name"
                        name='name'
                        className={errors.name && touched.name ? "error form-control" : "form-control"}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.name && touched.name && (
                            <div className="input-feedback">{errors.name}</div>)
                        }  
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputsurname">Surname</label>
                        <input type="text" id="inputsurname" placeholder="Surname"
                        name='surname'
                        className={errors.surname && touched.surname ? "error form-control" : "form-control"}
                        value={values.surname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.surname && touched.surname && (
                            <div className="input-feedback">{errors.surname}</div>)
                        } 
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="selectgender">Gender</label>
                        <select onChange={handleChange} name='gender' id="selectgender" className={errors.gender && touched.gender ? "error form-control" : "form-control"} onBlur={handleBlur} value={values.gender}>

                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                        {errors.gender && touched.gender && (
                            <div className="input-feedback">{errors.gender}</div>)
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputhrmsid">HRMS ID</label>
                        <input type="text" className={errors.hrmsid && touched.hrmsid ? "error form-control" : "form-control"} id="inputhrmsid" placeholder="HRMS Id"
                        name='hrmsid'
                        value={values.hrmsid}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.hrmsid && touched.hrmsid && (
                            <div className="input-feedback">{errors.hrmsid}</div>)
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputcfmsid">CFMS ID</label>
                        <input type="text" className={errors.cfmsid && touched.cfmsid ? "error form-control" : "form-control"} id="inputcfmsid" placeholder="CFMS Id"
                        name='cfmsid'
                        value={values.cfmsid}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.cfmsid && touched.cfmsid && (
                            <div className="input-feedback">{errors.cfmsid}</div>)
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputaadhaar">Aadhaar Number</label>
                        <input type="text" className={errors.aadhaar && touched.aadhaar ? "error form-control" : "form-control"} id="inputaadhaar" placeholder="Aadhaar Number"
                        name='aadhaar'
                        value={values.aadhaar}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.aadhaar && touched.aadhaar && (
                            <div className="input-feedback">{errors.aadhaar}</div>)
                    } 
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputhrmsid">Marital Status</label>
                        <select onChange={handleChange} onBlur={handleBlur}name='maritalstatus' id="selectmaritalstatus" className={errors.maritalstatus && touched.maritalstatus ? "error form-control" : "form-control"} value={values.maritalstatus}>
                            <option value=''>Select</option>
                            <option value='married'>Married</option>
                            <option value='unmarried'>Un-married</option>
                            <option value='widow'>widow</option>
                            <option value='divorced'>Divorced</option>
                            <option value='widower'>Widower</option>
                        </select>
                        {errors.maritalstatus && touched.maritalstatus && (
                            <div className="input-feedback">{errors.maritalstatus}</div>)
                        } 
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="selectcaste">Caste Category</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='caste' id="selectcaste" className={errors.caste && touched.caste ? "error form-control" : "form-control"} value={values.caste}>
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
                        {errors.caste && touched.caste && (
                            <div className="input-feedback">{errors.caste}</div>)
                        } 
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputaadhaar">Differently Abled</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='phc' id="selectcaste" className={errors.phc && touched.phc ? "error form-control" : "form-control"} value={values.phc}>
                            <option value=''>Select</option>
                            <option value='No'>No</option>
                            <option value='ortho'>ortho</option>
                            <option value='deafanddumb'>deafanddumb</option>
                            <option value='visual'>visual</option>
                        </select>
                        {errors.phc && touched.phc && (
                            <div className="input-feedback">{errors.phc}</div>)
                        } 
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-lg-3 col-md-6">

                            {/* onChange={async (e)=>{
                                
                                const otherValue = this.getValue(e.target.value)
                                
                                setFieldValue("country", e.target.value)
                            }} */}

                        <label htmlFor="inputdob">Date of Birth(DD/MM/YYYY)(As Per SSC Records)</label>
                        <input onChange={handleChange} type="date" className={errors.dob && touched.dob ? "error form-control" : "form-control"}
                        name="dob"
                        //value={values.dob}
                        onChange={async (e)=>{
                            //this.onDOBChange(e.target.value)
                            const dob = moment(e.target.value).format('DD/MM/YYYY')
                            const days = moment(e.target.value).daysInMonth()
                            const date = moment(e.target.value).get('date')
                            const noOfDaysToBeAdded = days - date;
                            const dor = moment(e.target.value).add(60, 'years').add(noOfDaysToBeAdded, 'days').format('DD/MM/YYYY')
                            setFieldValue('dob', dob)
                            setFieldValue('dor', dor)
                        }}
                        onBlur={handleBlur}
                        />
                        {errors.dob && touched.dob && (
                            <div className="input-feedback">{errors.dob}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputdojs">Date of Initial Entry into Govt Service (As per Joining Report)</label>
                        <input type="date" className={errors.dojs && touched.dojs ? "error form-control" : "form-control"} name="dojs"
                        //value={values.dojs}
                        onChange={async (e)=>{
                            
                            const dojs = moment(e.target.value).format('DD/MM/YYYY')
                            setFieldValue('dojs', dojs)
                        }}
                        onBlur={handleBlur}
                        />
                        {errors.dojs && touched.dojs && (
                            <div className="input-feedback">{errors.dojs}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputdojs">Age of Retirement</label>
                        <select onBlur={handleBlur}
                        name='retirementage' id="selectAgeOfRetirement" className={errors.retirementage && touched.retirementage ? "error form-control" : "form-control"}
                        onChange={async (e)=>{
                            const dob = moment(values.dob, 'DD/MM/YYYY')
                            const days = moment(dob).daysInMonth()
                            const date = moment(dob).get('date')
                            const noOfDaysToBeAdded = days - date;
                            const dor = moment(dob).add(e.target.value, 'years').add(noOfDaysToBeAdded, 'days').format('DD/MM/YYYY')
                            setFieldValue('dor', dor)
                        }} 
                        
                        >
                            <option value='60'>60 Years</option>
                            <option value='62'>62 Years</option>
                            <option value='63'>63 Years</option>
                        </select>
                        {errors.retirementage && touched.retirementage && (
                            <div className="input-feedback">{errors.retirementage}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputdojs">Date of Superannuation(DD/MM/YYYY)</label>
                        <input type="text" className={errors.dor && touched.dor ? "error form-control" : "form-control"}
                        name='dor'
                            value={values.dor}
                            disabled
                             
                        />
                        {errors.dor && touched.dor && (
                            <div className="input-feedback">{errors.dor}</div>)
                        }  
                    </div>
                </div>
        <h6 className="bg-info text-center text-white text-bold p-1">Place of Birth</h6>
                <div className="form-row">
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="inputname">State</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='pbstate' id="selectgender" className={errors.pbstate && touched.pbstate ? "error form-control" : "form-control"} value={values.pbstate}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                        {errors.pbstate && touched.pbstate && (
                            <div className="input-feedback">{errors.pbstate}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="inputsurname">District</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='pbdistrict' id="selectgender" className={errors.pbdistrict && touched.pbdistrict ? "error form-control" : "form-control"} value={values.pbdistrict}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                        {errors.pbdistrict && touched.pbdistrict && (
                            <div className="input-feedback">{errors.pbdistrict}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="selectgender">Mandal</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='pbmandal' id="selectgender" className={errors.pbmandal && touched.pbmandal ? "error form-control" : "form-control"} value={values.pbmandal}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                        {errors.pbmandal && touched.pbmandal && (
                            <div className="input-feedback">{errors.pbmandal}</div>)
                        } 
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="inputname">Village</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='pbvillage' id="selectgender" className={errors.pbvillage && touched.pbvillage ? "error form-control" : "form-control"} value={values.pbvillage}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                        {errors.pbvillage && touched.pbvillage && (
                            <div className="input-feedback">{errors.pbvillage}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="inputsurname">Pincode</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='pbpincode' id="selectgender" className={errors.pbpincode && touched.pbpincode ? "error form-control" : "form-control"} value={values.pbpincode}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                        {errors.pbpincode && touched.pbpincode && (
                            <div className="input-feedback">{errors.pbpincode}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-4 col-md-6">
                        <label htmlFor="selectgender">Nationality</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='nationality' id="selectgender" className={errors.nationality && touched.nationality ? "error form-control" : "form-control"} value={values.nationality}>
                            <option value=''>Select</option>
                            <option value='INDIAN'>INDIAN</option>
                        </select>
                        {errors.nationality && touched.nationality && (
                            <div className="input-feedback">{errors.nationality}</div>)
                        } 
                    </div>
                </div>
    <h6 className="bg-info text-center text-white text-bold p-1">Local Status</h6>     
                <div className="form-row">
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputname">State</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='lstate' id="selectgender" className={errors.lstate && touched.lstate ? "error form-control" : "form-control"} value={values.lstate}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                        {errors.lstate && touched.lstate && (
                            <div className="input-feedback">{errors.lstate}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputsurname">District</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='ldistrict' id="selectgender" className={errors.ldistrict && touched.ldistrict ? "error form-control" : "form-control"} value={values.ldistrict}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                        {errors.ldistrict && touched.ldistrict && (
                            <div className="input-feedback">{errors.ldistrict}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="selectgender">Revenue Division</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='lrevenuedivision' id="selectgender" className={errors.lrevenuedivision && touched.lrevenuedivision ? "error form-control" : "form-control"} value={values.lrevenuedivision}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                        {errors.lrevenuedivision && touched.lrevenuedivision && (
                            <div className="input-feedback">{errors.lrevenuedivision}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="selectgender">Mandal</label>
                        <select onChange={handleChange} onBlur={handleBlur} name='lmandal' id="selectgender" className={errors.lmandal && touched.lmandal ? "error form-control" : "form-control"} value={values.lmandal}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='MALE'>FEMALE</option>
                        </select>
                        {errors.lmandal && touched.lmandal && (
                            <div className="input-feedback">{errors.lmandal}</div>)
                        } 
                    </div>
                </div>
    <h6 className="bg-info text-center text-white text-bold p-1">Other Details</h6>  
                <div className="form-row">
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputname">Identification Mole: 1</label>
                        <textarea onChange={handleChange} onBlur={handleBlur} name='moleone' id="w3review" value={values.moleone}
                        className={errors.moleone && touched.moleone ? "error form-control" : "form-control"}  rows="2" cols="50">
                        </textarea>
                        {errors.moleone && touched.moleone && (
                            <div className="input-feedback">{errors.moleone}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="inputsurname">Identification Mole: 2</label>
                        <textarea onChange={handleChange} onBlur={handleBlur} name='moletwo' id="w3review" value={values.moletwo}
                        className={errors.moletwo && touched.moletwo ? "error form-control" : "form-control"} rows="2" cols="50">
                        </textarea>
                        {errors.moletwo && touched.moletwo && (
                            <div className="input-feedback">{errors.moletwo}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label htmlFor="selectgender">Height in cms</label>
                        <input type="text" className={errors.height && touched.height ? "error form-control" : "form-control"} id="height"
                        name='height'
                        value={values.height}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.height && touched.height && (
                            <div className="input-feedback">{errors.height}</div>)
                        } 
                    </div>
                    <div className="form-group col-lg-3 col-md-6">
                        <label>Upload scanned SSC Certificate SR Copy</label>
                        <input type="file" name="file " accept="image/*" 
                        className={errors.file && touched.file ? "error form-control" : "form-control"} 
                        onChange={(e)=>{
                            e.preventDefault()
                            console.log(e.target.files[0])
                            setFieldValue("file", e.currentTarget.files[0]);
                        }} 
                        onBlur={handleBlur}/>
                        {errors.file && touched.file && (
                            <div className="input-feedback">{errors.file}</div>)
                        } 
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-lg-3 col-md-12 m-auto">
                    <button type="submit" className="text-center btn btn-primary btn-block">Save</button>
                    </div>   
                </div>       
            </div>
        </form>
        {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
    </div>

                )
            }
        }
        </Formik>    
        )
    }
}

export default AddTeacherSample;
