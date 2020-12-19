<template>
    <div class="pedidos">
        <NoAdmin v-if="!(usuario_admin)" />
        <div class="admin" v-else>
            <b-container class="pedidos">
                <h1 class="titulo">Pedidos realizados por los clientes:</h1>
                <b-container class="pedidos-bloque" id="pedidos" >
                    <b-container class="pedidos-cliente" v-for="(peds, usuario) in pedidos" v-bind:key="usuario">
                        <h2>Pedidos realizados por <span>{{usuario}}</span></h2>
                        <b-container class="pedido" v-for="(productos, pedido) in peds" v-bind:key="pedido">
                            <h3>Pedido N° {{pedido}} de {{usuario}}</h3>
                            <b-row class="producto bg-secondary" v-for="(producto, index) in productos" v-bind:key="index">
                                <Producto
                                    v-bind:nombre="producto.nombre"
                                    v-bind:descripcion="producto.descripcion"
                                    v-bind:imagenes="producto.imagenes"
                                    v-bind:tallas="producto.tallas"
                                    v-bind:precio="producto.precio"
                                    v-bind:preciosEspeciales="producto.preciosEspeciales"
                                    v-bind:id="producto.id"
                                />
                                <b-container class="detalles">
                                    <h5>Detalles:</h5>
                                    <b-col class="talla">
                                        <h6>Talla Solicitada</h6>
                                        <span>{{producto.tallaSeleccionada}}</span>
                                    </b-col>
                                </b-container>
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
            margin-top: 30px;
            margin-bottom: 10px;
            border-radius: 4px;
            padding-top: 20px;
            padding-bottom: 20px;

            .pedido {
                color: white;
                background-color: #8d8d8d;
                border-radius: 0px;
                padding-top: 10px;
                padding-bottom: 10px;

                .producto {
                    margin-top: 20px;
                    margin-bottom: 20px;
                    margin-left: 10px;
                    margin-right: 10px;
                    border-radius: 20px;

                    .detalles {
                        .talla {
                            span {
                                font-size: 20px;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    }
</style>