class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.games = [];
  }

  removeGame(game) {
    this.games = this.games.filter(cursor => cursor !== game);
  }
}

export default Player;
