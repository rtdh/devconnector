const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport')

const app = express.Router()
const Teacher = require('../../models/Teacher')

app.use(bodyParser.json());

// Multer and Cloudinay

const multer = require('multer');
const storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
const imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter})

const cpUpload = upload.fields([{ name: 'selectedFileOne', maxCount: 1 }, { name: 'selectedFileTwo', maxCount: 1 }, { name: 'selectedFileThree', maxCount: 1 }, { name: 'selectedFileFour', maxCount: 1 }])


//const upload = multer({ storage: storage, fileFilter: imageFilter})

const cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'dkblawqru', 
  api_key: '628672329365769', 
  api_secret: 'h2wOcQu1YozmkvtyzsD6cvRfVMU'
});


app.get('/photoupload', (req, res)=>{
    res.send("get photo upload routes")
})

app.post('/uploadphotos', passport.authenticate('jwt' , {session: false}), cpUpload, async (req, res)=>{
    
    const filePaths = [
        req.files['selectedFileOne'][0],req.files['selectedFileTwo'][0],req.files['selectedFileThree'][0],req.files['selectedFileFour'][0]
    ]

    //console.log(req.files)

    //console.log(filePaths)

    const photoDetails = {}
    for ( i = 0; i < filePaths.length ; i++){
        
        await cloudinary.v2.uploader.upload(filePaths[i].path, (err, result)=> {
            if(err) throw err
            if ( i === 0) {
                photoDetails.photoLatest = result.secure_url;
            } else if ( i === 1) {
                photoDetails.photoAppointment = result.secure_url;
            } else if ( i === 2) {
                photoDetails.photoRetirement = result.secure_url;
            } else {
                photoDetails.photoWithSpouse = result.secure_url;
            }
        })
    }

    //console.log(photoDetails)

    Teacher.findOne({user: req.user.id})
        .then(teacher=>{
            if(teacher){
                teacher.photoDetails.push(photoDetails)
                teacher.save()
                console.log('photo detaisl updated')
                res.json(teacher)
            } else {
                console.log('files are not uploaded to the database')
            }
        })
        .catch(err=>console.log(err))
    
})

module.exports = app