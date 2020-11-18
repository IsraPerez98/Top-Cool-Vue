<template>
  <div class="secciones-productos">
    <b-container>
        <b-col v-for="(seccion, index) in seccionesDisponibles" :key="index">
            <SeccionProductos
                v-bind:nombreSeccion="seccion.nombreSeccion"
                v-bind:imagenSeccion="seccion.imagenSeccion"
            />
        </b-col>
    </b-container>
  </div>
</template>

<script>

// @ is an alias to /src

import SeccionProductos from './SeccionProductos.vue';

export default {
  name: 'Inicio',
  components: {
      SeccionProductos,
  },
  data: () => {
    return {
      seccionesDisponibles: [
        {
            nombreSeccion: "ola",
            imagenSeccion: "https://www.concierto.cl/wp-content/uploads/2020/01/huevito-rey.jpg",
        },
        {
            nombreSeccion: "adios xd",
            imagenSeccion: "https://img.discogs.com/qfFnZ6C7Q4_A9SQXFdqHvHxM3wQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/L-1729366-1600126773-5014.jpeg.jpg",
        },
        {
            nombreSeccion: "que pasa larva xd",
            imagenSeccion: "https://i.ytimg.com/vi/bNq_wjvwb0M/hqdefault.jpg",
        },
      ]
    }
  }
}
</script>
