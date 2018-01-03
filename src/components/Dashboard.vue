<template>
  <div class="league-list">
    <div
      v-for="obj in leagueList"
      v-bind:self="obj"
      v-bind:key="`league${obj.id}`"
      class="league league-info"
      v-on:click="displayLeague(obj.id)"
    >
      <span>{{obj.name}}</span>
      <span>Starting date: {{obj.startingDate.toLocaleString()}}</span>
      <ul>
        <li
          v-for="top in getTopPlayers(obj.id, 5)"
          v-bind:key="`league${obj.id}player${top.player.id}`"
        >{{top.player.name}} - {{top.ratio}}</li>
      </ul>
    </div>

    <div class="league">
      <span>New league</span>
      <input
        type="text"
        placeholder="Name"
        value=""
        v-model="leagueNameInput"
        v-on:keyup.enter="createNewLeague"
      />
      <button
        class="btn btn-action btn-primary circle"
        v-on:click="createNewLeague"
      >
        <i class="icon icon-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'dashboard',
  store,
  props: [
  ],
  data() {
    return {
      leagueNameInput: '',
    };
  },
  computed: {
    leagueList() {
      return this.$store.state.leagueList;
    },
    playerList() {
      return this.$store.state.playerList;
    },
  },
  methods: {
    createNewLeague() {
      if (this.playerNameInput !== '') {
        this.$store.commit('createLeague', this.leagueNameInput);
        this.leagueNameInput = '';
      }
    },
    displayLeague(leagueId) {
      this.$store.commit('selectLeague', leagueId);
    },
    getTopPlayers(league, length) {
      let playerScoreList = this.getPlayersScore(league);
      playerScoreList = playerScoreList.sort((a, b) => b.ratio - a.ratio);
      return playerScoreList.slice(0, length);
    },
    getPlayersScore(league) {
      const playerScoreList = [];
      const playerList = this.playerList;
      for (let i = 0; i < playerList.length; i++) {
        const player = playerList[i];
        let totalWins = 0;
        let totalPlays = 0;

        for (let j = 0; j < player.games.length; j++) {
          const game = this.$store.state.gameList.find(currentGame => currentGame.id === player.games[j]);
          if (game.league === league) {
            totalPlays += 1;
            if (game.getWinner() === player.id) totalWins += 1;
          }
        }
        if (totalPlays > 0) playerScoreList.push({
          player,
          totalWins,
          totalPlays,
          ratio: totalWins / totalPlays,
        });
      }
      return playerScoreList;
    },
  },
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';

  .league-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: auto;

    .league {
      flex-shrink: 0;
      width: 20%;
      margin: 1rem;
      padding: .5rem;
      display: flex;
      flex-flow: column;
      border-color: $primary-color;
      border-width: 1px;
      border-style: solid;
    }

    .league-info {
      cursor: pointer;
    }
  }

</style>
