<template>
  <div class="productos">
    <ul id="productos" style="list-style-type:none;">
      <li v-for="(producto, index) in productos" v-bind:key="index">
        <Producto
          v-bind:nombre="producto.nombre"
          v-bind:descripcion="producto.descripcion"
          v-bind:imagenes="producto.imagenes"
          v-bind:tallas="producto.tallas"
          v-bind:precio="producto.precio"
          v-bind:preciosEspeciales="producto.preciosEspeciales"
          v-bind:id="producto.id"
        />
      </li>
    </ul>
</div>
</template>

<script>
// @ is an alias to /src
import Producto from '@/components/Productos/Producto.vue'
import productos from '@/productos.js'

export default {
  name: 'Productos',
  data: () => {
    return {
      productos,
    }
  },
  components: {
    Producto,
  }
}
</script>

<style scoped lang="scss">
  .productos {
    padding-top: 30px;
  }
  
</style>
