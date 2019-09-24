<template>
    <nav>
        <img class="logo" src="../../src/assets/logo.png" />
        <ul v-if="isLoggedIn" class="nav-links">
            <li class="nav-items">Welcome, {{ userName }}</li>
            <li class="nav-items" @click="logout">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
            </li>
        </ul>
    </nav>
</template>

<script>
import Login from '../../src/components/Login';
import store from '../store';

export default {
    name: 'TopComponent',
    components: {
        Login
    },
    data() {
        return {
            authenticate: this.$parent.$data.authenticated
        };
    },
    computed: {
        userName() {
            return store.state.user.email;
        },
        isLoggedIn() {
            if (store.state.status === 'success') {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/login');
                });
        }
    }
};
</script>

<style scoped>

nav {
    width: 100%;
    background-color: #1a3966;
    padding-left: 30px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 1em;
}

.logo {
    display: inline-block;
    max-width: 250px;
}

li {
    margin-left: 20px;
}

.nav-links {
    list-style: none;
    display: flex;
    padding-right: 30px;
}

.nav-item a {
    display: inline-block;
    padding: 10px 15px;
    text-decoration: none;
}

</style>
