import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/login.vue'
import Admin from '../views/admin.vue'
import Welcome from '../views/admin/welcome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/admin',
    component: Admin,
    children: [{
      path: 'welcome',
      component: Welcome,
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
