const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const player = new Schema({
    name: String,
    jerseyNumber: Number,
    team: String
})

module.exports = mongoose.model('Player', player);