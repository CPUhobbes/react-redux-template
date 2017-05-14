const Players = require('../../models/Players');

const PlayersController = {
    
    // Get all players from DB
    getAllPlayers: (req, res) => {
        Players.findAll().exec(function (err, results){ 
           res.json(results);
        });
    }
}

module.exports = PlayersController;