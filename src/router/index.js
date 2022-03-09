import { createRouter, createWebHistory } from 'vue-router'
import ViewTimer from '../views/ViewTimer.vue'

const routes = [
  {
    path: '/',
    name: 'ViewTimer',
    component: ViewTimer
  },
  {
    path: '/settings',
    name: 'ViewSettings',
    component: () => import('../views/ViewSettings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
