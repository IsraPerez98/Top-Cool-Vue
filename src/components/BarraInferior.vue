<template>
  <footer class="barra-inferior mb-0">
        <b-row class="mx-auto">
            <h3 class="mx-auto">Top Cool © {{new Date().getFullYear()}} | Powered by Grupo 4 TSI UTEM</h3>
            <div class="iconos-redes mx-auto">
                <font-awesome-icon class="mr-2 ml-2" :icon="{ prefix: 'fab', iconName: 'instagram-square' } " size="3x"/>
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
            position: fixed;
            width: 100%;
            bottom: 0;
        }
</style>
