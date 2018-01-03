import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    playerList: [],
    leagueList: [],
    gameList: [],
    leagueSelected: null,
  },
  getters,
  mutations,
});

export default store;
