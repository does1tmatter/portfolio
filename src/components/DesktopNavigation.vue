<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const { getRoutes } = useRouter()

const navLinks = getRoutes()
</script>

<template>
  <div class="hidden lg:flex h-[102px] items-end">
    <div class="inline-block font-black text-[32px] cursor-pointer hover:text-blueone transition-all duration-500 select-none">
      <RouterLink to="/">
        angrybud
      </RouterLink>
    </div>
    <div class="self-start pt-6 flex-1 text-right pr-[10%]">
      <RouterLink v-for="(link, i) in navLinks" :key="i" :to="link.path" class="opacity-30 hover:opacity-100 uppercase ml-[50px] first-of-type:ml-0">
        {{ link.name }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  transition: opacity 0.6s ease-in-out;
  opacity: 100% !important;
  pointer-events: none !important;
}
</style>
