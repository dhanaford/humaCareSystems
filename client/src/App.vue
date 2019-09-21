<template>
  <div id="app">
    <Top/>
    <div class="main-wrapper">
    <router-view></router-view>
    </div>
  <Bottom />
</div>
</template>

<script>
import 'normalize.css';
import Top from './components/Top.vue';
import Bottom from './components/Bottom.vue';

export default {
    name: 'App',
    components: {
        Top,
        Bottom
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-wrapper {
  display: flex;
  min-height: 90vh;
  flex: 1;
}
</style>
