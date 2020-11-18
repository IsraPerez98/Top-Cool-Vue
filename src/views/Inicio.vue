<template>
  <div class="inicio">
    <b-container class="secciones-productos">
        <CarruselDestacados />
        <SeccionesProductos />
    </b-container>
  </div>
</template>

<script>

// @ is an alias to /src
import SeccionesProductos from '@/components/Inicio/SeccionesProductos.vue'
import CarruselDestacados from '@/components/Inicio/CarruselDestacados.vue'

export default {
  name: 'Inicio',
  components: {
      SeccionesProductos,
      CarruselDestacados,
  },
  
}
</script>
