<script setup>
import { ref, computed } from 'vue'
import { useLightbox } from '@/composables/useLightbox'
import { useScrolling } from '@/composables/useScrolling'
import { AtSymbolIcon, HashtagIcon, CameraIcon } from '@heroicons/vue/solid'
import SickButton from '@/components/SickButton.vue'
import MySocials from '@/components/MySocials.vue'
import bgImage from '@/assets/about.jpg'

const { Lightbox, show, activeImage, openImage, closeImage } = useLightbox()
const { scrollerLimited, scrollerFast } = useScrolling()

const email = ref(null)
const subject = ref(null)
const message = ref(null)

</script>

<template>
  <div>
    <div class="lg:mt-24 block lg:flex gap-[100px] justify-around">
      <div class="min-h-[850px] min-w-[50px] sm:w-full max-w-[70wv] sm:max-w-[550px] rounded-[30px] md:rounded-[50px] shadow-xl shadow-[#1E1E26]/[.2] relative overflow-hidden order-2 cursor-pointer" :style="{
        transform: `translateY(-${scrollerLimited * 3}px)`
      }">
        <div class="min-h-[1200px] min-w-[1480px] bg-cover bg-center absolute top-0 -left-[125px]" :style="{
          backgroundImage: `url( ${bgImage} )`,
          transform: `translateX(-${scrollerFast + 100}px) translateY(-105px)`
        }" @click="openImage(bgImage)">
        </div>
      </div>
      <div class="flex-1 text-right order-1">
        <div>
          <div class="font-black text-[14vw] md:text-[96px] leading-none tracking-[-0.12em] uppercase">
            about
          </div>
          <div class="font-extralight text-[8vw] md:text-[40px] leading-none -mt-[10px] uppercase">
            me
          </div>
          <p class="text-[24px] font-extralight text-justify mt-[100px]" :style="{
            transform: `translateY(-${scrollerLimited * 2}px)`
          }">
            Vivamus sem lacus, lacinia vel lacinia non, tincidunt quis eros. Morbi tempor sapien et metus aliquam, eu hendrerit ipsum mollis. Cras eu leo vel magna vestibulum vestibulum. Duis purus enim, sagittis nec dapibus quis, lacinia nec magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel fermentum lorem
          </p>
        </div>
      </div>
    </div>
    <div class="mt-24 block lg:flex flex-nowrap gap-0 lg:gap-[170px] justify-around" :style="{
      transform: `translateY(-${scrollerLimited * 2}px)`
    }">
      <div class="text-right mb-16">
        <div class="font-black text-[14vw] md:text-[96px] leading-none tracking-[-0.12em] uppercase">
          contact
        </div>
        <div class="font-extralight text-[8vw] md:text-[40px] leading-none -mt-[10px] uppercase">
          me
        </div>
        <MySocials class="mt-[50px] lg:mt-[100px]" />
      </div>
      <div class="max-w-[420px] mx-auto w-full">
        <input v-model="email" type="email" placeholder="youremail@gmail.com" class="bg-angry text-white mt-4 block p-[14px] rounded-[15px] w-full placeholder:text-white">
        <input v-model="subject" type="text" placeholder="Subject is about..." class="bg-angry text-white mt-4 block p-[14px] rounded-[15px] w-full placeholder:text-white">
        <div class="relative">
          <textarea v-model="message" type="text" placeholder="Your message.." class="bg-angry text-white mt-4 flex p-[14px] rounded-[15px] w-full placeholder:text-white min-h-[200px]">
          </textarea>
          <button class="absolute -bottom-1 -right-1 text-white p-[12px] rounded-[15px] bg-green-500">
            send
          </button>
        </div>
      </div>
    </div>
    <transition name="slide-box">
      <Lightbox v-if="show" :image="activeImage" @hide-lightbox="closeImage()" />
    </transition>
  </div>
</template>