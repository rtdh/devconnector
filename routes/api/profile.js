const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


// load validation

const validateProfileInput = require('../../validation/profile');
const validateExperienceInput = require('../../validation/experience')
const validateEducationInput = require('../../validation/education')


// Load Profile Model

const Profile = require('../../models/Profile')
const User = require('../../models/User')

//@route    GET api/profile/test
//desc      Test profile route
//@access   Public
app.get('/test', (req, res)=>{
    res.json({msg: "Profile works"})
})

//@route    GET api/profile
//desc      GET current users profile
//@access   Private

app.get('/', passport.authenticate('jwt' , {session: false}), (req, res)=>{
    const { errors } = {}
    Profile.findOne({user: req.user.id})
        .populate('user', ['name','avatar'] )
        .then(profile=>{
            if(!profile){
                errors.noprofile = 'There is no profile for this user';
                return res.status(404).json(errors)
            }
            res.json(profile)
        })
        .catch(error=>{
            res.status(404).json(error)
        })
})


//@route    POST api/profile
//desc      Create or edit user profile
//@access   Private

app.post('/', passport.authenticate('jwt' , {session: false}), (req, res)=>{

    
    const {errors, isValid} = validateProfileInput(req.body)

    // Check Validatin

    if(!isValid){
        //return any errors with 400 status
        return res.status(400).json(errors)
    }


   // GET fields 
    const profileFields = {}
    profileFields.user = req.user.id
    if(req.body.handle) profileFields.handle = req.body.handle
    if(req.body.company) profileFields.company = req.body.company
    if(req.body.website) profileFields.website = req.body.website
    if(req.body.location) profileFields.location = req.body.location
    if(req.body.bio) profileFields.bio = req.body.bio
    if(req.body.status) profileFields.status = req.body.status
    if(req.body.githubusername) profileFields.githubusername = req.body.githubusername

    // Skills - split into array

    if(typeof req.body.skills !== 'undefined'){
    profileFields.skills = req.body.skills.split(',')
     }

    // Social fields

    profileFields.social = {}
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if(req.body.intragram) profileFields.social.intragram = req.body.intragram;

     Profile.findOne({user: req.user.id})
         .then(profile=>{
             if(profile){
                 console.log(profile.handle)
                 console.log(profile.status)
                 console.log(profileFields)
                 // Update 
                 Profile.findOneAndUpdate({user: req.user.id}, {$set: profileFields}, {new: true})
                     .then(profile=>{
                        res.json(profile)
                     })
             } else {
                 // Create

                // Check if handle exists
                 Profile.findOne({handle : profileFields.handle})
                     .then(profile=>{
                         if(profile){
                             errors.handle = 'That handle already exists';
                             res.status(400).json(errors)
                         }
                         // save profile
                         new Profile(profileFields).save()
                             .then(profile=>{
                                 console.log(profile)
                                 res.status(200).json(profile)
                             })
                     })
             }
         })
})


//@route    GET api/profile/handle/:handle
//desc      GET profile by handle
//@access   Public

app.get('/handle/:handle',(req,res)=>{
    
    Profile.findOne({handle: req.params.handle})
        .populate('user', ['name','avatar'])
        .then(profile=>{
            if(!profile){
                errors.noprofile ="There is no profile for  this user"
                res.status(404).json(errors)
            }
            console.log('handle route')

            res.status(200).json(profile)
        })
        .catch(error=>{
            res.json(error)
        })
})


//@route    GET api/profile/user/:user_id
//desc      GET profile by user id
//@access   Public

app.get('/user/:user_id',(req,res)=>{

    Profile.findOne({user: req.params.user_id})
        .populate('user', ['name','avatar'])
        .then(profile=>{
            if(!profile){
                errors.noprofile ="There is no profile for  this user"
                res.status(404).json(errors)
            }
            res.status(200).json(profile)
        })
        .catch(error=>{
            res.json(error)
        })
})



//@route    GET api/profile/experience
//desc      ADD experience to profile
//@access   Private

app.post('/experience/', passport.authenticate('jwt', {session: false}),(req,res)=>{

    const {errors, isValid} = validateExperienceInput(req.body)

    // Check validation
    if(!isValid){
        return res.status(400).json(errors)
    }
    
    Profile.findOne({user : req.user.id})
        .then(profile=>{

            const newExp = {
                title: req.body.title,
                company: req.body.company,
                location: req.body.location,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description
            }

            // add to exp array
            profile.experience.unshift(newExp)
            profile.save().then(profile=>res.json(profile)).catch(error=>res.json(error))

        })
})


//@route    GET api/profile/education
//desc      ADD education to profile
//@access   Private

app.post('/education/', passport.authenticate('jwt', {session: false}),(req,res)=>{

    const {errors, isValid} = validateEducationInput(req.body)

    // Check validation
    if(!isValid){
        return res.status(400).json(errors)
    }
    
    Profile.findOne({user : req.user.id})
        .then(profile=>{
            
            const newEdu = {
                school: req.body.school,
                degree: req.body.degree,
                fieldofstudy: req.body.fieldofstudy,
                from: req.body.from,
                to: req.body.to,
                current: req.body.current,
                description: req.body.description
            }

            // add to exp array
            profile.education.unshift(newEdu)
            profile.save().then(profile=>res.json(profile)).catch(error=>res.json(error))

        })
})

//@route    DELETE api/profile/experience/:exp_id
//desc      DELETE experience from profile
//@access   Private

app.delete('/experience/:exp_id', passport.authenticate('jwt', {session: false}),(req,res)=>{

    Profile.findOne({user : req.user.id})
        .then(profile=>{
            // Get remove index
            const removeIndex = profile.experience.map(item=> item.id)
            .indexOf(req.params.exp_id)

            // splice out of array
            profile.experience.splice(removeIndex,1)

            //save
            profile.save().then(profile=>res.json(profile)).catch(error=>res.json(error))
        })
})

//@route    DELETE api/profile/education/:edu_id
//desc      DELETE education from profile
//@access   Private

app.delete('/education/:edu_id', passport.authenticate('jwt', {session: false}),(req,res)=>{

    Profile.findOne({user : req.user.id})
        .then(profile=>{
            // Get remove index
            const removeIndex = profile.education.map(item=> item.id)
            .indexOf(req.params.exp_id)

            // splice out of array
            profile.education.splice(removeIndex,1)

            //save
            profile.save().then(profile=>res.json(profile)).catch(error=>res.json(error))
        })
})

//@route    DELETE api/profile
//desc      DELETE user and profile
//@access   Private

app.delete('/', passport.authenticate('jwt', {session: false}),(req,res)=>{

    Profile.findOneAndRemove({user: req.user.id})
        .then(()=>{
            User.findOneAndRemove({_id: req.user.id})
                .then(()=>{
                    res.json({success: true})
                })
        })
})

module.exports = app;