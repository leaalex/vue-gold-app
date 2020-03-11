import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  state: {
    list: [
      { taskid: 1, name: 'Задание 1', points: [1, 2, 3] },
      { taskid: 2, name: 'Задание 2', points: [3, 4, 5] },
      { taskid: 3, name: 'Задание 3', points: [5, 6, 7, 8, 9, 10] },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
};
