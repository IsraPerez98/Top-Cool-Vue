import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookSquare)
library.add(faInstagramSquare)
library.add(faTwitterSquare)
library.add(faAddressCard)
library.add(faShoppingCart)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
