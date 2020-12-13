<template>
    <div class="no-admin">
        <h1>Este panel es solo para Administradores</h1>
        <router-link class="nav-link" active-class="active" to="/" exact>
            <b-button variant="primary">Volver a Inicio</b-button>
        </router-link>
    </div>
</template>

<script>
export default {
  name: "NoAdmin",
};
</script>