<template>
  <div class="seccion-productos">
    <router-link class="nav-link" active-class="active" to="/productos">
        <b-card v-bind:img-src="imagenSeccion" img-alt="Seccion de Ventas" img-top>
            <b-card-text>
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
