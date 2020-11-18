<template>
  <div class="inicio">
    <b-container class="secciones-productos">
        <SeccionesProductos 
            v-bind:seccionesDisponibles="seccionesDisponibles"
        />
    </b-container>
  </div>
</template>

<script>

// @ is an alias to /src
import SeccionesProductos from '@/components/Inicio/SeccionesProductos.vue'

export default {
  name: 'Inicio',
  components: {
      SeccionesProductos,
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
