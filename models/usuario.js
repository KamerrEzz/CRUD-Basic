const mongoose = require('mongoose');
const {Schema} = mongoose;


const usuario = new Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    age: {type: Number, required: true},
    preferences: {type: Array},
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('Usuario', usuario)