class Game {
  constructor(id, player1, player2, league) {
    this.id = id;
    this.player1 = player1;
    this.player2 = player2;
    this.league = league;
    this.scorePlayer1 = 0;
    this.scorePlayer2 = 0;
    this.isFinished = false;
    this.startDate = new Date();
    this.endingDate = null;
  }

  duration() {
    return this.endDate - this.startDate;
  }

  end() {
    this.isFinished = true;
    this.endDate = new Date();
  }

  setScore(player, score) {
    if (score >= 0) {
      if (this.player1 === player) {
        this.scorePlayer1 = score;
      } else if (this.player2 === player) {
        this.scorePlayer2 = score;
      }
    }
  }

  getWinner() {
    if (this.scorePlayer1 > this.scorePlayer2) {
      return this.player1;
    } else if (this.scorePlayer2 > this.scorePlayer1) {
      return this.player2;
    }
    return null;
  }
}

export default Game;
