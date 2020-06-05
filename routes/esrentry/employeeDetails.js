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

const cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'dkblawqru', 
  api_key: '628672329365769', 
  api_secret: 'h2wOcQu1YozmkvtyzsD6cvRfVMU'
});



//@route    GET api/profile
//desc      GET current users profile
//@access   Private

app.get('/getTeacher', passport.authenticate('jwt' , {session: false}), (req, res)=>{

    
    const { errors } = {}
    Teacher.findOne({user: req.user.id})
        .populate('user', ['id','name','email'] )
        .then(teacher=>{
            if(!teacher){
                errors.noprofile = 'There is no teacher ...';
                return res.status(404).json(errors)
            }
            
            res.status(200).json(teacher)
        })
        .catch(error=>{
            res.status(404).json(error)
        })

       
})


app.post('/esrentry', passport.authenticate('jwt' , {session: false}), upload.single('file'), (req, res)=>{

    cloudinary.v2.uploader.upload(req.file.path, async (err, result)=> {
        if (err) {
            console.log(err);
        } else {

            const user = req.user.id;

            const basicDetails = {
                name: req.body.name,
                surname: req.body.surname,
                gender: req.body.gender,
                hrmsid: req.body.hrmsid,
                cfmsid: req.body.cfmsid,
                aadhaar: req.body.aadhaar,
                maritalstatus: req.body.martitalstatus,
                caste: req.body.caste,
                phc: req.body.phc,
                dob: req.body.dob,
                dojs: req.body.dojs,
                retirementage: req.body.retirementage,
                dor: req.body.dor,
            }

            const placeOfBirth = {
                pbstate: req.body.pbstate,
                pbdistrict: req.body.pbdistrict,
                pbmandal: req.body.pbmandal,
                pbvillage: req.body.pbvillage,
                pbpincode: req.body.pbpincode,
                nationality: req.body.nationality,
                
            }

            const localStatus = {
                lstate: req.body.lstate,
                ldistrict: req.body.ldistrict,
                lrevenuedivision: req.body.lrevenuedivision,
                lmandal: req.body.lmandal,
                
            }

            const otherDetails = {
                moleone: req.body.moleone,
                moletwo: req.body.moletwo,
                height: req.body.height
            }

            const teacher = new Teacher()
            teacher.user = user
            teacher.basicDetails.unshift(basicDetails)
            teacher.placeOfBirth.unshift(placeOfBirth)
            teacher.localStatus.unshift(localStatus)
            teacher.otherDetails.unshift(otherDetails)

            teacher.otherDetails[0].ssccopyImageUrl = result.secure_url;
            teacher.otherDetails[0].ssccopyImageId = result.public_id;
            
            await Teacher.findOneAndRemove({user: req.user.id}, (err)=>{
                if(err) throw err
                console.log(`teacher deleted with user${req.user.id}`)
            })

            await teacher.save((err, teacher)=>{
                if(err) throw err
                console.log(teacher)
                res.json(teacher)
            })
        } 
    });
})

module.exports = app;