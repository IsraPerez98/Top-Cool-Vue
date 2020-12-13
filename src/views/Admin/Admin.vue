<template>
    <div class="admin-panel">
        <NoAdmin v-if="!(usuario_admin)" />
        <div class="admin" v-else>
            <b-button variant="primary">Agregar Producto</b-button>
            <b-button variant="primary">Ver Pedidos</b-button>
        </div>
    </div>
</template>

<script>

import NoAdmin from './NoAdmin.vue'

export default {
  name: "Admin",
  props: {
      usuario_admin: Boolean,
  },
  components: {
      NoAdmin,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .admin-panel {
        .admin {
            display: flex;
            flex-direction: column;

            button {
                margin: auto;
                margin-top: 10px;
                margin-bottom: 10px;
            }
        }
    }
</style>