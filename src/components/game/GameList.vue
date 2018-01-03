<template>
  <div class="game-list">
    <div
      class="game"
      v-for="game in gameList"
    >
      <div class="score">
        {{getPlayerName(game.player1)}}
        {{game.scorePlayer1}}
      </div>
      -
      <div class="score">
        {{getPlayerName(game.player2)}}
        {{game.scorePlayer2}}
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
    'leagueId',
  ],
  computed: {
    gameList() {
      return this.$store.state.gameList.filter(game => game.league === this.leagueId && game.isFinished);
    },
  },
  methods: {
    getPlayerName(playerId) {
      return this.$store.state.playerList.find(player => player.id === playerId).name;
    }
  },
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';

  .game {
    display: flex;
    .score {

    }
  }
</style>
