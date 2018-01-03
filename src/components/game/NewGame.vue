<template>
  <div class="new-game">
    <h2>New Game</h2>
    <div class="form-group">
      <select name="" v-model="player1">
        <option v-for="player in playerList" value="player.id">{{player.name}}</option>
      </select>
      VS
      <select name="" v-model="player2">
        <option v-for="player in playerList" value="player.id">{{player.name}}</option>
      </select>
      <button
        type="button"
        class="btn btn-primary"
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
    'league'
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
        league: this.league,
      };
      this.$store.commit('createGame', obj);
    },
  },
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';
</style>
