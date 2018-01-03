<template>
  <div class="league-list">
    <div
      v-for="obj in leagueList"
      v-bind:self="obj"
      v-bind:key="`league${obj.id}`"
      class="league league-info"
      v-on:click="displayLeague(obj.id)"
    >
      <span>{{obj.name}}</span>
      <span>Starting date: {{obj.startingDate.toLocaleString()}}</span>
      <ul>
        <li
          v-for="player in obj.getTopPlayers()"
          v-key="`league${obj.id}player${player.id}`"
        >{{player.name}}</li>
      </ul>
    </div>

    <div class="league">
      <span>New league</span>
      <input
        type="text"
        placeholder="Name"
        value=""
        v-model="leagueNameInput"
        v-on:keyup.enter="createNewLeague"
      />
      <button
        class="btn btn-action btn-primary circle"
        v-on:click="createNewLeague"
      >
        <i class="icon icon-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'dashboard',
  store,
  props: [
  ],
  data() {
    return {
      leagueNameInput: '',
    };
  },
  computed: {
    leagueList() {
      return this.$store.state.leagueList;
    }
  },
  methods: {
    createNewLeague() {
      if (this.playerNameInput !== '') {
        this.$store.commit('createLeague', this.leagueNameInput);
        this.leagueNameInput = '';
      }
    },
    displayLeague(leagueId) {
      console.log(leagueId);
    },
  },
}
</script>
<style lang="scss" scoped>
  @import '~spectre.css/src/variables';

  .league-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: auto;

    .league {
      flex-shrink: 0;
      width: 20%;
      margin: 1rem;
      padding: .5rem;
      display: flex;
      flex-flow: column;
      border-color: $primary-color;
      border-width: 1px;
      border-style: solid;
    }

    .league-info {
      cursor: pointer;
    }
  }

</style>
