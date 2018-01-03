<template>
  <section class="component bg-dark">
    <span class="title">New player</span>
    <div class="form-group">
      <input
      type="text"
      placeholder="Name"
      v-model="playerNameInput"
      v-on:keyup.enter="createNewPlayer"
      />
      <button
        class="btn btn-action btn-primary circle"
        v-on:click="createNewPlayer"
        >
        <i class="icon icon-plus"></i>
      </button>
    </div>

    <span class="title">Player list</span>
    <ul class="player-list">
      <li
        v-for="player in playerList"
        v-bind:key="`player${player.id}`"
      >{{player.name}}</li>
    </ul>
  </section>
</template>

<script>
import store from '../store';

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
      return this.$store.state.playerList;
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
    }
  }

</style>
