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

module.exports = router; 