import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import Dashboard from '@/views/Dashboard.vue'
import FavoritePage from '@/views/FavoritePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
      meta: {
        title: 'Rick and Morty Characters',
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritePage,
      meta: {
        title: 'Favorite Characters',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Rick and Morty Characters'
  next()
})

export default router
