const mongoose = require('mongoose')
const validators = require('validators')
require('../db/mongoose')

const User = mongoose.model('me',{
    name: {
        type : String,
        require : true,
        trim : true
    },
    password:{
        type : String,
        require:true,
        trim : true,
        validate(value){
            if (value.length < 6) {
                throw new Error('Password length must be more than 6 characters!!')
            } else if (value.includes('password')) {
                throw new Error('Password should not include the word "password!"')
            }
        }
    },
    email:{
        type : String,
        require : true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valide!')
            }
        }
    },
    age : {
        type : Number,
        default : 0,
        validate(value){
            if (value<0){
                throw new Error('Age is invalide!')
            }
        }
    }
})