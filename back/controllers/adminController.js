const express = require('express');
const bodyParser = require('body-parser'); //interconnexion entre front et back

let adminWs = express();
adminWs.use(bodyParser.json());

adminWs.get("/", (req, res) => {  //request , response
    res.send('welcome to  adminController');

});
adminWs.post("/connexion",(req,res)=>{
    //récupération de code et insertion ds la base
    res.send('welcome to  adminController');
 });
 adminWs.put("/activer-user",(req,res)=>{
    res.send('welcome to  adminController');
 });
 adminWs.put("/desactiver-user",(req,res)=>{
    res.send('welcome to adminController');
});

adminWs.delete("/delete-user",(req,res)=>{
    res.send('welcome to  adminController');
});
adminWs.get("/lister-users",(req,res)=>{
    res.send('welcome to  adminController');
});

module.exports = adminWs;