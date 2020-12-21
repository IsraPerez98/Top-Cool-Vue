<template>
    <form class="clientes">
      <div>
        <label for="validationDefault01" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="validationDefault01" value="Juanito" required>
      </div>
      <div>
        <label for="validationDefault02" class="form-label">Apellido</label>
        <input type="text" class="form-control" id="validationDefault02" value="Perez" required>
      </div>
      <div>
        <label for="validationDefaultUsername" class="form-label">Usuario</label>
        <div class="input-group">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
          <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required>
        </div>
      </div>
      <div>
        <label for="validationDefault03" class="form-label">Ciudad</label>
        <input type="text" class="form-control" id="validationDefault03" required>
      </div>
      <div>
        <label for="validationDefault04" class="form-label">Estado</label>
        <select class="form-select" id="validationDefault04" required>
          <option selected disabled value="">Sexo</option>
          <option>Masculino</option>
          <option>Femenino</option>
          <option>Otro</option>
        </select>
      </div>
      <div>
        <label for="validationDefault05" class="form-label">Codigo Postal</label>
        <input type="text" class="form-control" id="validationDefault05" required>
      </div>
      <div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
          <label class="form-check-label" for="invalidCheck2">
            Acepta Terminos y Condiciones
          </label>
        </div>
      </div>
      <div>
        <button class="btn btn-primary" type="submit">Guardar</button>
      </div>
    </form>
</template>

<script>
export default {
  name: 'DatosClientes',
}
</script>

<style scoped lang="scss">
  .clientes{
    width: 100%;
    min-width: 300px;
    max-width: 600px;
    margin: auto;
  }
</style>