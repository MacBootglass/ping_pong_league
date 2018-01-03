/* eslint no-param-reassign: "off" */

import Player from './objects/Player';
import League from './objects/League';
import Game from './objects/Game';

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
  createGame: (state, obj) => {
    const game = new Game(idGeneration(), obj.player1, obj.player2, obj.league);
    state.playerList.find(obj.player1).games.push(game.id);
    state.playerList.find(obj.player2).games.push(game.id);
    state.leagueList.find(obj.league).games.push(game.id);
    state.gameList.push(game);
  },
  selectLeague: (state, leagueId) => {
    state.leagueSelected = leagueId;
  },
  unselectLeague: (state) => {
    state.leagueSelected = null;
  },
};
