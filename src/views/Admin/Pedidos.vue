<template>
    <div class="pedidos">
        <NoAdmin v-if="!(usuario_admin)" />
        <div class="admin" v-else>
            <b-container class="pedidos">
                <h1 class="titulo">Pedidos realizados por los clientes:</h1>
                <b-container class="pedidos-bloque" id="pedidos" >
                    <b-container class="pedidos-cliente" v-for="(productos, usuario) in pedidos" v-bind:key="usuario">
                        <h2>Pedidos realizados por <span>{{usuario}}</span></h2>
                        <b-container class="pedido">
                            <h3>Pedido N° 1 de {{usuario}}</h3>
                            <b-row class="producto" v-for="(producto, index) in productos" v-bind:key="index">
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
      pedidos: Object,
  },
  components: {
      NoAdmin,
      Producto,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .pedidos {

        .pedidos-cliente {
            background-color: #efefef;
            margin-top: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
            padding-top: 10px;
            padding-bottom: 10px;

            .pedido {
                background-color: #8d8d8d;
                border-radius: 4px;
                padding-top: 10px;
                padding-bottom: 10px;
            }
        }
    }
</style>