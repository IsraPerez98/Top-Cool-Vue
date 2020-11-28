<template>
  <div class="producto">
    <b-container class="bg-secondary" >
      <b-row align-h="between">
        <b-column>
          <ul id="imagenes" style="list-style-type:none; padding:0;">
            <li v-for="(imagen, index) in imagenes" v-bind:key="index">
              <b-img height="200px" v-bind:alt="nombre" v-bind:src="imagen"></b-img>
            </li>
          </ul>
        </b-column>
        <b-column style="width: 50%;">
          <h3>{{nombre}}</h3>
          <p class="descripcion">{{descripcion}}</p>
          <p class="tallas">Tallas: </p>
          <ul class="tallas" id="tallas" style="list-style-type:none; padding:0;">
            <li v-for="(talla, index) in tallas" v-bind:key="index">
              {{talla.toUpperCase()}}
            </li>
          </ul>
        </b-column>
        <b-column>
          <ul class="precios-especiales" id="preciosEspeciales" style="list-style-type:none; padding:0;">
            <li v-for="(data, index) in preciosEspeciales" v-bind:key="index">
              <h3 v-for="(precio, texto) in data" v-bind:key="texto">
                {{texto}} : ${{precio}}
              </h3>
            </li>
          </ul>
          <h3>Precio: {{precio}}</h3>
        </b-column>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Producto',
  props: {
    nombre: String,
    descripcion: String,
    imagenes: Array,
    tallas: Array,
    precio: Number,
    preciosEspeciales: Array, // [{"Por Mayor": 5900}, {etc}]
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .producto {
    margin: auto;
    width: 90%;
    margin-bottom: 20px;
    margin-top: 20px;

    .container {
      padding: 20px;
      border-radius: 12px;

      color: white;
      text-align: center;

      b-column {
        margin: auto;
        padding-top: 10px;
        padding-bottom: 10px;

        .tallas {
          font-size: 18px;
          font-weight: bold;
          li {
            display: inline;
            margin: auto;
          }
        }
      }
    }
  }
</style>
