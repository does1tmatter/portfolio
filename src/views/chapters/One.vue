<script setup>
import { ref } from 'vue'
import { useParallax } from '@vueuse/core'
import { HomeIcon } from '@heroicons/vue/outline'
import SickButton from '@/components/SickButton.vue'
import bgImage from '@/assets/chapter1/page.jpg'
import tab1 from '@/assets/chapter1/tab1.jpg'
import tab2 from '@/assets/chapter1/tab2.jpg'

const parallaxCont = ref(null)

const { tilt, roll } = useParallax(parallaxCont)
</script>

<template>
  <div ref="parallaxCont" class="mt-24 flex flex-col lg:flex-row gap-[50px] pb-16">
    <!-- <div class="min-h-[50px] min-w-[550px] bg-angry rounded-[50px]">
    </div> -->
    <div class="min-h-[700px] flex-1 sm:max-w-[550px] rounded-[50px] bg-cover bg-center shadow-xl shadow-orange-500/[.1]" :style="{
      backgroundImage: `url( ${bgImage} )`,
      transform: `translateY(${roll * 1}px) translateX(${tilt * 1}px)`
    }">
    </div>
    <div class="text-left flex-1">
      <div>
        <div class="font-extralight text-[40px] leading-[0.6] tracking-[-0.12em] uppercase pl-12">
          chapter
        </div>
        <div class="font-black text-[96px] leading-none -mt-[10px] uppercase">
          one
        </div>
      </div>
      <div class="mt-[25px]">
        <div class="font-extralight text-[40px] leading-none uppercase text-right">
          AWESOMEAPPLES
        </div>
        <div class="mt-[30px] text-[24px] font-extralight text-justify">
          AwesomeApples create spaces for artists (and those who appreciate art) to connect in the world of NFTs & Web3.
          AwesomeApples believe there's a place for everyone in Web3, and here to help you find yours - and cheer for you along the way.
        </div>
        <div class="mt-[50px]">
          <a href="http://awesomeapples.io" target="_blank">
            <SickButton class="bg-blueone shadow-blueone/[.2] text-white">
              <template #icon>
                <HomeIcon class="w-3 inline" />
              </template>
              <template #text>
                awesomeapples.io
              </template>
            </SickButton>
          </a>
        </div>
        <div class="flex gap-[20px] md:gap-[50px]">
          <div class="flex-1 min-h-[350px] rounded-[25px] mt-[97px] shadow-xl shadow-orange-500/[.1] bg-cover bg-center" :style="{
            backgroundImage: `url( ${tab1} )`,
            transform: `translateY(${roll * 2}px) translateX(${tilt * 2}px)`
          }">
          </div>
          <div class="flex-1 min-h-[350px] rounded-[25px] mt-[97px] shadow-xl shadow-orange-500/[.1] bg-cover bg-center" :style="{
            backgroundImage: `url( ${tab2} )`,
            transform: `translateY(${roll * 2}px) translateX(${tilt * 2}px)`
          }">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>