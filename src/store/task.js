import Vue from 'vue';
import Vuex from 'vuex';
import get from './data';

Vue.use(Vuex);


const SET_LIST = 'SET_LIST';


export default {
  namespaced: true,
  state: {
    listIsLoading: true,
    list: [],
  },
  mutations: {
    [SET_LIST](state, result) {
      state.list = result;
      state.listIsLoading = false;
    },
  },
  actions: {
    getList({ commit }, list = [1, 2, 3]) {
      return new Promise((resolve) => {
        const data = get('taskList', list);
        commit(SET_LIST, data);
        resolve(data);
      });
    },
  },
};
