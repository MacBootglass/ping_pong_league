<template>
  <div class="game-list">
    <h2>{{title}}</h2>
    <div
      class="game"
      v-for="game in gameList"
    >
      <div class="score">
        {{getPlayerName(game.player1)}}
        <input v-if="onGoing" type="number" v-model="scoresPlayer1[game.id]" min="0"/>
        <span v-else>{{game.scorePlayer1}}</span>
      </div>
      <i class="icon icon-minus"></i>
      <div class="score">
        {{getPlayerName(game.player2)}}
        <input v-if="onGoing" type="number" v-model="scoresPlayer2[game.id]" min="0"/>
        <span v-else>{{game.scorePlayer2}}</span>
      </div>
      <button v-if="onGoing" type="button" class="btn btn-error" v-on:click="end(game.player1, game.player2, game.id)">End</button>
    </div>
  </div>
</template>

<script>
import store from '../../store';

export default {
  name: 'game-list',
  store,
  data() {
    return {
      scoresPlayer1: [],
      scoresPlayer2: [],
    };
  },
  props: [
    'leagueId',
    'onGoing',
    'title',
  ],
  computed: {
    gameList() {
      return this.$store.state.gameList.filter(game => game.league === this.leagueId && this.onGoing === !game.isFinished);
    },
  },
  methods: {
    getPlayerName(playerId) {
      return this.$store.state.playerList.find(player => player.id === playerId).name;
    },
    end(player1, player2, gameId) {
      const obj = {
        player1,
        player2,
        scorePlayer1: this.scoresPlayer1[gameId],
        scorePlayer2: this.scoresPlayer2[gameId],
        game: gameId,
      };
      this.$store.commit('endGame', obj);
      console.log(obj);
    },
  },
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';

  .game-list {
    margin: .5rem;
    padding: .5rem;

    .game {
      display: flex;

      .score {
        text-align: center;
        display: flex;
        flex-direction: column;
      }

      .icon, .btn {
        margin-top: auto;
        margin-bottom: auto;
        margin-left: .5rem;
        margin-right: .5rem;
      }
    }
  }
</style>
