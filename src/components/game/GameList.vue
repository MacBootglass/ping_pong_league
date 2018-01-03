<template>
  <div class="game-list">
    <div
      class="game"
      v-for="game in gameList"
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
</template>

<script>
import store from '../../store';

export default {
  name: 'game-list',
  store,
  props: [
    'gameList',
  ],
  computed: {
  },
  methods: {
  },
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';
</style>
