<script setup>
import { computed } from 'vue'
import { useScrolling } from '@/composables/useScrolling'
import tab1 from '@/assets/chapters/1/page.jpg'
import tab2 from '@/assets/about.jpg'

const { scrollerLimited } = useScrolling()
</script>

<template>
  <div class="pb-16 w-full">
    <div class="flex flex-wrap gap-[50px] lg:mt-[150px]">
      <div class="min-w-[550px] min-h-[350px] rounded-[50px] hidden lg:block bg-cover bg-center shadow-xl shadow-[#FF5A10]/[.2]" :style="{
        backgroundImage: `url( ${tab1} )`
      }">
      </div>
      <div class="p-8 flex-1 text-center max-w-[400px] mx-auto lg:max-w-full lg:mx-0 lg:text-left">
        <div class="text-[48px] font-extralight" :style="{
          transform: `translateY(-${scrollerLimited * 2}px)`
        }">
          Welcome
        </div>
        <div class="font-extralight text-[24px] mt-[50px] lg:mt-0" :style="{
          transform: `translateY(-${scrollerLimited}px)`
        }">
          Pellentesque tristique magna tortor, tincidunt luctus orci viverra ac.
        </div>
      </div>
    </div>
    <div class="w-full max-w-[1000px] mt-[120px] max-h-[300px] rounded-[50px] overflow-hidden shadow-xl shadow-black/[.2] ml-auto" :style="{
      transform: `translateY(-${scrollerLimited * 2}px)`
    }">
      <div class="w-full max-w-[1000px] min-h-[500px] bg-cover bg-center" :style="{
        backgroundImage: `url( ${tab2} )`,
        transform: `translateY(-${scrollerLimited * 2}px)`,
        backgroundPositionY: `-${scrollerLimited * 5} px`
      }">
      </div>
    </div>
  </div>
</template>
