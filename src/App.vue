<template>
  <div id="app">
    <BarraSuperior/>
    <div class="contenido">
      <router-view :carrito="carrito"></router-view>
    </div>
    <BarraInferior/>
  </div>
</template>

<script>
import BarraSuperior from './components/BarraSuperior.vue'
import BarraInferior from './components/BarraInferior.vue'

export default {
  name: 'App',
  components: {
    BarraSuperior,
    BarraInferior,
  },
  data: () => {
    return {
        carrito : [
        ],
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FAE8FF;

  .contenido {
    min-height: calc(100vh - 109px);
    margin-top: 60px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
