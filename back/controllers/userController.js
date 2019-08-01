const express = require('express');
const bodyParser = require('body-parser'); //interconnexion entre front et back
const { mongoose } = require('../db/config'); // connecté sur BD todoapp
const bcrypt = require('bcrypt'); //
const jwt = require('jsonwebtoken');


const { User } = require('../models/user');

let userWs = express();
userWs.use(bodyParser.json());

userWs.get("/", (req, res) => {  //request , response
    res.send('welcome to user controller');

});

userWs.post("/inscription", (req, res) => {
    //récupération de code et insertion ds la base
    let data = req.body;
    let privateKey = 10;
    let hashedPassword = bcrypt.hashSync(data._motDePasse, privateKey);
    let user = new User({
        nom: data._nom,
        prenom: data._prenom,
        email: data._email,
        telephone: data._telephone,
        motDePasse: hashedPassword,  //data._motDePasse crypté
        role: "user"
    });

    user.save().then((x) => {
        res.status(200).send({ message: "user insereted !" })
    }).catch((e) => {
        res.status(400).send({ message: e })
    });

});

userWs.post("/connexion", (req, res) => {
    
    let email = req.body._email;
    let motDePasse = req.body._motDePasse;
console.log({email,motDePasse});


    // User.find({email:email}) meme nom 
    User.findOne({ email }).then((user) => {
    
        if (!user) {
            res.status(404).send({ message: "email incorrect" })
        }
    
        let valid = bcrypt.compareSync(motDePasse, user.motDePasse);
    
        if (!valid) {
            res.status(404).send({ message: "mot de passe incorrect" })
        }

        let token = jwt.sign({ _id: user._id, _role: user.role }, "chaineperso").toString();
    
        res.status(200).send({ token });
    
    }).catch((erreur) => {
       res.status(400).send({ message: erreur });
    });


    /*console.log(req.body);
    res.status(200).send("response from /connexionWs");
*/
});

module.exports = userWs;