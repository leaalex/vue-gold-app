import Vue from 'vue';
import Vuex from 'vuex';
import get from './data';

Vue.use(Vuex);

const SET_LIST = 'SET_LIST';
const SET_ISLOADING = 'SET_ISLOADING';
export default {
  namespaced: true,
  state: {
    listIsLoading: true,
    list: [],
  },
  mutations: {
    [SET_LIST](state, result) {
      state.list = result;
    },
    [SET_ISLOADING](state, payload) {
      state.listIsLoading = payload;
    },
  },
  actions: {
    getList({ commit }, list = [1, 2, 3]) {
      commit(SET_ISLOADING, true);
      return new Promise((resolve) => {
        setTimeout(
          () => {
            const data = get('pointList', list);
            commit(SET_LIST, data);
            commit(SET_ISLOADING, false);
            resolve(data);
          }, 1000,
        );
      });
    },
  },
};
