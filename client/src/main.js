import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false;

import ItemComponent from './components/ItemComponent'
import Login from './components/Login'

const routes = [
  {
    name: 'home',
    path: '/',
    component: ItemComponent
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
