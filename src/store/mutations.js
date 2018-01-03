import Player from './objects/Player';
import League from './objects/League';

// TODO: replace this when the backend will be available
const idGeneration = () => `_${Math.random().toString(36).substr(2, 9)}`;

export default {
  createPlayer: (state, name) => {
    const player = new Player(idGeneration(), name);
    state.playerList.push(player);
  },
  createLeague: (state, name) => {
    const league = new League(idGeneration(), name);
    state.leagueList.push(league);
  },
};
