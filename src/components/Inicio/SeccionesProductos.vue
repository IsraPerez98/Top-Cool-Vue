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

import imagenMasVendidos from '@/assets/imgs/Inicio/SeccionesProductos/MasVendidos.png'
import imagenBlusas from '@/assets/imgs/Inicio/SeccionesProductos/Blusas.png'
//import imagenProfe from '@/assets/imgs/Inicio/SeccionesProductos/Profe.png'
import imagenChaquetas from '@/assets/imgs/Inicio/SeccionesProductos/Chaquetas.png'
import imagenPantalones from '@/assets/imgs/Inicio/SeccionesProductos/Pantalones.png'

export default {
  name: 'Inicio',
  components: {
      SeccionProductos,
  },
  data: () => {
    return {
      seccionesDisponibles: [
        {
            nombreSeccion: "Los Mas Vendidos",
            imagenSeccion: imagenMasVendidos,
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