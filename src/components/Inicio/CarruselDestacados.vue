<template>
  <div class="productos-destacados">
      <h2>Productos destacados de la semana</h2>
      <b-carousel
      id="carrusel-destacados"
      :interval="4000"
      controls
      indicators
      img-width="640"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      >
      <b-carousel-slide v-for="(producto, index) in productos_destacados" v-bind:key="index">
        <template #img>
           <router-link class="nav-link" active-class="active" v-bind:to="'/producto/' + producto.id">
             <img
              class="imagen-producto"
              width="640"
              height="360"
              v-bind:src="producto.imagenes[0]"
              alt="image slot"
            >
            <h2 class="titulo">{{producto.nombre}}</h2> 
           </router-link>
          
        </template>
      </b-carousel-slide>

      </b-carousel>
</div>
</template>

<script>
// @ is an alias to /src

import productos from '@/productos.js'


export default {
  name: 'CarruselDestacados',
  data: () => {
    return {
      productos_destacados: [
        productos[0],
        productos[1],
      ]
    }
  },
  components: {
  } 
}
</script>

<style scoped lang="scss">
  .productos-destacados {
    
    background-color: #fce4ef;
    border-radius: 20px;
    color: black;
    padding-top: 10px;
    padding-bottom: 10px;


    h2 {
      color: black;
    }
    .carousel {
      margin: auto;
      max-width: 820px;

      .nav-link {
        padding-bottom: 40px;
      }
    }
  }
  
</style>