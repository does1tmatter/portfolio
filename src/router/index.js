import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Chapter1 from '../views/chapters/One.vue'
import Chapter2 from '../views/chapters/Two.vue'
import Chapter3 from '../views/chapters/Three.vue'

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
        next: '/chapter2'
      }
    },
    {
      path: '/chapter2',
      name: 'ch 2',
      component: Chapter2,
      props: {
        prev: '/chapter1',
        next: '/chapter3'
      }
    },
    {
      path: '/chapter3',
      name: 'ch 3',
      component: Chapter3,
      props: {
        prev: '/chapter2',
        next: '/about'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      props: {
        prev: '/chapter3',
        next: null
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 300)
    })
  }
})

export default router
