const express = require('express');
const bodyParser = require('body-parser'); //interconnexion entre front et back

const { Todo } = require('../models/todo');

let todoWs = express();
todoWs.use(bodyParser.json());

todoWs.get("/", (req, res) => {  //request , response
    res.send('welcome to   todocontroller');

});

todoWs.post("/ajouter-todo", (req, res) => {  //request , response
    let data = req.body;
    let todo = new Todo({
        titre: data._titre,
        description: data._description,
        idUser: data._id
    })
    todo.save().then((x) => {
        res.status(200).send({ message: "todo insereted !" })
    }).catch((e) => {
        res.status(400).send({ message: e })
    });
});

todoWs.put("/modifier-todo", (req, res) => {  //request , response
    res.send('welcome to  modifier');
});

todoWs.delete("/supprimer-todo", (req, res) => {  //request , response
    res.send('welcome to  supprimer');
});

todoWs.get("/lister-todos/:idUser", (req, res) => {  //request , response
    let id = req.params.idUser;

    Todo.find({ idUser: id })
        .then((todos) => {
            res.status(200).send(todos);
        })
        .catch((e) => {
            res.status(400).send({ message: e })
        });
});

todoWs.delete("/supprimer-done", (req, res) => {  //request , response
    res.send('welcome to  supprimerDone');
});

module.exports = todoWs;