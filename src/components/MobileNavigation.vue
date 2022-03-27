<script setup>
import { computed, ref } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'
import MenuIcon from '@/components/MenuIcon.vue'

const { getRoutes } = useRouter()
const route = useRoute()

const navLinks = getRoutes()
const pageName = computed(() => route.name || 'blank')
const menuOpen = ref(false)
</script>

<template>
  <div class="fixed top-0 left-0 z-40 w-full flex lg:hidden items-center justify-between px-12 py-6 bg-skywhite/[.4] backdrop-blur-md">
    <div>
      <div class="inline-block font-black text-[32px] cursor-pointer hover:text-blueone transition-all duration-500 select-none">
        <RouterLink to="/">
          angrybud
        </RouterLink>
      </div>
    </div>
    <MenuIcon :menu-open="menuOpen" class="w-[35px] cursor-pointer hover:scale-110 transition-all duration-500 z-50" @click="menuOpen = !menuOpen" />
    <div :class="menuOpen ? 'overflow-hidden fixed top-0 right-0 w-[30vw] h-screen bg-angry text-white text-center z-40 transition-all duration-[700ms]' : 'overflow-hidden fixed top-0 right-0 w-[30vw] h-0 bg-angry text-white text-center z-40 transition-all duration-300'">
      <RouterLink v-for="(link, i) in navLinks" :key="i" :to="link.path" class="block transition-all duration-300 opacity-30 hover:opacity-100 hover:scale-105 uppercase mt-8 first-of-type:mt-[120px]" @click="menuOpen = !menuOpen">
        {{ link.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  transition: opacity 0.6s ease-in-out;
  opacity: 100% !important;
}
</style>
