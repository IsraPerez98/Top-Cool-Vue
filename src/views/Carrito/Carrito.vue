<template>
    <b-container v-if="carrito.length > 0" class="carrito">
      <h1 class="titulo">Productos en tu carrito de compras</h1>
      <b-container class="productos" id="carrito" >
        <b-row class="row-producto" v-for="(producto, index) in carrito" v-bind:key="index">
          <Producto
            v-bind:nombre="producto.nombre"
            v-bind:descripcion="producto.descripcion"
            v-bind:imagenes="producto.imagenes"
            v-bind:tallas="producto.tallas"
            v-bind:precio="producto.precio"
            v-bind:preciosEspeciales="producto.preciosEspeciales"
            v-bind:id="producto.id"
          />
          <button type="button" class="btn-eliminar btn-danger" v-on:click="eliminarDeCarro(index)">Eliminar</button>
        </b-row>
      </b-container>
      <h2>Precio Total: {{precioTotal}} </h2>
      <b-row class="botones">
        <router-link class="nav-link" active-class="active" to="/carrito/pagar">
          <button type="button" class="btn pagar btn-success">Pagar</button>
        </router-link>
        <router-link class="nav-link" active-class="active" to="/productos">
          <button type="button" class="btn seguir btn-secondary">Seguir Comprando</button>
        </router-link>
      </b-row>
    </b-container>
    <b-container v-else class="carrito-vacio">
      <h1 class="titulo">Tu carrito está vacio</h1>
      <h2 class="mensaje">Revisa nuestro catalogo de productos</h2>
      <router-link class="nav-link" active-class="active" to="/productos">
        <button type="button" class="btn productos btn-secondary">Productos</button>
      </router-link>
    </b-container>
</template>

<script>

import Producto from '@/components/Productos/Producto.vue'

// @ is an alias to /src


export default {
  name: 'Carrito',
  components: {
    Producto,
  },
  props : {
    carrito: Array,
  },
  methods: {
    eliminarDeCarro: function(id) {
      this.carrito.splice(id,1)
      console.log(this.carrito)
    },
  },
  data: function() {
    let data = {}

    data.precioTotal = 0

    this.carrito.forEach(producto => {
      data.precioTotal = data.precioTotal + producto.precio
    });

    return data
  }
  
}
</script>

<style scoped lang="scss">
  .carrito {
    margin-bottom: 30px;
    .productos {
      
      .row-producto {
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: rgba(0,0,0,0.2);
        border-radius: 10px;
        padding: 10px;
        .btn-eliminar {
          margin: auto;
          border-radius: 4px;
          border: none;
        }
      }
    }

    .botones {
      margin: auto;
      width: fit-content;

      .btn {
        margin: auto;
        &.pagar {
          margin-right: 10px;
        }
        &.seguir {
          margin-left: 10px;
        }
      }
    }
  }
</style>