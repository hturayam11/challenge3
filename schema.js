const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  wins: Number,
  losses: Number, 
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;

