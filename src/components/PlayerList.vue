<template>
  <section class="component bg-dark">
    <span class="title">New player</span>
    <div class="form-group">
      <input
        type="text"
        placeholder="Name"
        v-model="playerNameInput"
        v-on:keyup.enter="createNewPlayer"
        class="form-input"
      />
      <button
        class="btn btn-action btn-primary circle"
        v-on:click="createNewPlayer"
      >
        <i class="icon icon-plus"></i>
      </button>
    </div>

    <span class="title">Player list</span>
    <div class="player-list">
      <div
        v-for="player in playerList"
        class="player"
        v-bind:key="`player${player.id}`"
      >
        <avatar v-bind:self="player" />
        {{player.name}} -
        {{player.games.length}} games
      </div>
    </div>
  </section>
</template>

<script>
import store from '../store';
import Avatar from './Avatar.vue';

export default {
  name: 'player-list',
  store,
  props: [
  ],
  data() {
    return {
      playerNameInput: '',
    };
  },
  computed: {
    playerList() {
      return this.$store.state.playerList.sort((a, b) => b.games.length - a.games.length);
    },
  },
  methods: {
    createNewPlayer() {
      if (this.playerNameInput !== '') {
        this.$store.commit('createPlayer', this.playerNameInput);
        this.playerNameInput = '';
      }
    },
  },
  components: {
    Avatar,
  },
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';

  .component {
    padding: .5rem;
    display: flex;
    flex-direction: column;
    border-left-color: $primary-color;
    border-left-width: 1px;
    border-left-style: solid;

    .title {
      font-size: 1.5rem;
    }

    .player-list {
      flex: 1;
      overflow-y: auto;

      .player {
        font-size: 1rem;
        margin-top: .5rem;
        padding-bottom: .5rem;
        border-bottom-color: $secondary-color;
        border-bottom-width: 1px;
        border-bottom-style: solid;
      }
    }

    .form-group {
      display: flex;

      .btn {
        margin-left: .5rem;
      }
    }
  }

</style>
