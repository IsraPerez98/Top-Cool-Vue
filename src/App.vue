<template>
  <div id="app">
    <BarraSuperior
      v-bind:usuario="usuario"
      v-bind:logout="logout"
      v-bind:usuario_admin="usuario_admin"
    />
    <div class="contenido">
      <router-view :logout="logout" :usuario="usuario" :carrito="carrito" :pedidos="pedidos" :usuario_admin="usuario_admin" ></router-view>
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
        pedidos: {},
        usuario: localStorage.getItem('usuario'),
        usuario_admin: false, // puede ser true or false
    }
  },
  methods: {
    guardarPedidos: function() {
      if(this.pedidos) {
        localStorage.setItem('pedidos', JSON.stringify(this.pedidos))
      } else {
        localStorage.setItem(this.pedidos, JSON.stringify({}))
      }
    },
    cargarPedidos: function() {
      this.pedidos = JSON.parse(localStorage.getItem('pedidos'))
    },
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
    usuarioEsAdmin: function() {
      if(this.usuario == "Admin") {
        this.usuario_admin = true
        console.log(this.usuario, " es admin")
      }
    },
    cargarUsuario: function() {
      this.usuario = localStorage.getItem('usuario')
      this.usuarioEsAdmin()
    },
    logout: function() {
      localStorage.removeItem('usuario')
      this.cargarUsuario()
    }
  },
  created() {
    this.cargarCarrito()
    this.cargarUsuario()
    this.cargarPedidos()
  },
  watch: {
    carrito: function () {
      this.guardarCarrito()
    },
    $route (){
        this.cargarUsuario() // revisamos el usuario cada vez que el route cambia
    },
    pedidos: function() {
      this.guardarPedidos()
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: #ffffff;

  .contenido {
    min-height: calc(100vh - 149px);
    margin-top: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
