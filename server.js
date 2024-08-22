'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Team = require('./schema');

const app = express();
const Connection_string = process.env.MONGODB_URI || 'mongodb://localhost:27017/';
const PORT = 3001;

app.use(cors());
app.use(express.json());

//mongoose.connect(Connection_string, { useNewUrlParser: true, useUnifiedTopology: true })
  //  .then(() => console.log('Connected to MongoDB'))
    //.catch(err => console.error('Could not connect to MongoDB:', err));

app.get('/nba_teams', async (req, res) => {
    try {
        const teams = await Team.find({});
        res.json(teams);
    } catch (error) {
        console.error('Error fetching teams:', error);
        res.status(500).send('Internal Server Error');
    }
});

mongoose.connect(Connection_string, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

   

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});