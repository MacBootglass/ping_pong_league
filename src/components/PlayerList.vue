<template>
  <section class="player-list bg-dark">
    <span class="title">Player list</span>
  </section>
</template>

<script>
import store from '../store';

export default {
  name: 'player-list',
  store,
  props: [
  ],
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';

  .title {
    font-size: 1.5rem;
  }

  .player-list {
    border-left-color: $primary-color;
    border-left-width: 1px;
    border-left-style: solid;
  }
</style>
