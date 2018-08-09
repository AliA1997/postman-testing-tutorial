require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ctrl = require('./controller');
const app = express();
const PORT = 7500;


mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true}, (err) => {
    if(err) console.log('Connection Error---------------', err);
    console.log('Mongooose Connected');
});

app.use(bodyParser.json());

app.post('/api/players', ctrl.createPlayer);
app.get('/api/players', ctrl.readPlayers);


app.listen(PORT, () => console.log(`Listening to Port: ${PORT}`));