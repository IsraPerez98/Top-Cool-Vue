<template>
  <div id="app">
    <BarraSuperior
      v-bind:usuario="usuario"
      v-bind:logout="logout"
    />
    <div class="contenido">
      <router-view :logout="logout" :usuario="usuario" :carrito="carrito"></router-view>
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
        usuario: localStorage.getItem('usuario')
    }
  },
  methods: {
    guardarCarrito: function() {
      if(this.carrito) {
        localStorage.setItem('carrito', JSON.stringify(this.carrito))
      } else {
        localStorage.setItem('carrito', JSON.stringify([]))
      }
      //console.log(this.carrito)
    },
    cargarCarrito: function() {
      this.carrito = JSON.parse(localStorage.getItem('carrito'))
      //console.log(this.carrito)
    },
    cargarUsuario: function() {
      this.usuario = localStorage.getItem('usuario')
    },
    logout: function() {
      localStorage.removeItem('usuario')
      this.cargarUsuario()
    }
  },
  created() {
    this.cargarCarrito()
    this.cargarUsuario()
  },
  watch: {
    carrito: function () {
      this.guardarCarrito()
    },
    $route (){
        this.cargarUsuario() // revisamos el usuario cada vez que el route cambia
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
