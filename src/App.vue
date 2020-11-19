<template>
  <div id="app">
    <BarraSuperior/>
    <router-view :carrito="carrito"></router-view>
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
          {
            idProducto: "1",
            nombreProducto: "abrigo",
            imagenProducto: "",
            tallasProducto: ["s", "xl"],
            precioProducto: "8000",
          }
        ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
