<template>
  <section class="component bg-dark">
    <span class="title">Player list</span>
    <div class="player-list">
      <span v-for="player in playerList">{{player.name}}</span>
    </div>
    <button type="button" class="btn btn-primary">Add a player</button>
  </section>
</template>

<script>
import store from '../store';

export default {
  name: 'player-list',
  store,
  props: [
  ],
  computed: {
    playerList() {
      return this.$store.state.playerList;
    }
  }
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
    }
  }

</style>
