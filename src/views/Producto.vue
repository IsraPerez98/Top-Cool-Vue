<template>
  <div class="producto">
      <h1>{{$route.params.id}}</h1>
      <b-container>
        <b-img v-bind:src="imagenesProducto[imagenSeleccionada]"></b-img>
        
        <b-container>
            <b-img class="imagenes-pequenas" thumbnail v-for="(imagen, index) in imagenesProducto" v-bind:key="index"
                width="100"
                height="100"
                v-bind:src="imagen"
            >
            </b-img>
        </b-container>
      </b-container>
  </div>
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

</style>