<template>
  <b-container fluid="xl" class="producto">
    
    <b-row>
      <b-col class="imagenes-producto">
        <b-img class="imagen-grande" v-bind:src="dataProducto.imagenes[imagenSeleccionada]"></b-img>
        
        <b-container class="imagenes-thumbnails">
            <b-img class="imagen-thumbnail" v-on:click="imagenSeleccionada=index" thumbnail v-for="(imagen, index) in dataProducto.imagenes" v-bind:key="index"
                width="100"
                height="100"
                v-bind:src="imagen"
            >
            </b-img>
        </b-container>
      </b-col>

      <b-col class="texto-producto">
        <h1 class="nombre-producto">{{dataProducto.nombre}}</h1>
        <p class="descripcion-producto">{{dataProducto.descripcion}}</p>
        <p class="info-extra">{{infoExtra}}</p>
        <p class="tallas-producto-titulo">Tallas: </p>
        <ul class="tallas-producto" id="dataProducto.tallas" style="list-style-type:none; padding:0;">
          <li v-for="(talla, index) in dataProducto.tallas" v-bind:key="index">
            {{talla.toUpperCase()}}
          </li>
        </ul>
        <ul class="precios-especiales" id="dataProducto.preciosEspeciales" style="list-style-type:none; padding:0;">
          <li v-for="(data, index) in dataProducto.preciosEspeciales" v-bind:key="index">
            <h3 v-for="(precio, texto) in data" v-bind:key="texto">
                {{texto}} : ${{precio}}
            </h3>
          </li>
        </ul>
        <p class="precio-producto">Precio: <span>${{dataProducto.precio}}</span></p>
      </b-col>
    </b-row>
    <b-container class="botones">
      <b-button variant="outline-primary">Deja tu Comentario</b-button>
      <b-button variant="success" v-on:click="agregarACarrito" >Agregar al Carro</b-button>
    </b-container>
    <div class="alert alert-primary" role="alert" v-if="enCarro > 0">
      <router-link class="nav-link" active-class="active" to="/carrito" >
      Se han agregado {{enCarro}} al Carrito de compras!
      </router-link>
    </div>
  </b-container>
</template>

<script>

// @ is an alias to /src
import productos from '@/productos.js'


export default {
  name: 'Producto',
  components: {

  },
  props : {
    carrito: Array,
  },
  methods: {
    agregarACarrito: function(event) {
      //console.log(this.carrito)
      this.carrito.push(this.dataProducto)
      this.enCarro++
      console.log(this.carrito)
      if(event) {
        console.log(event)
      }
    }
  },
  data: function() {

    /*
    return {
      nombreProducto: "Aaaa",
      descripcionProducto: "xd",
      imagenesProducto: ["https://media.tenor.com/images/9329736b88def63c841754e8ccbe4da0/tenor.png","https://ohmygeek.net/wp-content/uploads/2018/06/Huevito-Rey-960x464.jpg"],
      imagenSeleccionada: 0,
      tallasProducto: ["xl", "l"],
      precioProducto: 3000,
    }
    */

    let data = {
      imagenSeleccionada: 0,
      enCarro: 0,
      infoExtra: "Estamos ubicados en Av.Alguna #3722 en el 4to piso del edificio B en la habitacion 453 pero podemos mandar a domicilio tu pedido.",
      dataProducto: {},
    }

    data.dataProducto = productos[this.$route.params.id];
    return data

  },
  
}
</script>

<style scoped lang="scss">
  .producto {
    .imagenes-producto {
      margin-top: 10px;
      margin-bottom: 10px;
      
      .imagenes-thumbnails {
        background-color: #C4C4C4;
        max-width: 60%;
        padding: 5px;
        margin-top: 10px;
        margin-bottom: 10px;

        .imagen-thumbnail {
          cursor: pointer;
        }
      }
    }
    .texto-producto {
      background-color: #C4C4C4;
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 10px;

      .precio-producto {
        margin-top: auto;
        font-size: 24px;

        span {
          color: orange;
        }
      }
      .tallas-producto {
          font-size: 18px;
          font-weight: bold;
          li {
            display: inline;
            margin: auto;
          }
        }
    }

    .botones {
      button {
        margin: 20px;
      }
    }
  }
</style>