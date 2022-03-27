<script setup>
import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { HomeIcon } from '@heroicons/vue/outline'
import SickButton from '@/components/SickButton.vue'
import bgImage from '@/assets/chapter1/page.jpg'
import tab1 from '@/assets/chapter1/tab1.jpg'
import tab2 from '@/assets/chapter1/tab2.jpg'

const scroll = useWindowScroll()
const makeScrollingFunAgain = computed(() => scroll.y.value < 300 ? scroll.y.value / 10 : 30)
</script>

<template>
  <div class="mt-24 flex flex-col lg:flex-row gap-[50px]">
    <!-- <div class="min-h-[50px] min-w-[550px] bg-angry rounded-[50px]">
    </div> -->
    <div class="min-h-[700px] flex-1 sm:max-w-[550px] rounded-[50px] shadow-xl shadow-orange-500/[.1] relative bg-white overflow-hidden" :style="{
      transform: `translateY(-${makeScrollingFunAgain * 3}px)`
    }">
      <div class="min-h-[1000px] min-w-[800px] bg-cover bg-center absolute top-[50px] -left-[170px] sm:-left-[100px]" :style="{
        backgroundImage: `url( ${bgImage} )`,
        transform: `translateY(-${makeScrollingFunAgain}px)`
      }">
      </div>
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
        <div class="flex gap-[20px] md:gap-[50px] mt-[97px]" :style="{
          transform: `translateY(-${makeScrollingFunAgain * 3}px)`
        }">
          <div class="flex-1 relative min-h-[350px] rounded-[25px] bg-white shadow-xl shadow-orange-500/[.1] overflow-hidden">
            <div class="w-full min-h-[500px] bg-cover bg-center absolute top-0 left-0" :style="{
              backgroundImage: `url( ${tab1} )`,
              transform: `translateY(-${makeScrollingFunAgain * 2}px)`
            }">
            </div>
          </div>
          <div class="flex-1 relative min-h-[350px] rounded-[25px] bg-white shadow-xl shadow-orange-500/[.1] overflow-hidden">
            <div class="min-h-[500px] w-full bg-cover bg-center absolute top-[50px] left-0" :style="{
              backgroundImage: `url( ${tab2} )`,
              transform: `translateY(-${makeScrollingFunAgain}px)`
            }">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>