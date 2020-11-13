<template>
  <footer class="barra-inferior mb-0">
        <b-container>
            <h3 class="mb-0 ml-10">Top Cool © {{new Date().getFullYear()}} | Powered by Grupo 4 TSI UTEM</h3>
            <div class="iconos-redes">
            </div>
        </b-container>
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
<style scoped>
    .barra-inferior {
            height: 50px;
            background-color: var(--secondary);
            color: white;
        }
</style>
