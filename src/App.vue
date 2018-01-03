<template>
  <div class="app">
    <div class="page">
      <navbar title="Dashboard"/>
    </div>
    <player-list/>
  </div>
</template>

<script>
import store from './store';
import Navbar from './components/Navbar.vue';
import PlayerList from './components/PlayerList.vue';

export default {
  name: 'app',
  store,
  data() {
  },
  components: {
    Navbar,
    PlayerList,
  }
}
</script>

<style lang="scss">
  .app {
    height: 100%;
    width: 100%;
    display: flex;

    .page {
      flex: 1;
    }
  }
</style>
