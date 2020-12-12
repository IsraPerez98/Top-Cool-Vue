<template>
    <div class="admin-panel">
        <div class="no-admin" v-if="!(usuario_admin)">
            <h1>Este panel es solo para Administradores</h1>
            <router-link class="nav-link" active-class="active" to="/" exact>
                <b-button variant="primary">Volver a Inicio</b-button>
            </router-link>
        </div>
        <div class="admin" v-else>

        </div>
    </div>
</template>

<script>
export default {
  name: "Admin",
  props: {
      usuario_admin: Boolean,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>