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
        />
      </li>
    </ul>
</div>
</template>

<script>
// @ is an alias to /src
import Producto from '@/components/Productos/Producto.vue'

import imagenAbrigoAnimalPrint from '@/assets/imgs/Productos/AbrigoAnimalPrint.png'
import imagenMascarillas from '@/assets/imgs/Productos/Mascarillas.png'

export default {
  name: 'Productos',
  data: () => {
    return {
      productos: [
        {
          nombre: "Abrigo animal print",
          descripcion: "Descripcion no disponible",
          imagenes: [imagenAbrigoAnimalPrint,],
          tallas: ["s", "m", "l", "xl"],
          precio: 7990,
          preciosEspeciales: [{"Por Mayor": 5990},],
        },
        {
          nombre: "Mascarillas distintos colores y diseños",
          descripcion: "Forradas en lycra polyamyda elastano una tela antitranspirante y antibacterial de secado rápido y por fuera son de tela porosa opaca.  Pasan la prueba del spray",
          imagenes: [imagenMascarillas,],
          tallas: ["s","m","l","xl"],
          precio: 3000,
          preciosEspeciales: [],
        },
      ]
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
