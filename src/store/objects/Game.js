class Game {
  constructor(id, player1, player2) {
    this.id = id;
    this.player1 = player1;
    this.player2 = player2;
    this.scorePlayer1 = 0;
    this.scorePlayer2 = 0;
    this.isFinished = true;
  }

  end() {
    this.isFinished = true;
  }

  setScore(player, score) {
    if (score >= 0) {
      if (this.player1.id === player.id) {
        this.scorePlayer1 = score;
      } else if (this.player2.id === player.id) {
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
