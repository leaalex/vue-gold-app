import Vue from 'vue';
import Vuex from 'vuex';
import get from './data';

Vue.use(Vuex);


const SET_TASK_LIST = 'SET_USER_ITEM';

export default {
  state: {
    listIsLoading: true,
    list: [],
  },
  mutations: {
    [SET_TASK_LIST](state, result) {
      state.list = [...state.list, ...result];
      state.listIsLoading = false;
    },
  },
  actions: {
    getTaskList(context, list) {
      context.commit(SET_TASK_LIST, get('taskList', list));
    },
  },
  modules: {
  },
};
