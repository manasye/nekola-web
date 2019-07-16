import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchQuery: ""
  },
  mutations: {
    changeQuery(state, q) {
      state.searchQuery = q;
    }
  },
  getters: {
    searchQuery: state => state.searchQuery
  }
});
