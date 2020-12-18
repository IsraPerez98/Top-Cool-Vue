<template>
  <div class="seccion-productos">
    <router-link class="nav-link" active-class="active" :to="'/productos/' + nombreSeccion">
        <b-card text-variant="dark" v-bind:img-src="imagenSeccion" img-height="250" img-width="480" img-alt="Seccion de Ventas" img-top>
            <b-card-text text-tag="h3">
                {{nombreSeccion}}
            </b-card-text>
        </b-card>
    </router-link>
  </div>
</template>

<script>

// @ is an alias to /src

export default {
  name: 'Inicio',
  components: {
  },
  props : {
      nombreSeccion: String,
      imagenSeccion: String,
  }
}
</script>

<style scoped lang="scss">
  .seccion-productos {
    .card {
      border-radius: 5%;
      overflow: hidden;
      background-color: #e5ffff;
    }
  }
  
</style>