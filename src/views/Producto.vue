<template>
  <b-container fluid="xl" class="producto">
    <b-row>
      <b-col class="imagenes-producto">
        <b-img class="imagen-grande" v-bind:src="imagenesProducto[imagenSeleccionada]"></b-img>
        
        <b-container class="imagenes-thumbnails">
            <b-img class="imagen-thumbnail" v-on:click="imagenSeleccionada=index" thumbnail v-for="(imagen, index) in imagenesProducto" v-bind:key="index"
                width="100"
                height="100"
                v-bind:src="imagen"
            >
            </b-img>
        </b-container>
      </b-col>

      <b-col class="texto-producto">
        <h1 class="nombre-producto">{{nombreProducto}}</h1>
        <p class="descripcion-producto">{{descripcionProducto}}</p>
        <p class="precio-producto">Precio: ${{precioProducto}}</p>
      </b-col>
    </b-row>
    <b-container class="botones">
      <b-button variant="outline-primary">Deja tu Comentario</b-button>
      <b-button variant="success">Agregar al Carro</b-button>
    </b-container>
  </b-container>
</template>

<script>

// @ is an alias to /src


export default {
  name: 'Producto',
  components: {

  },
  data: () => {
    return {
        nombreProducto: "Aaaa",
        descripcionProducto: "xd",
        imagenesProducto: ["https://media.tenor.com/images/9329736b88def63c841754e8ccbe4da0/tenor.png","https://ohmygeek.net/wp-content/uploads/2018/06/Huevito-Rey-960x464.jpg"],
        imagenSeleccionada: 0,
        tallasProducto: ["xl", "l"],
        precioProducto: 3000,
    }
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
      }
    }

    .botones {
      button {
        margin: 20px;
      }
    }
  }
</style>