/**
 * index
 * create by lqy 2018/5/12
 */
import Vue from 'vue';
import Vuex from 'vuex';
import common from './common';
import getters from './getters';
import login from './module/login';

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules: {
    common,
    login,
  },
});
