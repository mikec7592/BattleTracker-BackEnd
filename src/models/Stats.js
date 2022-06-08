const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
    win: Boolean,
    damage: Number,
    revives: Number,
    killPoints: {
        kills: Number,
        assits: Number,
        participation: Number
    } 
})

const gameStatsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    mapName: {
        type: String,
        default: ''
    },
    gameStats: [performanceSchema]
});



mongoose.model('Stats', gameStatsSchema);

// possible way for adding a relation between user and their gamestats??