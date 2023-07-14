import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Hombre from '@/views/Hombre.vue'
import Mujer from '@/views/Mujer.vue'
import Electronica from '@/views/Electronica.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/hombre',
    name: 'Men',
    component: Hombre
  },
  {
    path: '/mujer',
    name: 'Women',
    component: Mujer
  },
  {
    path: '/electronica',
    name: 'Technology',
    component: Electronica
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
