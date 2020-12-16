import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Productos from '../views/Productos.vue'
import Producto from '../views/Producto.vue'
import Carrito from '../views/Carrito/Carrito.vue'
import Pagar from '../views/Carrito/Pagar.vue'
import Contacto from '../views/Contacto.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin/Admin.vue'
import NuevoProducto from '../views/Admin/NuevoProducto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos,
  },
  { path: '/producto/:id',
    name: 'Producto',
    component: Producto,
    props: true,
  },
  {
    path: '/carrito/',
    name: 'Carrito',
    component: Carrito,
  },
  {
    path: '/carrito/pagar/',
    name: 'Pagar',
    component: Pagar,
  },
  {
    path: '/contacto/',
    name: 'Contacto',
    component: Contacto,
  },
  {
    path: '/login/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin/',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/admin/nuevoproducto/',
    name: 'NuevoProducto',
    component: NuevoProducto,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
