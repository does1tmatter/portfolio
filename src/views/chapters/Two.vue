<script setup>
import { computed } from 'vue'
import { useLightbox } from '@/composables/useLightbox'
import { useScrolling } from '@/composables/useScrolling'
import { HomeIcon } from '@heroicons/vue/outline'
import SickButton from '@/components/SickButton.vue'
import bgImage from '@/assets/chapters/2/page.jpg'
import tab1 from '@/assets/chapters/2/tab1.jpg'
import tab2 from '@/assets/chapters/2/tab2.jpg'

const { scrollerLimited, scrollerFast } = useScrolling()
const { Lightbox, show, activeImage, openImage, closeImage } = useLightbox()

</script>

<template>
  <div class="lg:mt-24 flex flex-col lg:flex-row gap-[50px]">
    <div class="min-h-[700px] flex-1 sm:max-w-[550px] rounded-[50px] shadow-xl shadow-orange-500/[.1] relative bg-white overflow-hidden cursor-pointer" :style="{
      transform: `translateY(-${scrollerLimited * 3}px)`
    }">
      <div class="min-h-[1200px] min-w-[1200px] bg-cover bg-center absolute -top-[100px] -left-[170px] sm:-left-[125px]" :style="{
        backgroundImage: `url( ${bgImage} )`,
        transform: `translateX(-${scrollerFast}px) translateY(-40px)`
      }" @click="openImage(bgImage)">
      </div>
    </div>
    <div class="text-left flex-1">
      <div class="max-w-max">
        <div class="font-extralight text-[40px] leading-[0.6] tracking-[-0.12em] uppercase text-right pr-2">
          chapter
        </div>
        <div class="font-black text-[96px] leading-none -mt-[10px] uppercase">
          two
        </div>
      </div>
      <div class="mt-[25px]">
        <div class="font-extralight text-[40px] leading-none uppercase text-right" :style="{
          transform: `translateY(-${scrollerLimited}px)`
        }">
          AA MARKETPLACE
        </div>
        <div class="mt-[30px] text-[24px] font-extralight text-justify" :style="{
          transform: `translateY(-${scrollerLimited / 4}px)`
        }">
          AwesomeApples create spaces for artists (and those who appreciate art) to connect in the world of NFTs & Web3.
          AwesomeApples believe there's a place for everyone in Web3, and here to help you find yours - and cheer for you along the way.
        </div>
        <div class="mt-[50px]" :style="{
          transform: `translateY(-${scrollerLimited}px)`
        }">
          <a href="http://market.awesomeapples.io" target="_blank">
            <SickButton class="bg-blueone shadow-blueone/[.2] text-white">
              <template #icon>
                <HomeIcon class="w-3 inline" />
              </template>
              <template #text>
                market.awesomeapples.io
              </template>
            </SickButton>
          </a>
        </div>
        <div class="flex gap-[20px] md:gap-[50px] mt-[97px]" :style="{
          transform: `translateY(-${scrollerLimited * 3}px)`
        }">
          <div class="flex-1 relative min-h-[350px] rounded-[25px] bg-white shadow-xl shadow-orange-500/[.1] overflow-hidden cursor-pointer">
            <div class="w-full min-h-[500px] bg-cover bg-center absolute top-0 left-0" :style="{
              backgroundImage: `url( ${tab1} )`,
              transform: `translateY(-${scrollerLimited * 2}px)`
            }" @click="openImage(tab1)">
            </div>
          </div>
          <div class="flex-1 relative min-h-[350px] rounded-[25px] bg-white shadow-xl shadow-orange-500/[.1] overflow-hidden cursor-pointer">
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