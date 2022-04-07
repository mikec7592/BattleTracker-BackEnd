const mongoose = require('mongoose');

const gameStatsSchema = new mongoose.Schema({
    map: {
        dropZone: String,
        endZone: String
    },
    performance: {
        kills: Number,
        damage: Number,
        revives: Number,
        win: Boolean
    }
});
// const 

mongoose.model('Stats', gameStatsSchema);


//  