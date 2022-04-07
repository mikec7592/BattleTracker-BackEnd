require('./models/User')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes')

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);


const mongoUri = 'mongodb+srv://mikec7592:garbage1@battle-tracker.skc78.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to Mongo', err);
});

app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.listen(3001, () => {
    console.log('listening on port 3001!')
});