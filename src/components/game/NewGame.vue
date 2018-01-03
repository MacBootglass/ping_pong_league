<template>
  <div class="new-game">
    <h2>New Game</h2>
    <div class="form-group">
      <select name="" v-model="player1" class="form-select">
        <option v-for="player in playerList" v-bind:value="player.id">{{player.name}}</option>
      </select>
      <span>VS</span>
      <select name="" v-model="player2" class="form-select">
        <option v-for="player in playerList" v-bind:value="player.id">{{player.name}}</option>
      </select>
      <button
        type="button"
        class="btn btn-success"
        v-on:click="createGame"
      >Start</button>
    </div>
  </div>
</template>

<script>
import store from '../../store';

export default {
  name: 'new-game',
  store,
  props: [
    'leagueId',
  ],
  data() {
    return {
      player1: '',
      player2: '',
    };
  },
  computed: {
    playerList() {
      return this.$store.state.playerList;
    },
  },
  methods: {
    createGame() {
      const obj = {
        player1: this.player1,
        player2: this.player2,
        league: this.leagueId,
      };
      this.$store.commit('createGame', obj);
    },
  },
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';

  .new-game {
    margin: .5rem;
    padding: .5rem;

    .form-group {
      display: flex;

      span {
        margin-left: .5rem;
        margin-right: .5rem;
        margin-top: auto;
        margin-bottom: auto;
      }

      button {
        margin-left: .5rem;
      }
    }
  }
</style>
