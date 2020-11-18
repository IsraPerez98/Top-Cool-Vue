<template>
  <div class="barra-superior">
        <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-brand href="/" >Top Cool</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="mx-auto" >
                    <b-nav-form class="mx-auto">
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
                    </b-nav-form>
                </b-navbar-nav>

                <b-navbar-nav >
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/" exact>Productos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/acerca" >Acerca De</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/contacto" >Contacto</router-link>
                    </li>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'BarraSuperior',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
