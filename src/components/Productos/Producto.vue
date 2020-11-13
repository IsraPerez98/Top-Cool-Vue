<template>
  <div class="producto">
      <b-card
        v-bind:title="nombre"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
            {{descripcion}}
        </b-card-text>
        <b-card-text>
            Tallas Disponibles: 
            <ul style="list-style-type:none;">
                <li v-for="(talla, index) in tallas" v-bind:key="index">
                    {{talla.toUpperCase()}}
                </li>
            </ul>
        </b-card-text>
        <b-card-text>
            <p>Precio: {{precio}}</p>
        </b-card-text>
      </b-card>
  </div>
</template>

<script>
export default {
  name: 'Producto',
  props: {
    nombre: String,
    descripcion: String,
    tallas: Array,
    precio: Number,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
