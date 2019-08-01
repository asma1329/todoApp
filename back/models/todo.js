const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
    {
        titre: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        dateAjout: {
            type: String,
            required: true,
            default: new Date() // yekhedha mel systeme
        },
        dateFin: {
            type: String
        },
        etat: {
            type: Boolean,
            required: true,
            default: false
        }, idUser: {
            type: String,
            required: true
        }
    }
);


const Todo = mongoose.model('todo',TodoSchema);

module.exports = { Todo };