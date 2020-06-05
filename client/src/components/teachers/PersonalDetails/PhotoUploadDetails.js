import React, { Component, useState } from 'react';
import './PersonalDetails.css';
import axios from 'axios';

const  PhotoUploadDetails  = ()=> {

    const [photoLatest, setPhotoLatest] = useState('')
    const [photoAppointment, setPhotoAppointment] = useState('')
    const [photoRetirement, setPhotoRetirement] = useState('')
    const [photoWithSpouse, setPhotoWithSpouse] = useState('')

    const [selectedFileOne, setSelectedFileOne] = useState('')
    const [selectedFileTwo, setSelectedFileTwo] = useState('')
    const [selectedFileThree, setSelectedFileThree] = useState('')
    const [selectedFileFour, setSelectedFileFour] = useState('')

    const [visibleOne, setVisibleOne] = useState(false)
    const [visibleTwo, setVisibleTwo] = useState(false)
    const [visibleThree, setVisibleThree] = useState(false)
    const [visibleFour, setVisibleFour] = useState(false)

    const [theInputKey, setTheInputKey] = useState('')

    const [result,setResult] = useState(false)
    const [loading, setLoading] = useState(false)

    const onhandleChange = (e, name)=>{
        //console.log(e.target.files[0])
        showImage(e, name)
    }

    const showImage = (e,name)=>{
        
        const file = e.target.files[0]
        if(file){
            const reader = new FileReader()
            reader.onload = function(ev){
                if(name === 'photoLatest') {
                    setVisibleOne(true)
                    setSelectedFileOne(file)
                    setPhotoLatest(ev.target.result)
                } else if (name === 'photoAppointment'){
                    setVisibleTwo(true)
                    setSelectedFileTwo(file)
                    setPhotoAppointment(ev.target.result)
                } else if (name === 'photoRetirement'){
                    setVisibleThree(true)
                    setSelectedFileThree(file)
                    setPhotoRetirement(ev.target.result)
                } else {
                    setVisibleFour(true)
                    setSelectedFileFour(file)
                    setPhotoWithSpouse(ev.target.result)
                }
            }
            reader.readAsDataURL(file);
        }
    }

    const onSubmit = (e)=> {
        e.preventDefault()
        alert('photos click')
        console.log('photos clicked')
        setLoading(true)

        // const fd = new FormData()

        // fd.append('selectedFileOne', selectedFileOne)
        // fd.append('selectedFileTwo', selectedFileTwo)
        // fd.append('selectedFileThree', selectedFileThree)
        // fd.append('selectedFileFour', selectedFileFour)

        // axios.post('http://localhost:5000/uploadphotos', fd)
        //         .then(res=> {
        //             setResult(true)
        //             setLoading(false)
        //             setVisibleOne(false)
        //             setVisibleTwo(false)
        //             setVisibleThree(false)
        //             setVisibleFour(false)
        //             console.log(res)
        //             let randomString = Math.random().toString(36);
        //                 setTheInputKey(randomString)    
        //         })
        //         .catch(err=>console.log(err))
    }    
        return (
            <div className="container">
                <form onSubmit = {(e)=> {onSubmit(e)}}className="mt-4 mb-3" encType='multipart/form-data'>
                <fieldset className="border p-2">
                    <legend className="w-auto bg-info text-white px-2 legend">Photo upload details</legend>

                    {loading ? <div>Images are uploading...pls wait</div> : ''}
                    {result ? <div style={{color: 'blue', marginLeft: 100, fontSize: '1rem'}}>Photos uploaded successfully!!!</div> :'' }

                    <div className="form-row p-3">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputlatestphoto">Latest Photo</label>
                            <input type="file" className="form-control" id="inputlatestphoto"
                            name="photoLatest" key={theInputKey || ''}
                            accept="image/*"
                            onChange={(e)=> {
                                //console.log(e.target.files[0])
                                const imageName = 'photoLatest'
                                onhandleChange(e, imageName)
                            }}
                            required
                            />
                        </div>
                        <div className="form-group col-md-6">

                            <div id="photoLatest" style={{width: 100,height: 100, border: '1px solid lightgrey'}}
                        className="d-flex justify-content-center text-center align-items-center sef-items-center">
                            {!visibleOne ? (<small>Latest Photo</small>): null}
                                {visibleOne ? (
                                    <img src={photoLatest ? photoLatest : ''}  alt="Latest" />
                                ) : ''}
                            </div>
                        </div>
                    </div>
                    <div className="form-row p-3">    
                        <div className="form-group col-md-6">
                            <label htmlFor="inputphotosr">Photo at the time of appointment (SR copy)</label>
                            <input type="file" className="form-control" id="inputphotosr"
                            accept="image/*" key={theInputKey || ''}
                            name="selectedFileTwo"
                            onChange={(e)=> {
                                //console.log(e.target.files[0])
                                const imageName = 'photoAppointment'
                                onhandleChange(e, imageName)
                            }}
                            required
                            />
                        </div>
                        <div className="form-group col-md-6">
                        <div id="photoLatest" style={{width: 100,height: 100, border: '1px solid lightgrey'}}
                        className="d-flex justify-content-center text-center align-items-center self-items-center"
                        >
                            {!visibleTwo ? (<small>Photo Appointment</small>): null}
                                {visibleTwo ? (
                                <img src={photoAppointment ? photoAppointment : ''}  alt="Appointment" />) : ''}
                            </div>
                        </div>
                    </div>
                    <div className="form-row p-3">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputphotoretirement">Photo 12 months before date of retirement</label>
                            <input type="file" className="form-control" id="inputphotoretirement" accept="image/*" key={theInputKey || ''}
                            name="selectedFileThree"
                            onChange={(e)=> {
                                //console.log(e.target.files[0])
                                const imageName = 'photoRetirement'
                                onhandleChange(e, imageName)
                            }} required
                            />
                        </div>
                        <div className="form-group col-md-6">
                        <div id="photoLatest" style={{width: 100,height: 100, border: '1px solid lightgrey'}}
                        className="d-flex justify-content-center text-center align-items-center self-items-center"
                        >
                            {!visibleThree ? (<small>Photo 12 months before</small>): null}
                                {visibleThree ? (
                                <img src={photoRetirement ? photoRetirement : ''}  alt="Retirement" />) : ''}
                            </div>
                        </div>
                    </div>
                    <div className="form-row p-3">    
                        <div className="form-group col-md-6">
                            <label htmlFor="inputphotowithspouse">Photo with Spouse 12 months before date of retirement </label>
                            <input type="file" className="form-control" id="inputphotowithspouse" accept="image/*" key={theInputKey || ''}
                            name="selectedFileFour"
                            onChange={(e)=> {
                                //console.log(e.target.files[0])
                                const imageName = 'photoWithSpouse'
                                onhandleChange(e, imageName)
                            }}
                            required 
                            />
                        </div>
                        <div className="form-group col-md-6">
                        <div id="photoLatest" style={{width: 100,height: 100, border: '1px solid lightgrey'}}
                        className="d-flex justify-content-center text-center align-items-center self-items-center"
                        >
                            {!visibleFour ? (<small>Photo with Spouse</small>): null}
                                {visibleFour ? (
                                <img src={photoWithSpouse ? photoWithSpouse : ''}  alt="With Spouse" />) : ''}
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-lg-4 col-md-12 p-3 m-auto">
                    <button type="submit" className="form-control btn btn-success"
                    // onClick={(e)=>{
                    //     onClick(e)
                    // }}
                    
                    >
                    Upload
                    </button>
                    </div>
                </fieldset>
                </form>
            </div>
        )
    }


export default PhotoUploadDetails;
