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
        },
        {
            nombreSeccion: "adios xd",
        }
      ]
    }
  }
}
</script>
