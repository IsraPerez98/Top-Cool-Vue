<template>

    <div class="nuevo-producto">
        <NoAdmin v-if="!(usuario_admin)" />
        <div class="admin" v-else>

        </div>
    </div>
</template>

<script>

import NoAdmin from './NoAdmin.vue'

export default {
  name: "NuevoProducto",
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

</style>