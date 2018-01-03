import Game from './Game';

const calcPlayersStats = (games) => {
  const playerList = [];
  games.forEach((game) => {
    if (playerList[game.player1]) {
      playerList[game.player1].totalPlays += 1;
    } else {
      playerList[game.player1] = {
        totalPlays: 0,
        totalWins: 0,
      };
    }

    if (playerList[game.player2]) {
      playerList[game.player2].totalPlays += 1;
    } else {
      playerList[game.player2] = {
        totalPlays: 0,
        totalWins: 0,
      };
    }

    playerList[game.getWinner()].totalWins += 1;
  });
};

const calcRatio = (player) => {
  return player.totalWins / player.totalPlays;
};

class League {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.startingDate = new Date();
    this.games = [];
  }

  newGame(id, player1, player2) {
    const game = new Game(id, player1, player2);
    this.games.push(game);
  }

  getTopPlayers() {
    const playersStats = calcPlayersStats(this.games);
    console.log(playersStats);
  }
}

export default League;
