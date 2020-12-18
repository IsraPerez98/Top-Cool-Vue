<template>
  <div class="comentarios-destacados">
      <h2>Comentarios de nuestros clientes</h2>
      <b-carousel
      id="carrusel-comentarios"
      :interval="4000"
      controls
      indicators
      background="#fce4ef"
      >
      <b-carousel-slide v-for="(comentario, index) in comentarios_destacados " v-bind:key="index">
          <template #img>
                <div class="texto">
                    <h1>{{comentario.nombrePersona}} nos escribe: </h1>
                    <p> {{comentario.comentarioEscrito}} </p>
                </div>
              <img
                class="d-block w-100"
                width="0"
                height="0"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Blank.png"
                alt="image slot"
            >
            </template>
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
      comentarios_destacados: [
        {
            nombrePersona: "María Saavedra",
            comentarioEscrito: "Los mejores Productos! Todo Perfecto",
        },
        {
            nombrePersona: "Sandra Olivares",
            comentarioEscrito: "Excelente Atención, un 7 todo!",
        }
      ]
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
    .comentarios-destacados {
        margin: auto;
        width: 90%;
        margin-bottom: 20px;
        margin-top: 50px;
        color: black;

        h2 {
          color: black;
        }

        .texto {
            height: fit-content;
            margin-top: 50px;
            margin-bottom: 80px;
            width: 80%;
            margin-left: auto;
            margin-right: auto;
        }

    }
</style>