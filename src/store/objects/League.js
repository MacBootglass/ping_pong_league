class League {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.startingDate = new Date();
    this.games = [];
  }
}

export default League;
