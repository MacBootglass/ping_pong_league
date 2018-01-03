<template>
  <div class="app">
    <div class="page">
      <navbar title="Dashboard"/>
      <dashboard />
    </div>
    <player-list/>
  </div>
</template>

<script>
import store from './store';
import Navbar from './components/Navbar.vue';
import PlayerList from './components/PlayerList.vue';
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'app',
  store,
  data() {
    return {};
  },
  components: {
    Navbar,
    PlayerList,
    Dashboard,
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
