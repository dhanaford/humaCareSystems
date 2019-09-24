<template>
    <div>
        <div class="login-form">
            <form class="login">
                <h2>Enter Credentials</h2>
                <input v-model="email" type="text" name="firstname" /><br>
                <input v-model="password" type="password" name="password" /><br>
                <button @click.prevent="authUser">Login</button>
                <p v-show="info.length >= 1"
                    v-for="(item, index) in info"
                    :key="index">
                    {{ item }}
                </p>
            </form>
        </div>
    </div>
</template>

<script>
import ls from 'local-storage';
import store from '../store';

// TOD hardcoded login info should obviously not be stored here :) For demo purposes only.
const login = {
    email: 'test@gmail.com',
    password: 'login123'
};
export default {
    name: 'LoginComponent',
    data() {
        return {
            authenticated: false,
            email: null,
            password: null,
            error: {
                invalidCredentials: 'You username and password do not match'
            },
            info: []
        };
    },
    computed: {
        loginInfo() {
            return ls.set(JSON.stringify('humanCareLogin'), login);
        },
        isAutheticated() {
            let auth = ls.get(JSON.stringify('humanCareLogin'));
            if (auth.email === this.email && auth.password === this.password) {
                this.authenticated = true;
                return true;
            } else {
                this.authenticated = false;
                return false;
            }
        }
    },
    methods: {
        authUser() {
            let params = {
                email: this.email,
                password: this.password
            };
            if (this.isAutheticated) {
                return store.dispatch('login', params)
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err));
            } else {
                this.info.push(this.error.invalidCredentials);
            }
        }
    }
};
</script>

<style scoped>

input {
    margin-bottom: .5em;
}

.login-form {
    text-align: center;
    vertical-align: middle;
    padding: 1em;
    border: 1px solid #ebeef5;
    margin-top: 20px;
    border-radius: 4px;
    background-color: #fff;
}

.login {
   display: table;
   width: 100%;
}
</style>
