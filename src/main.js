import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './quasar';
// import ColorDirecrive from './directives/color';

Vue.config.productionTip = false;

export const eventEmitter = new Vue();

Vue.filter('upper', (value) => value.toUpperCase());
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
