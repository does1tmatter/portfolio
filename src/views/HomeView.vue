<script setup>
import { ref, computed } from 'vue'
import { useScroll } from '@vueuse/core'

const scrollCont = ref(window)
const scroll = useScroll(scrollCont)

const makeScrollingFunAgain = computed(() => scroll.y.value < 200 ? scroll.y.value / 5 : 40)
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-[50px] mt-[150px]">
      <div class="min-w-[550px] min-h-[350px] bg-angry rounded-[50px] hidden lg:block">
      </div>
      <div class="p-8 flex-1 text-center max-w-[400px] mx-auto lg:max-w-full lg:mx-0 lg:text-left">
        <div class="text-[48px] font-extralight" :style="{
          transform: `translateY(-${makeScrollingFunAgain * 2}px)`
        }">
          Welcome
        </div>
        <div class="font-extralight text-[24px] mt-[50px] lg:mt-0" :style="{
          transform: `translateY(-${makeScrollingFunAgain}px)`
        }">
          Pellentesque tristique magna tortor, tincidunt luctus orci viverra ac.
        </div>
      </div>
    </div>
    <div class="w-full max-w-[1000px] mt-[120px] min-h-[300px] bg-angry rounded-[50px]" :style="{
      transform: `translateY(-${makeScrollingFunAgain * 2}px)`
    }">
    </div>
  </div>
</template>
