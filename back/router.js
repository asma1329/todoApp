const os = require('os'); // vble qui stocke le contenu de la bib os 
const express = require('express');
const bodyParser = require('body-parser'); //interconnexion entre front et back
const cors=require('cors');
const userWs = require('./controllers/userController');
const todocontroller=require('./controllers/todocontroller');
const adminController=require('./controllers/adminController');
/*
let user = os.userInfo();
console.log('Bonjour nodeJs');
console.log(user);
console.log('bonjour '+user.username);*/



let app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user',userWs);
app.use('/todo',todocontroller);
app.use('/admin',adminController);

//app.get("/:nom/:prenom", (req,res)=>{  //request , response
app.get("/", (req,res)=>{  //request , response
    /* let message = "welcome to the server";
    let myName=req.params.nom;
    let myPrenom=req.params.prenom; */
    // res.!!send('bonjour '+myName+' '+myPrenom);
    res.send('welcome to the server');
});

app.listen(3000,  ()=> {  //ES6
    console.log('server started');
})
