<template>
  <div class="productos">
    <ul id="productos" style="list-style-type:none;">
      <li v-for="(producto, index) in productos" v-bind:key="index">
        <Producto
          v-bind:nombre="producto.nombre"
          v-bind:descripcion="producto.descripcion"
          v-bind:tallas="producto.tallas"
          v-bind:precio="producto.precio"
        />
      </li>
    </ul>
</div>
</template>

<script>
// @ is an alias to /src
import Producto from '@/components/Productos/Producto.vue'

export default {
  name: 'Productos',
  data: () => {
    return {
      productos: [
        {
          nombre: "Aaaa",
          descripcion: "xd",
          tallas: ["xl", "l"],
          precio: 3000,
        },
      ]
    }
  },
  components: {
    Producto,
  }
}
</script>
