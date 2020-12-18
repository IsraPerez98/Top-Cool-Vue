<template>
  <div class="productos">
    <ul id="productos" v-if="!(categoria)" style="list-style-type:none;">
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
    <ul id="productos" v-else style="list-style-type:none;">
      <li v-for="(producto, index) in productos" v-bind:key="index">
        <Producto v-if="producto.categoria.toLowerCase() === categoria.toLowerCase()"
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
  data: function() {
    return {
      productos,
      categoria: this.$route.params.categoria,
    }
  },
  components: {
    Producto,
  },
  watch: {
    $route: function(){
        this.$forceUpdate()
        this.categoria = this.$route.params.categoria
    },
  }
}
</script>

<style scoped lang="scss">
  
</style>
