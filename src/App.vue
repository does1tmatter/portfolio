<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import DesktopNavigation from '@/components/DesktopNavigation.vue'
import MobileNavigation from '@/components/MobileNavigation.vue'
import Arrow from '@/components/Arrow.vue'

const route = useRoute()

const routeProps = computed(() => route?.matched[0]?.props.default || null)

</script>

<template>
  <div class="flex items-center gap-[150px] min-h-screen px-6 pt-[100px] lg:pt-0">
    <div class="fixed top-0 left-[5%] min-w-[80px] h-screen hidden 2xl:flex items-center justify-end">
        <RouterLink :to="routeProps?.prev ? routeProps.prev : ''" :class="!routeProps?.prev ? 'pointer-events-none' : ''">
          <button class="transition-all duration-300 disabled:opacity-10 hover:scale-110 disabled:hover:scale-100" :disabled="!routeProps?.prev">
            <Arrow class="rotate-180" />
          </button>
        </RouterLink>
    </div>
    <div class="self-start flex-1">
      <MobileNavigation />
      <DesktopNavigation />
      <RouterView v-slot="{ Component }">
        <Transition name="slide-fade" mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <div class="fixed top-0 right-[5%] min-w-[80px] h-screen hidden 2xl:flex items-center">
        <RouterLink :to="routeProps?.next ? routeProps.next : ''" :class="!routeProps?.next ? 'pointer-events-none' : ''">
          <button class="transition-all duration-300 disabled:opacity-10 hover:scale-110 disabled:hover:scale-100" :disabled="!routeProps?.next">
            <Arrow />
          </button>
        </RouterLink>
    </div>
  </div>
</template>

<style>
@import '@/assets/css/base.css';
@import '@/assets/css/transitions.css';
</style>
