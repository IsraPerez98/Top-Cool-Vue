<template>
  <div class="contacto">
    <b-card class="tarjeta-contacto" no-body>
      <b-row class="row-tarjeta">
        <b-col class="col-imagen" md="6">
          <b-card-img
            v-bind:src="imagenContacto"
            alt="Contacto"
            class="imagen-tarjeta-contacto"
          >
          </b-card-img>
        </b-col>
        <b-col class="col-body" md="6">
          <b-card-body class="body-tarjeta-contacto">
            <h1>CONTÁCTANOS!</h1>
            <h4>FONO: +696969696969</h4>
            <h4>CORREO: contacto@topcool.cl</h4>
            <h4>DIRECCIÓN: Calle Falsa #1234</h4>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <iframe
      class="mapa"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.2869945843895!2d-70.5991458199692!3d-33.46623914647626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfc270900eb7%3A0x330e0d87329f4a5f!2sUniversidad%20Tecnol%C3%B3gica%20Metropolitana%2C%20Campus%20Macul!5e0!3m2!1ses-419!2scl!4v1607725920453!5m2!1ses-419!2scl"
      width="80%"
      height="300px"
      frameborder="1"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
    <b-container class="comentario">
      <h1>Deja Tu Comentario</h1>
      <form>
        <div class="mt-5">
          <div class="mb-3">
              <label>Nombre<span class="red">*</span></label>
              <input type="text" class="form-control" required>
          </div>
        </div>

      <!-- <div class="form-row">
        <div class="col-md-4 mb-3">
            <label for="validarApellidos">Apellidos:<span class="red">*</span></label>
            <input type="text" class="form-control" id="validarApellidos" name="validarApellidos" required>
        </div>
      </div> -->

      <!-- <div class="form-row">
        <div class="col-md-4 mb-3">
            <label for="validarEmail">Email:<span class="red">*</span></label>
            <input type="email" class="form-control" id="validarEmail" name="validarEmail" required>
        </div>
      </div> -->

      <!-- <div class="form-row">
        <div class="col-md-4 mb-3">
            <label for="validarTelefono">Teléfono:</label>
            <input type="number" class="form-control" id="validarTelefono" name="validarTelefono" max="999999999">
        </div>
      </div> -->

        <div>
          <div class="mb-3">
            <label>Tema:<span class="red">*</span></label>
            <select class="custom-select" required>
                <option selected disabled value="">Selecciona...</option>
                <option value="Problema con el envio de Productos">Problema con el envio de Producto(s)</option>
                <option value="Opinion sobre nuestra web">Opinion sobre nuestra web</option>
                <option value="Consultas">Consultas</option>
                <option value="Reclamos">Reclamos</option>
                <option value="Otros">Otros</option>
            </select>
          </div>
        </div>

        <div>
          <div class="mb-3">
            <label>Asunto:</label>
            <input type="text" class="form-control" required>
          </div>
        </div>

        <div class="mb-5">
          <label>Mensaje:<span class="red">*</span></label>
          <textarea class="form-control" rows="5" min="25" required></textarea>
        </div>

        <div class="mb-10">
          <button class="btn btn-primary" type="submit" name="submit">Enviar</button>
          <button class="btn btn-success" type="reset" name="reset">Limpiar</button>
        </div>
      </form>
    </b-container>
  </div>
</template>

<script>
import imagenContacto from "@/assets/imgs/Contacto/imgContacto.png";

export default {
  name: "Contacto",
  data: function () {
    let data = {};
    data.imagenContacto = imagenContacto;
    return data;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contacto {
  width: 90%;
  margin: auto;

  .tarjeta-contacto {
    .row-tarjeta {
      .col-imagen {
        padding-top: 10px;
        .imagen-tarjeta-contacto {
          width: 157px;
          height: auto;
        }
      }
    }
  }

  .mapa {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .comentario {
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    margin: auto;
  }
}
</style>
.
