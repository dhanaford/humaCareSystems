<template>
    <div id="app">
        <Top></Top>
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
button, a, i {
  cursor: pointer;
}
button {
   border-radius: 4px;
   color: #777;
}
input {
  padding: 10px;
  height: 20px;
  margin-right: 40px;
}
.login input {
  margin-right: 0;
}
input.add-item {
  padding: 10px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-wrapper {
  display: flex;
  min-height: 85vh;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  background-color: #F6F6F6;
}
</style>
