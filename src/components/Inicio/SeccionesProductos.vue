<template>
  <div class="secciones-productos">
    <b-container>
        <b-col v-for="(seccion, index) in seccionesDisponibles" :key="index">
            <SeccionProductos
                v-bind:nombreSeccion="seccion.nombreSeccion"
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
  props : {
      seccionesDisponibles: Array,
  }
}
</script>
