import Vue from 'vue';
import Vuex from 'vuex';
import task from './task';
import point from './point';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    task,
    point,
  },
});
