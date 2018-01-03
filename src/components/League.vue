<template>
  <div class="league">
    <div class="informations">
      <game-list
        v-bind:leagueId="self.id"
        v-bind:onGoing="false"
        v-bind:title="'Ended'"
        class="full-space bg-primary"
      />

      <div class="flex-column full-space">
        <new-game
          v-bind:leagueId="self.id"
          class="bg-primary"
        />
        <game-list
          v-bind:leagueId="self.id"
          v-bind:onGoing="true"
          v-bind:title="'On Going'"
          class="full-space bg-primary"
        />
      </div>
    </div>

    <div class="actions">
      <button
      type="button"
      class="btn btn-error"
      v-on:click="close"
      >Close</button>
    </div>
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
  computed: {
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
  .league {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: .5rem;

    .informations {
      flex: 1;
      display: flex;

      .block {
        flex: 1;
      }
    }

    .actions {
      text-align: right;
    }

    .full-space {
      flex: 1;
    }

    .flex-column {
      display: flex;
      flex-direction: column;
    }
  }
</style>
