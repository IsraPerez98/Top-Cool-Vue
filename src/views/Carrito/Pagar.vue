<template>
    <b-container class="pagar">
        <b-col class="n-pedido bg-dark">
            <h2>Su N° de Pedido:</h2>
            <h3>{{idPedido}}</h3>
        </b-col>
        <b-col class="bg-dark">
            <h2>Para reservar su compra deposite el total en los siguientes datos:</h2>
            <ul class="datos-transferencia" id="datosTransferencia" style="list-style-type:none; padding:0;">
                <li v-for="(dato, index) in datosTransferencia" v-bind:key="index">
                    <p>{{index}}: {{dato}}</p>
                </li>
            </ul>
            <h3>Recuerde incluir su N° de pedido en el comentario</h3>
        </b-col>
    </b-container>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Pagar',
  components: {
  },
  props : {
    carrito: Array,
    usuario: String,
    pedidos: Object,
  },
  data: function() {
    let data = {}

    data.idPedido = Math.round(Math.random() * 10000) // xd

    data.datosTransferencia = {
        "Nombre": "BKA",
        "Rut": "121232-2",
        "Banco": "bancobla",
        "Cuenta": "1213212312",
        "Comentario": data.idPedido,
    }
    
    data.datosTransferencia["Monto A Pagar"] = 0

    this.carrito.forEach(producto => {
      data.datosTransferencia["Monto A Pagar"] = data.datosTransferencia["Monto A Pagar"] + producto.precio
    });

    return data
  },
  methods: {
      realizarPedido: function() {
          if(!this.usuario) {
              alert("Debe registrarse con una cuenta para realizar el pedido")
              this.$router.push('/login/')
          } else {
              this.pedidos[this.usuario] = this.carrito
              console.log(this.pedidos)
              localStorage.setItem('pedidos', JSON.stringify(this.pedidos)) // esto esta en App.vue, pero por alguna razon el watch no funciona
          }
      },
  },
  created() {
    this.realizarPedido()
  },
  
}
</script>

<style scoped lang="scss">
    .pagar {
        color: white;

        .col {
            margin-top: 10px;
            margin-bottom: 10px;
            padding-top: 10px;
            padding-bottom: 10px;

            border-radius: 10px;
        }
    }
</style>