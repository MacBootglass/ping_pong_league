<template>
  <div class="app">
    <div class="page">
      <navbar v-bind:title="title"/>
      <league v-if="leagueSelected" v-bind:self="leagueSelected" />
      <dashboard v-else/>
    </div>
    <player-list/>
  </div>
</template>

<script>
import store from './store';
import Navbar from './components/Navbar.vue';
import League from './components/League.vue';
import PlayerList from './components/PlayerList.vue';
import Dashboard from './components/Dashboard.vue';

export default {
  name: 'app',
  store,
  data() {
    return {};
  },
  computed: {
    leagueSelected() {
      return this.$store.state.leagueList.find((league) => league.id === this.$store.state.leagueSelected);
    },
    title() {
      return this.leagueSelected ? `League ${this.leagueSelected.name}` : 'Dashboard';
    },
  },
  components: {
    Navbar,
    PlayerList,
    Dashboard,
    League,
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
      display: flex;
      flex-direction: column;
    }
  }
</style>
