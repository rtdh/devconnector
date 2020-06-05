import React, { Component } from 'react';
import moment from 'moment';
//import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './nadunedu.css'


class Nadunedusample extends Component {
constructor(props){
    super(props)
    this.state = {
        mandals: [], schools: [],
        mandal: '', school: '', completed: false, dot: '',
    funds_estimated: '', funds_receivedOne: '', funds_receivedTwo: '', funds_expenditure: '',

    cement_company: '', cement_required: '', cement_indent_placed: '', cement_received: '',
    sand_required: '', sand_indent_placed: '', sand_received: '',
    metal_required: '', metal_received: '', steel_required: '', steel_received: '',

    cement_bricks_req: '', cement_bricks_rec: '', cley_bricks_req: '', cley_bricks_rec: '',

    wb_req: '', wb_upload: '', wb_rec: '', urinals_req: '', urinals_upload: '', urinals_rec: '',
    wc_req: '', wc_upload: '', wc_rec: '', fans_req: '', fans_upload: '', fans_rec: '',
    db_class_1_3_req: '', db_class_1_3_upload: '', db_class_1_3_rec: '',
    db_class_4_7_req: '', db_class_4_7_upload: '', db_class_4_7_rec: '',
    db_class_7_10_req: '', db_class_7_10_upload: '', db_class_7_10_rec: '',
    tables_req: '', tables_upload: '', tables_rec: '',
    chairs_req: '', chairs_upload: '', chairs_rec: '',
    almirah_req :'', almirah_upload: '', almirah_rec: '',
    chalk_board_req: '', chalk_board_upload: '', chalk_board_rec: '',
    tv_req: '', tv_upload: '', tv_rec: ''
    }
        this.onChange = this.onChange.bind(this)
        this.onnaduneduSubmit = this.onnaduneduSubmit.bind(this)
        this.onMandalChange = this.onMandalChange.bind(this)
}

