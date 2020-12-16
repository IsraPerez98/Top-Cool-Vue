<template>
    <div class="pedidos">
        <NoAdmin v-if="!(usuario_admin)" />
        <div class="admin" v-else>
            <b-container v-if="carrito.length > 0" class="carrito">
                <h1 class="titulo">Pedidos realizados por los clientes:</h1>
                <b-container class="productos" id="carrito" >
                    <b-row class="row-producto" v-for="(producto, index) in carrito" v-bind:key="index">
                        <Producto
                            v-bind:nombre="producto.nombre"
                            v-bind:descripcion="producto.descripcion"
                            v-bind:imagenes="producto.imagenes"
                            v-bind:tallas="producto.tallas"
                            v-bind:precio="producto.precio"
                            v-bind:preciosEspeciales="producto.preciosEspeciales"
                            v-bind:id="producto.id"
                        />
                    </b-row>
                </b-container>
            </b-container>
        </div>
    </div>
</template>

<script>

import NoAdmin from './NoAdmin.vue'
import Producto from '@/components/Productos/Producto.vue'

export default {
  name: "Pedidos",
  props: {
      usuario_admin: Boolean,
      carrito: Array,
  },
  components: {
      NoAdmin,
      Producto,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>