<template>
    <header>
        <!-- <div class="logo"></div> -->
        <img class="logo" src="../../src/assets/logo.png" />
        <div v-if="authenticated">
            <p>Welcome</p>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            authenticated: false
        }
    }
}
</script>

<style scoped>

header {
    display: flex;
    border-bottom: 1px solid #d0d9e2;
    background-color: #1a3966;
    padding: 1em;
}

.logo {
    width: 15%;
}

</style>