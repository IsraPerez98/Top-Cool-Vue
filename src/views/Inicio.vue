<template>
  <div class="inicio">
    <b-container class="secciones-productos mt-lg-0" fluid>
        <CarruselDestacados />
        <SeccionesProductos />
        <CarruselComentarios />
    </b-container>
  </div>
</template>

<script>

// @ is an alias to /src
import CarruselDestacados from '@/components/Inicio/CarruselDestacados.vue'
import SeccionesProductos from '@/components/Inicio/SeccionesProductos.vue'
import CarruselComentarios from '@/components/Inicio/CarruselComentarios.vue'

export default {
  name: 'Inicio',
  components: {
      CarruselDestacados,
      SeccionesProductos,
      CarruselComentarios,
  },
  
}
</script>


<style scoped lang="scss">
  
</style>