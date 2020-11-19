<template>
    <b-container class="carrito">
      <h1 class="titulo">Productos en tu carrito de compras</h1>
      {{carrito}}
      <b-card v-for="(producto,index) in carrito" v-bind:key="index">
        
      </b-card>
    </b-container>
</template>

<script>

// @ is an alias to /src


export default {
  name: 'Producto',
  components: {

  },
  props : {
    carrito: Array,
  }
  
}
</script>

<style scoped lang="scss">

</style>