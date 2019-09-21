<template>
   <div>
        <div class="login-form">
            <form class="login">
            <h2>Login</h2>
            <input type="text" name="email" /><br>    
            <input type="password" name="password" /><br>    
            <button @click.prevent="authUser">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            authenticated: false
        }
    },
    methods: {
        authUser() {
            console.log(this.authenticated);
            this.authenticated = true;
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>

.login-form {
    display: table-cell;
   text-align: center;
   vertical-align: middle;
}

.login {
   display: table;
   width: 100%;
}
</style>