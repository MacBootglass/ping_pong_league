class League {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.startingDate = new Date();
    this.games = [];
  }

  removeGame(game) {
    this.games = this.games.filter(cursor => cursor !== game);
  }
}

export default League;
