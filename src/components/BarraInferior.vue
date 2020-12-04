<template>
  <footer class="barra-inferior mb-0">
        <b-row class="mx-auto">
            <h6 class="mx-3 my-auto">Top Cool © {{new Date().getFullYear()}} | Powered by Grupo 4 TSI UTEM</h6>
            <div class="iconos-redes derecha">
                <a href="https://www.instagram.com/topcoolmoda/" target="_blank" ><font-awesome-icon v-b-tooltip.hover.top="'Siguenos en nuestro Instagram!'" class="mr-2 ml-2" :icon="{ prefix: 'fab', iconName: 'instagram-square' } " size="3x"/></a>
                <font-awesome-icon class="mr-2 ml-2" :icon="{ prefix: 'fab', iconName: 'facebook-square' } " size="3x"/>
                <font-awesome-icon class="mr-2 ml-2" :icon="{ prefix: 'fab', iconName: 'twitter-square' } " size="3x"/>
            </div>
        </b-row>
  </footer>
</template>

<script>
export default {
  name: 'BarraInferior',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .barra-inferior {
      background-color: var(--secondary);
      color: white;
      position: static;
      width: 100%;
      bottom: 0;

      .derecha{
        margin-left: auto;
      }

      a:link, a:visited {
        color: white;
        text-align: center;
        text-decoration: none;
      }
    }
    
</style>
