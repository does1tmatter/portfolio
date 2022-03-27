<script setup>
import { ref, computed } from 'vue'
import { useParallax, useScroll } from '@vueuse/core'
import { HomeIcon } from '@heroicons/vue/outline'
import SickButton from '@/components/SickButton.vue'
import bgImage from '@/assets/chapter1/page.jpg'
import tab1 from '@/assets/chapter1/tab1.jpg'
import tab2 from '@/assets/chapter1/tab2.jpg'

const parallaxCont = ref(null)
const scrollCont = ref(window)

const { tilt, roll } = useParallax(parallaxCont)
const scroll = useScroll(scrollCont)

const makeScrollingFunAgain = computed(() => scroll.y.value < 200 ? scroll.y.value / 5 : 40)
</script>

<template>
  <div ref="parallaxCont" class="mt-24 flex flex-col lg:flex-row gap-[50px] pb-16">
    <!-- <div class="min-h-[50px] min-w-[550px] bg-angry rounded-[50px]">
    </div> -->
    <div class="min-h-[700px] flex-1 sm:max-w-[550px] rounded-[50px] bg-cover bg-center shadow-xl shadow-orange-500/[.1]" :style="{
      backgroundImage: `url( ${bgImage} )`,
      transform: `translateY(-${makeScrollingFunAgain * 3}px)`
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
        <div class="font-extralight text-[40px] leading-none uppercase text-right" :style="{
          transform: `translateY(-${makeScrollingFunAgain}px)`
        }">
          AWESOMEAPPLES
        </div>
        <div class="mt-[30px] text-[24px] font-extralight text-justify" :style="{
          transform: `translateY(-${makeScrollingFunAgain / 4}px)`
        }">
          AwesomeApples create spaces for artists (and those who appreciate art) to connect in the world of NFTs & Web3.
          AwesomeApples believe there's a place for everyone in Web3, and here to help you find yours - and cheer for you along the way.
        </div>
        <div class="mt-[50px]" :style="{
          transform: `translateY(-${makeScrollingFunAgain}px)`
        }">
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
        <div class="flex gap-[20px] md:gap-[50px]" :style="{
          transform: `translateY(-${makeScrollingFunAgain * 2}px)`
        }">
          <div class="flex-1 min-h-[350px] rounded-[25px] mt-[97px] shadow-xl shadow-orange-500/[.1] bg-cover bg-center" :style="{
            backgroundImage: `url( ${tab1} )`
          }">
          </div>
          <div class="flex-1 min-h-[350px] rounded-[25px] mt-[97px] shadow-xl shadow-orange-500/[.1] bg-cover bg-center" :style="{
            backgroundImage: `url( ${tab2} )`
          }">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>