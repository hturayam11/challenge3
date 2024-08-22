
import axios from 'axios';


const API_URL = 'http://localhost:3001/nba_teams';


export async function fetchTeams() {
  try {
    const response = await axios.get(API_URL);
    return response.data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
}
