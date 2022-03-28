<script setup>
import { computed } from 'vue'
import { useLightbox } from '@/composables/useLightbox'
import { useScrolling } from '@/composables/useScrolling'
import { HomeIcon } from '@heroicons/vue/outline'
import SickButton from '@/components/SickButton.vue'
import bgImage from '@/assets/chapters/3/page.jpg'
import tab1 from '@/assets/chapters/3/tab1.jpg'
import tab2 from '@/assets/chapters/3/tab2.jpg'

const { scrollerLimited, scrollerFast } = useScrolling()
const { Lightbox, show, activeImage, openImage, closeImage } = useLightbox()

</script>

<template>
  <div class="lg:mt-24 flex flex-col lg:flex-row gap-[50px]">
    <div class="min-h-[700px] flex-1 sm:max-w-[550px] rounded-[50px] shadow-xl shadow-[#D53D5F]/[.2] relative bg-[#E3DEDC] overflow-hidden cursor-pointer" :style="{
      transform: `translateY(-${scrollerLimited * 3}px)`
    }">
      <div class="min-h-[1200px] min-w-[800px] bg-cover bg-center absolute -top-[100px] -left-[170px] sm:-left-[125px]" :style="{
        backgroundImage: `url( ${bgImage} )`,
        transform: `translateY(-${scrollerFast}px) translateX(35px)`
      }" @click="openImage(bgImage)">
      </div>
    </div>
    <div class="text-left flex-1">
      <div class="max-w-max">
        <div class="font-extralight text-[6vw] pb-1 md:pb-0 md:text-[40px] leading-[0.6] tracking-[-0.12em] uppercase text-right pr-2">
          chapter
        </div>
        <div class="font-black text-[14vw] md:text-[96px] leading-none -mt-[10px] uppercase">
          three
        </div>
      </div>
      <div class="mt-[25px]">
        <div class="font-extralight text-[8vw] md:text-[40px] leading-none uppercase text-right" :style="{
          transform: `translateY(-${scrollerLimited}px)`
        }">
          LOWEFFORTNOUNS
        </div>
        <div class="mt-[80px] text-[24px] font-extralight text-justify" :style="{
          transform: `translateY(-${scrollerLimited / 4}px)`
        }">
          Low Effort Nouns are 5635 digital characters, each with hand drawn characteristics born on the blockchain. Each of the traits were made in one minute each without care.
        </div>
        <div class="mt-[50px]" :style="{
          transform: `translateY(-${scrollerLimited}px)`
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
        <div class="md:flex md:gap-[50px] mt-[97px]" :style="{
          transform: `translateY(-${scrollerLimited * 3}px)`
        }">
          <div class="flex-1 relative min-h-[350px] rounded-[25px] bg-[#E3DEDC] shadow-xl shadow-[#D53D5F]/[.2] overflow-hidden cursor-pointer">
            <div class="w-full min-h-[500px] bg-cover bg-center absolute top-0 left-0" :style="{
              backgroundImage: `url( ${tab1} )`,
              transform: `translateY(-${scrollerLimited * 2}px)`
            }" @click="openImage(tab1)">
            </div>
          </div>
          <div class="flex-1 mt-[70px] md:mt-0 relative min-h-[350px] rounded-[25px] bg-[#E3DEDC] shadow-xl shadow-[#D53D5F]/[.2] overflow-hidden cursor-pointer">
            <div class="min-h-[500px] w-full bg-cover bg-center absolute top-0 left-0" :style="{
              backgroundImage: `url( ${tab2} )`,
              transform: `translateY(-${scrollerLimited}px)`
            }" @click="openImage(tab2)">
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide-box">
      <Lightbox v-if="show" :image="activeImage" @hide-lightbox="closeImage()" />
    </transition>
  </div>
</template>
