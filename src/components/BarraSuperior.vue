<template>
  <div class="barra-superior">
        <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-brand href="/" >
                <b-img height="34px" src="@/assets/imgs/BarraSuperior/LogoTienda.png" alt="Logo Tienda"></b-img>
                Top Cool
            </b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="mx-auto" >
                    <b-nav-form class="mx-auto">
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
                    </b-nav-form>
                </b-navbar-nav>

                <b-navbar-nav >
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/" exact>Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/productos">Productos</router-link>
                    </li>
                    <!--
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/acerca" >Acerca De</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/contacto" >Contacto</router-link>
                    </li>
                    -->
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" to="/carrito" >Carrito</router-link>
                    </li>
                    <li class="nav-item panel-admin" v-if="usuario_admin">
                        <router-link class="nav-link" active-class="active" to="/admin" >Panel Admin</router-link>
                    </li>
                    <li class="nav-item usuario" v-if="usuario">
                        {{usuario}}
                    </li>
                    <li class="nav-item logout" v-if="usuario">
                        <!--<router-link class="nav-link" active-class="active" to="/login" >Logout</router-link> -->
                        <div class="boton-logout" v-on:click="logout">
                            Logout
                        </div>
                    </li>
                    <li class="nav-item login" v-else>
                        <router-link class="nav-link" active-class="active" to="/login" >Login</router-link>
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
      usuario: String,
      usuario_admin: Boolean,
      logout: Function,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .barra-superior {
        height: 0px;

        .usuario {
            color: #007bff;
            margin: auto;
            margin-left: 10px;
        }

        .logout {
            margin: auto;
            padding: auto;
            margin-left: 10px;
            .boton-logout {
                color: #dc3545;
                cursor: pointer;
                margin: auto;
            }
        }
    }
</style>
