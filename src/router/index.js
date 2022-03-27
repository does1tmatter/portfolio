import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Chapter1 from '../views/chapters/One.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: {
        prev: null,
        next: '/chapter1'
      }
    },
    {
      path: '/chapter1',
      name: 'ch 1',
      component: Chapter1,
      props: {
        prev: '/',
        next: '/about'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      props: {
        prev: '/chapter1',
        next: null
      }
    }
  ]
})

export default router
