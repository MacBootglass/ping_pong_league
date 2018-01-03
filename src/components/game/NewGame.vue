<template>
  <div class="new-game">
    <h2>New Game</h2>
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
  </div>
</template>

<script>
import store from '../../store';

export default {
  name: 'new-game',
  store,
  props: [
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
  },
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';
</style>
