import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'

class AddressDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            phouseno: '', pstreet1: '', pstreet2: '', pstate: '', 
            pdistrict: '', pmandal: '', pvillage: '', ppincode: '',
            chouseno: '', cstreet1: '', cstreet2: '', cstate: '', 
            cdistrict: '', cmandal: '', cvillage: '', cpincode: '',
            clicked: false
        }
        //this.onChange = this.onChange.bind(this)
        //this.onAddressClick = this.onAddressClick.bind(this)
        this.validatechouseno = this.validatechouseno.bind(this)
    }

    validatechouseno(){
        alert('validate')
    }

    render() {
      
        return (
            <Formik
                initialValues={this.state}
        
                onSubmit={(values, {setSubmitting, resetForm})=>{
                    setTimeout(()=>{
                        console.log('Logging in', values)
                        resetForm({})
                        
                        
                            // axios.post('http://localhost:5000/esrentry', data)
                            //     .then(res=>console.log(res))
                            //     .catch(err=>console.log(err))
                    },500)
                }}
            //here validation goes
         validationSchema = {Yup.object().shape({

            phouseno: Yup.string()
                .required('House Number can not be blank'),

            pstreet1: Yup.string()
                .required('Street field can not be blank'),

            pstreet2: Yup.string()
                .required('Street field not be blank'),

            pstate: Yup.string()
                .required('State field can not be blank'),

            pdistrict: Yup.string()
                .required('District can not be blank'),
                
            pmandal: Yup.string()
                .required('Mandal can not be blank'),

            pvillage: Yup.string()
                .required('Village can not be blank'),

            ppincode: Yup.string()
                .required('Pincode  can not be blank'),

            chouseno: Yup.string()
                .required('House Number can not be blank'),

            cstreet1: Yup.string()
                .required('Street field can not be blank'),

            cstreet2: Yup.string()
                .required('Street field can not be blank'),

            cstate: Yup.string()
                .required('State can not be blank'),

            cdistrict: Yup.string()
                .required('District can not be blank'),
                
            cmandal: Yup.string()
                .required('Mandal can not be blank'),

            cvillage: Yup.string()
                .required('Village can not be blank'),

            cpincode: Yup.string()
                .required('Pincode  can not be blank')
            
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
                    setFieldValue,
                    validateField
                } = props;
        return (
            
        <div className="container mt-4 mb-2">
            
            <fieldset className="border mainFieldset">
            <legend className="w-auto bg-info text-white mainLegend legend">Address details</legend>
            <form className="p-3" onSubmit={handleSubmit}>
                <fieldset className="border p-3">
                <legend className="w-auto bg-info text-white legend">Permanent Address</legend>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputhouseno">House No</label>
                        <input type="text" className={errors.phouseno && touched.phouseno ? "error form-control" : "form-control"} id="inputhouseno" 
                        name='phouseno'
                        value={values.phouseno}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        />
                        {errors.phouseno && touched.phouseno && (
                            <div className="input-feedback">{errors.phouseno}</div>)
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputstreet1">Street1</label>
                        <input type="text" className={errors.pstreet1 && touched.pstreet1 ? "error form-control" : "form-control"} id="inputstreet1" 
                        name='pstreet1'
                        value={values.pstreet1}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        />
                        {errors.pstreet1 && touched.pstreet1 && (
                            <div className="input-feedback">{errors.pstreet1}</div>)
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputstreet2">Street2</label>
                        <input type="text" className={errors.pstreet2 && touched.pstreet2 ? "error form-control" : "form-control"} id="inputstreet2" 
                        name='pstreet2'
                        value={values.pstreet2}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        />
                        {errors.pstreet2 && touched.pstreet2 && (
                            <div className="input-feedback">{errors.pstreet2}</div>)
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputhouseno">State</label>
                        <select onChange={handleChange} onBlur = {handleBlur} name='pstate' id="selectgender" className={errors.pstate && touched.pstate ? "error form-control" : "form-control"} value={values.pstate}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='FEMALE'>FEMALE</option>
                        </select>
                        {errors.pstate && touched.pstate && (
                            <div className="input-feedback">{errors.pstate}</div>)
                        }
                        
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputstreet1">District</label>
                        <select onChange={handleChange} onBlur = {handleBlur} name='pdistrict' id="selectgender" className={errors.pdistrict && touched.pdistrict ? "error form-control" : "form-control"} value={values.pdistrict}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='FEMALE'>FEMALE</option>
                        </select>
                        {errors.pdistrict && touched.pdistrict && (
                            <div className="input-feedback">{errors.pdistrict}</div>)
                        }
                        
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputstreet2">Mandal</label>
                        <select onChange={handleChange} onBlur = {handleBlur} name='pmandal' id="selectgender" className={errors.pmandal && touched.pmandal ? "error form-control" : "form-control"} value={values.pmandal}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='FEMALE'>FEMALE</option>
                        </select>
                        {errors.pmandal && touched.pmandal && (
                            <div className="input-feedback">{errors.pmandal}</div>)
                        }
                        
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputhouseno">Village</label>
                        <input type="text" className={errors.pvillage && touched.pvillage ? "error form-control" : "form-control"} id="inputhouseno" 
                        name='pvillage'
                        value={values.pvillage}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        />
                        {errors.pvillage && touched.pvillage && (
                            <div className="input-feedback">{errors.pvillage}</div>)
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputstreet1">Pincode</label>
                        <input type="text" className={errors.ppincode && touched.ppincode ? "error form-control" : "form-control"} id="inputstreet1" 
                        name='ppincode'
                        value={values.ppincode}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        />
                        {errors.ppincode && touched.ppincode && (
                            <div className="input-feedback">{errors.ppincode}</div>)
                        }
                    </div>
                    
                </div>
                </fieldset>
                <hr></hr>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"
                    
                    onClick={async (e)=>{
                        if (e.target.checked) {
                        if(touched.phouseno) {
                            setFieldValue('chouseno', values.phouseno, false)
                        } 
                        
                        if (touched.pstreet1) {
                            setFieldValue('cstreet1', values.pstreet1)
                        } 




                            //setFieldValue('cstreet1', values.pstreet1, true)
                            //setFieldValue('cstreet2', values.pstreet2, true)
                                // setFieldValue('cstate', values.pstate)
                                // setFieldValue('cdistrict', values.pdistrict)
                                // setFieldValue('cmandal', values.pmandal)
                                // setFieldValue('cvillage', values.pvillage)
                                // setFieldValue('cpincode', values.ppincode)
                            } 
                            else {
                            
                            setFieldValue('chouseno', '')
                            setFieldValue('cstreet1', '')
                            //setFieldValue('cstreet2', '')
                            // setFieldValue('cstate', '')
                            // setFieldValue('cdistrict', '')
                            // setFieldValue('cmandal', '')
                            // setFieldValue('cvillage', '')
                            // setFieldValue('cpincode', '')
                        }
                    
                }}
                    
                    
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Click here if Communication Address is same as Permanent Address</label>
                </div>
                <fieldset className="border p-2 mt-3">
                <legend className="w-auto bg-info text-white legend">Communication Address</legend>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="cinputhouseno">House No</label>
                        <input type="text" className={errors.chouseno && touched.chouseno ? "error form-control" : "form-control"} id="cinputhouseno" 
                        name='chouseno'
                        value={values.chouseno}
                        onChange = {handleChange}
                        onBlur = {handleBlur}
                             
                        />
                        {errors.chouseno && touched.chouseno && (
                            <div className="input-feedback">{errors.chouseno}</div>)
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="cinputstreet1">Street1</label>
                        <input type="text" className={errors.cstreet1 && touched.cstreet1 ? "error form-control" : "form-control"} id="cinputstreet1" 
                        name='cstreet1'
                        value={values.cstreet1}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        />
                        {errors.cstreet1 && touched.cstreet1 && (
                            <div className="input-feedback">{errors.cstreet1}</div>)
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="cinputstreet2">Street2</label>
                        <input type="text" className={errors.cstreet2 && touched.cstreet2 ? "error form-control" : "form-control"} id="cinputstreet2" 
                        name='cstreet2'
                        value={values.cstreet2}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        />
                        {errors.cstreet2 && touched.cstreet2 && (
                            <div className="input-feedback">{errors.cstreet2}</div>)
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="cselectstate">State</label>
                        <select onChange={handleChange} onBlur = {handleBlur} name='cstate' id="cinputstate" className={errors.cstate && touched.cstate ? "error form-control" : "form-control"} value={values.cstate}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='FEMALE'>FEMALE</option>
                        </select>
                        {errors.cstate && touched.cstate && (
                            <div className="input-feedback">{errors.cstate}</div>)
                        }
                        
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="cselectdistrict">District</label>
                        <select onChange={handleChange} onBlur = {handleBlur} name='cdistrict' id="cdistrict" className="form-control" value={values.cdistrict}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='FEMALE'>FEMALE</option>
                        </select>
                        {errors.cdistrict && touched.cdistrict && (
                            <div className="input-feedback">{errors.cdistrict}</div>)
                        }
                        
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="cselectmandal">Mandal</label>
                        
                        <select onChange={handleChange} onBlur = {handleBlur} name='cmandal' id="cmandal" className={errors.cmandal && touched.cmandal ? "error form-control" : "form-control"} value={values.cmandal}>
                            <option value=''>Select</option>
                            <option value='MALE'>MALE</option>
                            <option value='FEMALE'>FEMALE</option>
                        </select>
                        {errors.cmandal && touched.cmandal && (
                            <div className="input-feedback">{errors.cmandal}</div>)
                        }
                        
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="cvillage">Village</label>
                        <input type="text" className={errors.cvillage && touched.cvillage ? "error form-control" : "form-control"} id="cvillage" 
                        name='cvillage'
                        value={values.cvillage}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        />
                        {errors.cvillage && touched.cvillage && (
                            <div className="input-feedback">{errors.cvillage}</div>)
                        }
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="cpincode">Pincode</label>
                        <input type="text" className={errors.cpincode && touched.cpincode ? "error form-control" : "form-control"} id="inputstreet1" 
                        name='cpincode'
                        value={values.cpincode}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        />
                        {errors.cpincode && touched.cpincode && (
                            <div className="input-feedback">{errors.cpincode}</div>)
                        }
                    </div>
                    
                </div>
                </fieldset>
                    <div className="form-group col-lg-4 col-md-4 m-auto py-3">
                        <button type="submit" className="form-control btn btn-success" id="addressBtn" 
                        name='address'
                        
                        >Save</button>
                    </div>          
                </form>
            </fieldset>
                    <pre>{JSON.stringify(values, null,3)}</pre>
                    <pre>{JSON.stringify(errors, null,3)}</pre>
                    <pre>{JSON.stringify(touched)}</pre>

            
        </div>    

                )
            }
        }
        </Formik>    
        )
    }
}

export default AddressDetails
