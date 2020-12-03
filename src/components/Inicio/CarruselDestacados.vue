<template>
  <div class="productos-destacados">
      <h2>Productos destacados de la semana</h2>
      <b-carousel
      id="carrusel-destacados"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="640"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      >
      <b-carousel-slide v-for="(producto, index) in productos_destacados" v-bind:key="index"
        v-bind:caption="producto.nombreProducto"
        v-bind:text="producto.descripcionProducto"
        v-bind:img-src="producto.imagenProducto"
      >
      </b-carousel-slide>

      </b-carousel>
</div>
</template>

<script>
// @ is an alias to /src

import imagenTejidos from '@/assets/imgs/Inicio/CarruselDestacados/Tejidos.png'
import imagenCartera from '@/assets/imgs/Inicio/CarruselDestacados/Cartera.png'
import imagenPets from '@/assets/imgs/Inicio/CarruselDestacados/Pets.png'


export default {
  name: 'CarruselDestacados',
  data: () => {
    return {
      productos_destacados: [
        {
            nombreProducto: "Tejidos Artesanales",
            descripcionProducto: "",
            imagenProducto: imagenTejidos,
        },
        {
            nombreProducto: "Cartera",
            descripcionProducto: "",
            imagenProducto: imagenCartera,
        },
        {
            nombreProducto: "Articulos de Mascotas",
            descripcionProducto: "",
            imagenProducto: imagenPets,
        },
      ]
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
  .productos-destacados {
    background-color: #2c3e50;
    width: 100%;
    margin-top: 0px;
    margin-left: 0;
    padding-top: 10px;
    padding-bottom: 50px;

    h2 {
      color: white;
    }
    .carousel {
      margin: auto;
      max-height: 480px;
      max-width: 820px;
    }
  }
  
</style>