    componentDidMount(){

        const todayDate = moment().format('DD/MM/YYYY h:mm:ss a')

        this.setState({dot: todayDate})
        //alert(todayDate)

        axios.get('http://localhost:5000/getmandals',)
        .then(res=>{
            //console.log(res.data)
            this.setState({mandals: res.data})
            })
        .catch(err=>console.log(err))
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})

    }    

    onMandalChange(e){
       this.setState({mandal: e.target.value})
       
        const mandal = {
            mandal : e.target.value
        }
        
        axios.post('http://localhost:5000/getschools', mandal)
        .then(res=>{
            console.log(res.data)
            this.setState({schools : res.data})
        })
        .catch(err=>console.log(err))
    }

    onnaduneduSubmit(e){
        e.preventDefault()
        
        alert('form submitted')
        alert(this.state.dot)

    const newNaduneduEntry = {

    dot: this.state.dot, mandal: this.state.mandal, school: this.state.school, 

    funds_estimated: this.state.funds_estimated, funds_receivedOne: this.state.funds_receivedOne, funds_receivedTwo: this.state.funds_receivedTwo, funds_expenditure: this.state.funds_expenditure,

    cement_company: this.state.cement_company, cement_required: this.state.cement_required, cement_indent_placed: this.state.cement_indent_placed, cement_received: this.state.cement_received,

    sand_required: this.state.sand_required, sand_indent_placed: this.state.sand_indent_placed, sand_received: this.state.sand_received,

    metal_required: this.state.metal_required, metal_received: this.state.metal_received, steel_required: this.state.steel_required, steel_received: this.state.steel_received,

    cement_bricks_req: this.state.cement_bricks_req, cement_bricks_rec: this.state.cement_bricks_rec, cley_bricks_req: this.state.cley_bricks_req, cley_bricks_rec: this.state.cley_bricks_rec,

    wb_req: this.state.wb_req, wb_upload: this.state.wb_upload, wb_rec: this.state.wb_rec, urinals_req: this.state.urinals_req, urinals_upload: this.state.urinals_upload, urinals_rec: this.state.urinals_rec,

    wc_req: this.state.wc_req, wc_upload: this.state.wc_upload, wc_rec: this.state.wc_rec, fans_req: this.state.fans_req, fans_upload: this.state.fans_upload, fans_rec: this.state.fans_rec,

    db_class_1_3_req: this.state.db_class_1_3_req, db_class_1_3_upload: this.state.db_class_1_3_upload, db_class_1_3_rec: this.state.db_class_1_3_rec,

    db_class_4_7_req: this.state.db_class_4_7_req, db_class_4_7_upload: this.state.db_class_4_7_upload, db_class_4_7_rec: this.state.db_class_4_7_rec,

    db_class_7_10_req: this.state.db_class_7_10_req, db_class_7_10_upload: this.state.db_class_7_10_upload, db_class_7_10_rec: this.state.db_class_7_10_rec,

    tables_req: this.state.tables_req, tables_upload: this.state.tables_upload, tables_rec: this.state.tables_rec,

    chairs_req: this.state.chairs_req, chairs_upload: this.state.chairs_upload, chairs_rec: this.state.chalk_board_rec,

    almirah_req :this.state.almirah_req, almirah_upload: this.state.almirah_upload, almirah_rec: this.state.almirah_rec,

    chalk_board_req: this.state.chalk_board_req, chalk_board_upload: this.state.chalk_board_upload, chalk_board_rec: this.state.chairs_rec,

    tv_req: this.state.tv_req, tv_upload: this.state.tv_upload, tv_rec: this.state.tv_rec
            
    }

    console.log(newNaduneduEntry)

    axios.post('http://localhost:5000/addNewEntry', newNaduneduEntry)
        .then(res=>{
            console.log(res.data)
            this.setState({completed: true})
            this.setState({mandal: ''})
        })
        .catch(err=>console.log(err))
    }

    render() {

        return (
            <div className="container-fluid" style={{padding: '0.5% 5%'}}>
                <form onSubmit={this.onnaduneduSubmit} encType='multipart/form-data'>
                    <div className="basic-details">
        <h4 className="bg-info text-center text-white text-bold p-1">NADU NEDU DETAILS</h4>
            {this.state.completed ? (
                <div class="text-center">
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <p>Record inserted succefully!!!</p>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                </div>
                ) : ''}

<h5 className="bg-info text-center text-white text-bold my-3 py-2">Funds in laksh ( As on today)</h5>
                <div className="form-row">

                      
                    <div className="form-group col-md-2">
                        <label htmlFor="inputname">Mandal</label>
                        <select id='manal' name='mandal' className="form-control" onChange={this.onMandalChange} value={this.state.mandal}>
                            <option value="">Select Mandal</option>
                            {this.state.mandals.map(mandal=>(
                                <option key={mandal.mandal} value={mandal.mandal}>{mandal.mandal}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputsurname">School</label>
                        <select id='school' name='school' class="form-control" value={this.state.mandal} onChange={this.onChange}>
                            <option value="">Select School</option>
                            {this.state.schools.map(school=>(
                                <option key={school.schoolname} value={school.schoolname}>{school.schoolname}</option>
                            ))}
                        </select>
                    </div>
                    
                
                
                
                  
                    <div className="form-group col-md-2">
                    <label htmlFor="inputhrmsid">Estimated</label>
                    <input type="Number" className="form-control" id="inputhrmsid" placeholder="Number Only"
                    name='funds_estimated'
                    value={this.state.funds_estimated}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="inputcfmsid">Received 7.5% Revolving Fund</label>
                    <input type="Number" className="form-control" id="inputcfmsid" placeholder="Number Only"
                    name='funds_receivedOne'
                    value={this.state.funds_receivedOne}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputaadhaar">Received 15% Revolving Fund</label>
                        <input type="Number" className="form-control" id="inputaadhaar" placeholder="Number Only"
                        name='funds_receivedTwo'
                        value={this.state.funds_receivedTwo}
                        onChange={this.onChange}
                    /> 
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputaadhaar">Expenditure</label>
                        <input type="Number" className="form-control" id="inputaadhaar" placeholder="Number Only"
                        name='funds_expenditure'
                        value={this.state.funds_expenditure}
                        onChange={this.onChange}
                    /> 
                    </div>
                    </div>
                <div className="form-row mt-3 mb-3">
                    <div class="col-lg-2">
                        <p class="display-4 text-center bankHeading">Cement Details (in Bags)</p> 
                        <table>
                            <tbody>
                                <tr>
                                    <td class="heading">Company</td>
                                    <td>
                                        <select class="form-control" name="cement_company" value={this.state.cement_company} onChange={this.onChange}>
                                            <option value="">Company</option>
                                            <option value="X">X</option>
                                            <option value="Y">Y</option>
                                            <option value="Z">Z</option>
                                            <option value="P">P</option>
                                            <option value="Q">Q</option>

                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="heading">Required</td>
                                    <td><input type="Number" name="cement_required" placeholder='No. of Bags' value={this.state.cement_required} onChange={this.onChange}/></td>
                                </tr>
                                <tr>
                                    <td class="heading">Indent Placed</td>
                                    <td><input type="Number" name="cement_indent_placed" placeholder='No. of Bags' value={this.state.cement_indent_placed} onChange={this.onChange}/></td>
                                </tr>
                                <tr>
                                    <td class="heading">Received</td>
                                    <td><input type="Number" name="cement_received" placeholder='No. of Bags' value={this.state.cement_received} onChange={this.onChange}/></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-2">
                        <p class="display-4 text-center bankHeading">Sand (in Metric Tones)</p> 
                        <table>
                            <tbody>
                                
                                <tr>
                                    <td class="heading">Required</td>
                                    <td><input type="Number" name="sand_required" value={this.state.sand_required} onChange={this.onChange}/></td>
                                </tr>
                                <tr>
                                    <td class="heading">Indent Placed</td>
                                    <td><input type="Number" name="sand_indent_placed" value={this.state.sand_indent_placed} onChange={this.onChange}/></td>
                                </tr>
                                <tr>
                                    <td class="heading">Received</td>
                                    <td><input type="Number" name="sand_received" value={this.state.sand_received} onChange={this.onChange}/></td>
                                </tr>
                                <tr>
                                    {/* <td class="heading">Received</td>
                                    <td><input type="Number" name="aadhaar"/></td> */}
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-2">
                        <p class="display-4 text-center bankHeading">Metal (in Units)</p> 
                        <table>
                            <tbody>
                                
                                <tr>
                                    <td class="heading">Required</td>
                                    <td><input type="Number" name="metal_required" value={this.state.metal_required} onChange={this.onChange}/></td>
                                </tr>
                                
                                <tr>
                                    <td class="heading">Received</td>
                                    <td><input type="Number" name="metal_received" value={this.state.metal_received} onChange={this.onChange}/></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-2">
                        <p class="display-4 text-center bankHeading">Steel (in Metric Tones)</p> 
                        <table>
                            <tbody>
                                
                                <tr>
                                    <td class="heading">Required</td>
                                    <td><input type="Number" name="steel_required" value={this.state.steel_required} onChange={this.onChange}/></td>
                                </tr>
                                
                                <tr>
                                    <td class="heading">Received</td>
                                    <td><input type="Number" name="steel_received" value={this.state.steel_received} onChange={this.onChange}/></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-4">
                        <p class="display-4 text-center bankHeading">Bricks</p> 
                        <table>
                            <tbody>
                                
                                <tr>
                                    <td class="heading">Cement Bricks Required</td>
                                    <td><input type="Number" name="cement_bricks_req" value={this.state.cement_bricks_req} onChange={this.onChange}/></td>
                                </tr>
                                <tr>
                                    <td class="heading">Cement Bricks Received</td>
                                    <td><input type="Number" name="cement_bricks_rec" value={this.state.cement_bricks_rec} onChange={this.onChange}/></td>
                                </tr>
                                <tr>
                                    <td class="heading">Cley Bricks Required</td>
                                    <td><input type="Number" name="cley_bricks_req" value={this.state.cley_bricks_req} onChange={this.onChange}/></td>
                                </tr>
                                <tr>
                                    <td class="heading">Cley Bricks Received</td>
                                    <td><input type="Number" name="cley_bricks_rec" value={this.state.cley_bricks_rec} onChange={this.onChange}/></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                
                </div>
            </div>
            <div class="container">    
                
            <h4 className="bg-info text-center text-white text-bold p-2">Centralised Procurements</h4>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}>
                    
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Wash  Basins</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='wb_req'
                    placeholder="Number Only"
                    value={this.state.wb_req}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="wb_upload" value={this.state.wb_upload}
                        onChange={this.onChange}
                        class="form-control">
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="wb_rec" class="form-control" value={this.state.wb_rec}
                        onChange={this.onChange}>
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                    
                </div>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Urinals for Boys</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='urinals_req'
                    placeholder="Number Only"
                    value={this.state.urinals_req}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="urinals_upload" class="form-control"
                        value={this.state.urinals_upload}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="urinals_rec" class="form-control"
                        value={this.state.urinals_rec}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Western Commodes</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='wc_req'
                    placeholder="Number Only"
                    value={this.state.wc_req}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="wc_upload" class="form-control"
                        value={this.state.wc_upload}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="wc_rec" class="form-control"
                        value={this.state.wc_rec}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Fans</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='fans_req'
                    placeholder="Number Only"
                    value={this.state.fans_req}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="fans_upload" class="form-control"
                        value={this.state.fans_upload}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="fans_rec" class="form-control"
                        value={this.state.fans_rec}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Dual Benches (Class 1-3)</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='db_class_1_3_req'
                    placeholder="Number Only"
                    value={this.state.db_class_1_3_req}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="db_class_1_3_upload" class="form-control"
                        value={this.state.db_class_1_3_upload}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="db_class_1_3_rec" class="form-control"
                        value={this.state.db_class_1_3_rec}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Dual Benches (Class 4-7)</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='db_class_4_7_req'
                    placeholder="Number Only"
                    value={this.state.db_class_4_7_req}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="db_class_4_7_upload" class="form-control"
                        value={this.state.db_class_4_7_upload}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="db_class_4_7_rec" class="form-control"
                        value={this.state.db_class_4_7_rec}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Dual Benches (Class 7-10)</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='db_class_7_10_req'
                    placeholder="Number Only"
                    value={this.state.db_class_7_10_req}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="db_class_7_10_upload" class="form-control"
                        value={this.state.db_class_7_10_upload}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="db_class_7_10_rec" class="form-control"
                        value={this.state.db_class_7_10_rec}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Teachers S Tables</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='tables_req'
                    placeholder="Number Only"
                    value={this.state.tables_req}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="tables_upload" class="form-control"
                        value={this.state.tables_upload}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="tables_rec" class="form-control"
                        value={this.state.tables_rec}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Teachers S Chairs</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='chairs_req'
                    placeholder="Number Only"
                    value={this.state.chairs_req}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="chairs_upload" class="form-control"
                        value={this.state.chairs_upload}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="chairs_rec" class="form-control"
                        value={this.state.chairs_rec}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Teachers Almirah( 1 for 4 teachers)</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='almirah_req'
                    placeholder="Number Only"
                    value={this.state.almirah_req}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="almirah_upload" class="form-control"
                        value={this.state.almirah_upload}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="almirah_rec" class="form-control"
                        value={this.state.almirah_rec}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Green Chalk Boards</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='chalk_board_req'
                    placeholder="Number Only"
                    value={this.state.chalk_board_req}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="chalk_board_upload" class="form-control"
                        value={this.state.chalk_board_upload}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="chalk_board_rec" class="form-control"
                        value={this.state.chalk_board_rec}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mt-2 mb-2 justify-content-center align-items-center self-items-center" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-md-3">
                        <label htmlFor="inputhrmsid" class="btn btn-primary">Smart TV for English lab</label>
                    </div>
                    <div className="form-group col-md-3">
                    <label htmlFor="inputcfmsid">Requirement</label>
                    <input type="Number" className="form-control" id="inputcfmsid" 
                    name='tv_req'
                    placeholder="Number Only"
                    value={this.state.tv_required}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Uploaded in the App</label>
                        <select id="uploaded" name="tv_upload" class="form-control"
                        value={this.state.tv_upload}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputaadhaar">Received</label>
                        <select id="uploaded" name="tv_rec" class="form-control"
                        value={this.state.tv_rec}
                        onChange={this.onChange}
                        >
                            <option value="">Select</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                        </select>
                    </div>
                </div>
                <div className="form-row mb-3" style={{border : '1px solid lightgrey', padding: '10px' }}> 
                    <div className="form-group col-lg-6 col-md-6 m-auto">
                          <button type="submit" className="form-control btn btn-success btn-block">Save</button> 
                    </div>               
                </div>
             
            </div>
        </form>
    </div>
            
        )
    }
}

export default Nadunedusample;