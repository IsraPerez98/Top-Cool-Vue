<template>
  <div class="login" >
        <b-form @submit.prevent="login" v-if="!(usuario)">
            <b-form-group id="grupo-entrada-1" label="Usuario:" label-for="entrada-1" >
                <b-form-input
                id="entrada-1"
                v-model="form.usuario"
                required
                placeholder="Nombre de Usuario"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="grupo-entrada-2" label="Contraseña:" label-for="entrada-2">
                <b-form-input
                    id="entrada-2"
                    type="password"
                    v-model="form.password"
                    required
                    placeholder="Contraseña"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Login</b-button>
            <b-button variant="success">Registrarse</b-button>
        </b-form>
        <div class="ya-logeado" v-else>
            <h1>Ya se ha hecho Login</h1>
            <router-link class="nav-link" active-class="active" to="/" exact>
                <b-button variant="primary">Volver a Inicio</b-button>
            </router-link>
             <b-button variant="danger" v-on:click="logout">Logout</b-button>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data: function() {
      return {
        form: {
          usuario: '',
          password: '',
        },
      }
    },
    props: {
        usuario: String,
        logout: Function,
    },
    methods: {
      login(evt) {
          console.log(evt)
          localStorage.setItem('usuario', this.form.usuario) // xd
          this.$router.push('/')
      },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .login {
        width: 50%;
        margin: auto;
        min-width: 200px;

        button {
            margin: 15px;
        }
    }
</style>
