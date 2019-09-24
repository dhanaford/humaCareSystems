import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import store from './store';

import ItemComponent from './components/ItemComponent';
import Login from './components/Login';

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;



const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: ItemComponent,
            meta: {
                requiresAuth: true
            }
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ]

});


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.authStatus) {
            next();
            return;
        }
        next('/login');
    } else {
        next();
    }
});

/* eslint-disable no-new */
window._rootVue = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
