import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/login.vue'
import Admin from '../views/admin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
