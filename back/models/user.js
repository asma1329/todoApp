const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        nom: {
            type: String,
            required: true
        },
        prenom: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        telephone: {
            type: String,
            required: true
        },
        motDePasse: {
            type: String,
            required: true
        },
        role:{
          type : String,
          required: true
        },
        etat : {
            type : Boolean,
            required:true,
            default:false
        }

    }
);


const User=mongoose.model('user',UserSchema); 

module.exports={User};