<template>
  <div class="secciones-productos">
    <h2>Nuestras Secciones Destacadas:</h2>
    <b-container fluid="xl">
      <b-row>
        <b-col lg="6" v-for="(seccion, index) in seccionesDisponibles" :key="index">
            <SeccionProductos
                v-bind:nombreSeccion="seccion.nombreSeccion"
                v-bind:imagenSeccion="seccion.imagenSeccion"
            />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

// @ is an alias to /src

import SeccionProductos from './SeccionProductos.vue'

import imagenMascarillas from '@/assets/imgs/Inicio/SeccionesProductos/Mascarillas.jpeg'
import imagenBlusas from '@/assets/imgs/Inicio/SeccionesProductos/Blusas.jpg'
//import imagenProfe from '@/assets/imgs/Inicio/SeccionesProductos/Profe.png'
import imagenChaquetas from '@/assets/imgs/Inicio/SeccionesProductos/Chaquetas.jpg'
import imagenPantalones from '@/assets/imgs/Inicio/SeccionesProductos/Pantalones.png'
import imagenVestidos from '@/assets/imgs/Inicio/SeccionesProductos/Vestidos.jpg'
import imagenInfantil from '@/assets/imgs/Inicio/SeccionesProductos/Infantil.jpg'


export default {
  name: 'Inicio',
  components: {
      SeccionProductos,
  },
  data: () => {
    return {
      seccionesDisponibles: [
        {
            nombreSeccion: "Mascarillas",
            imagenSeccion: imagenMascarillas,
        },
        {
            nombreSeccion: "Blusas",
            imagenSeccion: imagenBlusas,
        },
        {
            nombreSeccion: "Chaquetas",
            imagenSeccion: imagenChaquetas,
        },
        {
            nombreSeccion: "Pantalones",
            imagenSeccion: imagenPantalones,
        },
        {
          nombreSeccion: "Infantil",
          imagenSeccion: imagenInfantil,
        },
        {
          nombreSeccion: "Vestidos",
          imagenSeccion: imagenVestidos,
        }
      ]
    }
  }
}
</script>


<style scoped lang="scss">
  .secciones-productos {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;

    h2 {
      color: black;
    }

  }
  
</style>