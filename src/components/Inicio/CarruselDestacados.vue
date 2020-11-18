<template>
  <div class="productos-destacados">
      <h2>Productos destacados de la semana</h2>
      <b-carousel
      id="carrusel-destacados"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="10"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      >
      <b-carousel-slide v-for="(producto, index) in productos_destacados" v-bind:key="index"
        v-bind:caption="producto.nombreProducto"
        v-bind:text="producto.descripcionProducto"
        v-bind:img-src="producto.imagenProducto"
      >
      </b-carousel-slide>

      </b-carousel>
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'CarruselDestacados',
  data: () => {
    return {
      productos_destacados: [
        {
            nombreProducto: "ola",
            descripcionProducto: "xde",
            imagenProducto: "https://talcans.cl/uploads/file_1528057544.png",
        },
        {
            nombreProducto: "adsfadfs",
            descripcionProducto: "xde",
            imagenProducto: "https://www.eldinamo.cl/wp-content/uploads/2016/03/CHOCHE.jpg",
        },
        {
            nombreProducto: "adsfadfs",
            descripcionProducto: "xde",
            imagenProducto: "https://media.biobiochile.cl/wp-content/uploads/2020/01/captura.jpeg",
        },
      ]
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
</style>