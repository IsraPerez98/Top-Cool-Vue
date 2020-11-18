<template>
  <div class="seccion-productos">
    <router-link class="nav-link" active-class="active" to="/productos">
        <b-card img-src="https://www.concierto.cl/wp-content/uploads/2020/01/huevito-rey.jpg" img-alt="Card image" img-top>
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
  }
}
</script>
