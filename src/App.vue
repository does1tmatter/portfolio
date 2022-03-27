<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import DesktopNavigation from '@/components/DesktopNavigation.vue'
import Arrow from '@/components/Arrow.vue'

const route = useRoute()

const routeProps = computed(() => route?.matched[0]?.props.default || null)

</script>

<template>
  <div class="flex items-center gap-[150px] min-h-screen px-6">
    <div class="fixed top-0 left-[5%] min-w-[80px] h-screen hidden 2xl:flex items-center justify-end">
        <RouterLink :to="routeProps?.prev ? routeProps.prev : ''">
          <button class="transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-10 hover:scale-110 disabled:hover:scale-100" :disabled="!routeProps?.prev">
            <Arrow class="rotate-180" />
          </button>
        </RouterLink>
    </div>
    <div class="self-start">
      <DesktopNavigation />
      <RouterView v-slot="{ Component }" class="w-full">
        <Transition name="slide-fade">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <div class="fixed top-0 right-[5%] min-w-[80px] h-screen hidden 2xl:flex items-center">
        <RouterLink :to="routeProps?.next || ''">
          <button class="transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-10 hover:scale-110 disabled:hover:scale-100" :disabled="!routeProps?.next">
            <Arrow />
          </button>
        </RouterLink>
    </div>
  </div>
</template>

<style>
@import '@/assets/base.css';
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
  transition-delay: 0.3s;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from {
  transform: translateY(200px);
}
.slide-fade-leave-to {
  transform: translateY(-200px);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

@media only screen and (min-width: 1536px) {
  .slide-fade-enter-from {
    transform: translateX(-200px);
  }
  .slide-fade-leave-to {
    transform: translateX(200px);
  }
}
</style>
