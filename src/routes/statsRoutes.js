const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth')

const Stats = mongoose.model('Stats');

const router = express.Router();

router.use(requireAuth);

router.get('/stats', async (req, res) => {
    const stats = await Stats.find({ userId: req.user._id });

    res.send(stats);
});

router.post('/stats', async (req, res) => {
    const { mapName, gameStats } = req.body;

    if (!mapName || !gameStats) {
        return res.status(422).send({ error: 'You must include a map name and stats' })
    }
    try {
        const stat = new Stats({mapName, gameStats, userId: req.user._id });    
        await stat.save();  
        res.send(stat)
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});

module.exports = router; 