<template>
  <div class="league">
    <h2>Games</h2>
    <div class="form-group">
      <select name="" v-model="newGamePlayer1">
        <option v-for="player in playerList" value="player.id">{{player.name}}</option>
      </select>
      VS
      <select name="" v-model="newGamePlayer2">
        <option v-for="player in playerList" value="player.id">{{player.name}}</option>
      </select>
      <button
        type="button"
        class="btn btn-primary"
      >Start</button>
    </div>

    <div class="game-list">
      <div
        class="game"
        v-for="game in self.games"
      >
        <div class="score">
          game.player1
          game.scorePlayer1
        </div>
        -
        <div class="score">
          game.player2
          game.scorePlayer2
        </div>
      </div>

    </div>
    <button
      type="button"
      class="btn btn-primary"
      v-on:click="close"
    >Close</button>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'league',
  store,
  props: [
    'self',
  ],
  data() {
    return {
      newGamePlayer1: '',
      newGamePlayer2: '',
    };
  },
  computed: {
    playerList() {
      return this.$store.state.playerList;
    },
  },
  methods: {
    close() {
      this.$store.commit('unselectLeague');
    },
  },
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';
</style>
