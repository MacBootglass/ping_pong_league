<template>
  <div class="league">
    <new-game />
    <game-list v-bind:gameList="self.games"/>

    <button
      type="button"
      class="btn btn-primary"
      v-on:click="close"
    >Close</button>
  </div>
</template>

<script>
import store from '../store';
import NewGame from './game/NewGame.vue';
import GameList from './game/GameList.vue';

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
  components: {
    NewGame,
    GameList,
  }
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';
</style>
