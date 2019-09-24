import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        loggedIn: localStorage.getItem('humanCareLogin') || null,
        user: {}
    },
    mutations: {
        auth_success(state, user) {
            state.status = 'success';
            state.user = user;
        },
        auth_error(state) {
            state.status = 'error';
        },
        logout(state) {
            state.status = '';
            state.token = '';
        }
    },
    actions: {
        login({ commit }, user) {
            commit('auth_success', user);
        },
        logout({ commit }) {
            commit('logout');
        }
    },
    getters: {

        authStatus: state => state.status

    }
});
