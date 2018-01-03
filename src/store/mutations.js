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
    state.playerList.find(player => player.id === obj.player1).games.push(game.id);
    state.playerList.find(player => player.id === obj.player2).games.push(game.id);
    state.leagueList.find(league => league.id === obj.league).games.push(game.id);
    state.gameList.push(game);
  },
  endGame: (state, obj) => {
    const game = state.gameList.find(currentGame => currentGame.id === obj.game);
    game.setScore(obj.player1, parseInt(obj.scorePlayer1, 10));
    game.setScore(obj.player2, parseInt(obj.scorePlayer2, 10));
    game.end();
  },
  removePlayer: (state, player) => {
    state.playerList = state.playerList.filter(cursor => cursor.id !== player.id);
  },
  removeLeague: (state, league) => {
    state.leagueList = state.leagueList.filter(cursor => cursor.id !== league.id);
  },
  removeGame: (state, game) => {
    state.gameList = state.gameList.filter(cursor => cursor.id !== game.id);
    state.playerList.find(player => player.id === game.player1).removeGame(game.id);
    state.playerList.find(player => player.id === game.player2).removeGame(game.id);
    state.leagueList.find(league => league.id === game.league).removeGame(game.id);
  },
  selectLeague: (state, leagueId) => {
    state.leagueSelected = leagueId;
  },
  unselectLeague: (state) => {
    state.leagueSelected = null;
  },
};
