import Vue from 'vue';
import Vuex from 'vuex';
import get from './data';

Vue.use(Vuex);

const SET_LIST = 'SET_LIST';
const SET_IS_LOADING = 'SET_IS_LOADING';

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
    [SET_IS_LOADING](state, payload) {
      state.listIsLoading = payload;
    },
  },
  actions: {
    getList({ commit }, id) {
      return new Promise((resolve) => {
        const data = get('pointList', id);
        commit(SET_LIST, data);
        resolve(data);
      });
    },
  },
};
