<script setup>
import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { HomeIcon } from '@heroicons/vue/outline'
import SickButton from '@/components/SickButton.vue'
import bgImage from '@/assets/chapters/3/page.jpg'
import tab1 from '@/assets/chapters/3/tab1.jpg'
import tab2 from '@/assets/chapters/3/tab2.jpg'

const scroll = useWindowScroll()
const makeScrollingFunAgain = computed(() => scroll.y.value < 300 ? scroll.y.value / 10 : 30)
const specialScroll = computed(() => scroll.y.value / 2 || 0)
</script>

<template>
  <div class="mt-24 flex flex-col lg:flex-row gap-[50px]">
    <div class="min-h-[700px] flex-1 sm:max-w-[550px] rounded-[50px] shadow-xl shadow-[#D53D5F]/[.2] relative bg-[#E3DEDC] overflow-hidden" :style="{
      transform: `translateY(-${makeScrollingFunAgain * 3}px)`
    }">
      <div class="min-h-[1200px] min-w-[800px] bg-cover bg-center absolute -top-[100px] -left-[170px] sm:-left-[125px]" :style="{
        backgroundImage: `url( ${bgImage} )`,
        transform: `translateY(-${specialScroll}px) translateX(35px)`
      }">
      </div>
    </div>
    <div class="text-left flex-1">
      <div class="max-w-max">
        <div class="font-extralight text-[40px] leading-[0.6] tracking-[-0.12em] uppercase text-right pr-2">
          chapter
        </div>
        <div class="font-black text-[96px] leading-none -mt-[10px] uppercase">
          three
        </div>
      </div>
      <div class="mt-[25px]">
        <div class="font-extralight text-[40px] leading-none uppercase text-right" :style="{
          transform: `translateY(-${makeScrollingFunAgain}px)`
        }">
          LOWEFFORTNOUNS
        </div>
        <div class="mt-[80px] text-[24px] font-extralight text-justify" :style="{
          transform: `translateY(-${makeScrollingFunAgain / 4}px)`
        }">
          Low Effort Nouns are 5635 digital characters, each with hand drawn characteristics born on the blockchain. Each of the traits were made in one minute each without care.
        </div>
        <div class="mt-[50px]" :style="{
          transform: `translateY(-${makeScrollingFunAgain}px)`
        }">
          <a href="http://loweffortnouns.com" target="_blank">
            <SickButton class="bg-blueone shadow-blueone/[.2] text-white">
              <template #icon>
                <HomeIcon class="w-3 inline" />
              </template>
              <template #text>
                loweffortnouns.com
              </template>
            </SickButton>
          </a>
        </div>
        <div class="flex gap-[20px] md:gap-[50px] mt-[97px]" :style="{
          transform: `translateY(-${makeScrollingFunAgain * 3}px)`
        }">
          <div class="flex-1 relative min-h-[350px] rounded-[25px] bg-[#E3DEDC] shadow-xl shadow-[#D53D5F]/[.2] overflow-hidden">
            <div class="w-full min-h-[500px] bg-cover bg-center absolute top-0 left-0" :style="{
              backgroundImage: `url( ${tab1} )`,
              transform: `translateY(-${makeScrollingFunAgain * 2}px)`
            }">
            </div>
          </div>
          <div class="flex-1 relative min-h-[350px] rounded-[25px] bg-[#E3DEDC] shadow-xl shadow-[#D53D5F]/[.2] overflow-hidden">
            <div class="min-h-[500px] w-full bg-cover bg-center absolute top-0 left-0" :style="{
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