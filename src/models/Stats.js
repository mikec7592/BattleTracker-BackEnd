const mongoose = require('mongoose');

const gameStatsSchema = new mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    map: {
        name: '',
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


mongoose.model('Stats', gameStatsSchema);

// possible way for adding a relation between user and their gamestats??