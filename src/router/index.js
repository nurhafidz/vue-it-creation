import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Artikel from '../views/Artikel.vue'
import Artikeldetail from '../views/Artikeldetail.vue'
import Kepengurusan from '../views/Kepengurusan.vue'
import Galeri from '../views/Galeri.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/artikel',
    name: 'Artikel',
    component: Artikel
  },
  {
    path: '/artikel/detail',
    name: 'Artikeldetail',
    component: Artikeldetail
  },
  {
    path: '/kepengurusan',
    name: 'Kepengurusan',
    component: Kepengurusan
  },
  {
    path: '/galeri',
    name: 'Galeri',
    component: Galeri
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
