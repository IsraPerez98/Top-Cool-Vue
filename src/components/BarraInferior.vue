<template>
  <footer class="barra-inferior mb-0">
    <b-row class="mx-auto">
      <h6 class="mx-3 my-auto">
        Top Cool © {{ new Date().getFullYear() }} | Desarrollado por Grupo 4 TSI UTEM
      </h6>
      <!-- <b-navbar-nav class="contacto">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/contacto"
            >Contacto</router-link
          >
        </li>
      </b-navbar-nav> -->
      <div class="iconos-redes derecha">
        <a href="https://www.instagram.com/topcoolmoda/" target="_blank"
          ><font-awesome-icon
            v-b-tooltip.hover.top="'Siguenos en nuestro Instagram!'"
            class="mr-2 ml-2"
            :icon="{ prefix: 'fab', iconName: 'instagram-square' }"
            size="3x"
        /></a>
        <font-awesome-icon
          class="mr-2 ml-2"
          :icon="{ prefix: 'fab', iconName: 'facebook-square' }"
          size="3x"
        />
        <router-link class="nav-link" active-class="active" to="/contacto">
          <font-awesome-icon
            v-b-tooltip.hover.top="'Contactanos!'"
            class="mr-2 ml-2"
            icon="address-card"
            size="3x"
          />
        </router-link>
        
      </div>
    </b-row>
  </footer>
</template>

<script>
export default {
  name: "BarraInferior",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.barra-inferior {
  background-color: var(--secondary);
  color: white;
  position: static;
  width: 100%;
  bottom: 0;

  .contacto {
    margin: auto;
    margin-right: 5px;
  }

  .derecha {
    margin-left: auto;
    margin-right: 5px;
  }

  .iconos-redes {
    display: inline-flex;

    * {
      margin: auto;
      padding: 0;
    }
  }

  a:link,
  a:visited {
    color: white;
    text-align: center;
    text-decoration: none;
  }
}
</style>
