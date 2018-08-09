const Player = require('./models/player');


module.exports = {
    createPlayer(req, res) {
        const { name, jerseyNumber, team } = req.body;
        const newPlayer = new Player({
            name, 
            jerseyNumber, 
            team
        });
        newPlayer.save();
        res.status(200).json({message: 'Player Save Successfully!'});
    },
    readPlayers(req, res) {
        Player.find({}).exec((err, data) => {
            if(err) console.log('Players Find Error---------', err);
            console.log('Data Recieved_-----------', data);
        })
    }
}