<template>
  <div class="app">
    <Tariffs/>
  </div>
</template>

<script>
import Tariffs from './components/Tariffs.vue'

export default {
  name: 'App',
  components: {
    Tariffs
  }
}
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 10px;
  .logo {
    width: 50px;
  }
}
</style>
