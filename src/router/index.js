import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SobreMi from '../views/SobreMi.vue'
import Tecnologias from '../views/Tecnologias.vue'
import OtrasExp from '../views/OtrasExp.vue'
import Portafolio from '../views/Portafolio.vue'
import Contacto from '../views/Contacto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    component: SobreMi
  },
  {
    path: '/tecnologias',
    name: 'Tecnologias',
    component: Tecnologias
  },
  {
    path: '/otrasexp',
    name: 'OtrasExp',
    component: OtrasExp
  },
  {
    path: '/portafolio',
    name: 'Portafolio',
    component: Portafolio
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
