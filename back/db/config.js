const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/todoApp",{useNewUrlParser:true});

module.exports={mongoose};