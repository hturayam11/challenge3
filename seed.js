'use strict';

const mongoose = require('mongoose');
const Team = require('./schema'); 

const Connection_string = 'mongodb://localhost:27017/'; 

const teamArray = [
  { name: "San Antonio Spurs", wins: 2283, losses: 1502 },
  { name: "Boston Celtics", wins: 3570, losses: 2462 },
  { name: "Los Angeles Lakers", wins: 3503, losses: 2419 },
  { name: "Utah Jazz", wins: 2146, losses: 1804 },
  { name: "Phoenix Suns", wins: 2380, losses: 2063 },
  { name: "Oklahoma City Thunder", wins: 2413, losses: 2111 },
  { name: "Portland Trail Blazers", wins: 2271, losses: 2009 },
  { name: "Milwaukee Bucks", wins: 2340, losses: 2103 },
  { name: "Miami Heat", wins: 1475, losses: 1328 },
  { name: "Philadelphia 76ers", wins: 3054, losses: 2805 },
  { name: "Houston Rockets", wins: 2328, losses: 2196 },
  { name: "Chicago Bulls", wins: 2344, losses: 2254 },
  { name: "Dallas Mavericks", wins: 1747, losses: 1714 },
  { name: "Denver Nuggets", wins: 1897, losses: 1890 },
  { name: "Indiana Pacers", wins: 1883, losses: 1903 },
  { name: "Atlanta Hawks", wins: 2891, losses: 2964 },
  { name: "New York Knicks", wins: 2924, losses: 3099 },
  { name: "Golden State Warriors", wins: 2923, losses: 3098 },
  { name: "Toronto Raptors", wins: 1071, losses: 1157 },
  { name: "Detroit Pistons", wins: 2813, losses: 3103 },
  { name: "Orlando Magic", wins: 1268, losses: 1453 },
  { name: "Cleveland Cavaliers", wins: 1984, losses: 2287 },
  { name: "New Orleans Pelicans", wins: 782, losses: 904 },
  { name: "Sacramento Kings", wins: 2702, losses: 3103 },
  { name: "Washington Wizards", wins: 2257, losses: 2748 },
  { name: "Charlotte Hornets", wins: 1153, losses: 1478 },
  { name: "Memphis Grizzlies", wins: 971, losses: 1258 },
  { name: "Brooklyn Nets", wins: 1622, losses: 2164 },
  { name: "Los Angeles Clippers", wins: 1792, losses: 2486 },
  { name: "Minnesota Timberwolves", wins: 1091, losses: 1621 }
];

async function seed() {
  try {
    await mongoose.connect(Connection_string, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB...");
    await Team.insertMany(teamArray);
    console.log("Data successfully seeded");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

seed();
