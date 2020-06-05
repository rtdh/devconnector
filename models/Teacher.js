const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    basicDetails : [
        {
        name : {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        hrmsid: {
            type: String,
            required: true
        },
        cfmsid: {
            type: String,
            required: true
        },
        aadhaar: {
            type: String,
            required: true
        },
        maritalstatus: {
            type: String,
            require: true
        },
        caste: {
            type: String,
            required: true
        },
        phc: {
            type: String,
            required: true
        },
        dob: {
            type: String,
            required: true
        },
        dojs : {
            type: String,
            required: true
        },
        retirementage: {
            type: Number,
            required: true
        },
        dor : {
            type: String,
            required: true
        }
        }
    ],
    
    placeOfBirth : [
        {
            pbstate : {
                type : String,
                required: true
            },
            pbdistrict : {
                type: String,
                required : true
            },
            pbmandal : {
                type: String,
                required: true
            },
            pbvillage : {
                type: String,
                required : true
            },
            pbpincode : {
                type: String,
                required: true
            },
            nationality : {
                type: String,
                required: true
            }
        }
    ],

    localStatus : [
        {
            lstate : {
                type : String,
                required: true
            },
            ldistrict : {
                type: String,
                required : true
            },
            lrevenuedivision : {
                type: String,
                required: true
            },
            lmandal : {
                type: String,
                required: true
            }
        }
    ],
        
    otherDetails : [
        {
            moleone : {
                type: String,
                required: true
            },
            moletwo : {
                type: String,
                required: true
            },
            height : {
                type: Number,
                required: true
            },
          
            ssccopyImageUrl : {
                type: String,
                required: true
            },
            ssccopyImageId: {
                type : String,
                required: true
            },
            date: {
            type: Date,
            default: Date.now
          }
        }
    ],
    photoDetails : [
        {
            photoLatest : {
                type : String
            },
            photoAppointment : {
                type : String
            },
            photoRetirement : {
                type : String
            },
            photoWithSpouse : {
                type : String
            }
        }
    ]
});

module.exports = mongoose.model('Teacher', teacherSchema);