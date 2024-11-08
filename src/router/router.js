import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'


const routes = [
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router