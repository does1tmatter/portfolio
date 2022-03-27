<script setup>
import { ref, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { AtSymbolIcon, HashtagIcon, CameraIcon } from '@heroicons/vue/solid'
import SickButton from '@/components/SickButton.vue'
import MySocials from '@/components/MySocials.vue'
import bgImage from '@/assets/about.jpg'

const email = ref(null)
const subject = ref(null)
const message = ref(null)

const sampleText = 'Hello mister. My name is what so ever and I want you to invite to work at what so ever. You know just sample text to keep picture as a whole.'

const scroll = useWindowScroll()

const makeScrollingFunAgain = computed(() => scroll.y.value < 200 ? scroll.y.value / 5 : 40)
const specialScroll = computed(() => scroll.y.value / 5 || 0)
</script>

<template>
  <div>
    <div class="mt-24 flex flex-col gap-[30px] lg:flex-row lg:gap-[100px] justify-around">
      <div class="flex-1 text-right order-2 lg:order-1">
        <div>
          <div class="font-black text-[96px] leading-none tracking-[-0.12em] uppercase">
            about
          </div>
          <div class="font-extralight text-[40px] leading-none -mt-[10px] uppercase">
            me
          </div>
          <p class="text-[24px] font-extralight text-justify mt-[100px]" :style="{
            transform: `translateY(-${makeScrollingFunAgain * 2}px)`
          }">
            Vivamus sem lacus, lacinia vel lacinia non, tincidunt quis eros. Morbi tempor sapien et metus aliquam, eu hendrerit ipsum mollis. Cras eu leo vel magna vestibulum vestibulum. Duis purus enim, sagittis nec dapibus quis, lacinia nec magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel fermentum lorem
          </p>
        </div>
      </div>
      <div class="flex-1 max-w-[500px] min-h-[700px] rounded-[50px] overflow-hidden order-1 lg:order-2 shadow-xl shadow-angry/[.2]">
        <div class="min-w-[1000px] min-h-[1200px] bg-cover bg-center" :style="{
          backgroundImage: `url( ${bgImage} )`,
          transform: `translateX(-${specialScroll}px)`
        }">
        </div>
      </div>
    </div>
    <div class="mt-24 flex flex-wrap lg:flex-nowrap gap-0 md:gap-[20px] lg:gap-[170px] justify-around" :style="{
      transform: `translateY(-${makeScrollingFunAgain * 2}px)`
    }">
      <div class="text-right mb-16">
        <div class="font-black text-[96px] leading-none tracking-[-0.12em] uppercase">
          contact
        </div>
        <div class="font-extralight text-[40px] leading-none -mt-[10px] uppercase">
          me
        </div>
        <MySocials class="mt-[50px] lg:mt-[100px]" />
      </div>
      <div class="max-w-[420px] w-full">
        <input v-model="email" type="email" placeholder="youremail@gmail.com" class="bg-angry text-white mt-4 block p-[14px] rounded-[15px] w-full placeholder:text-white">
        <input v-model="subject" type="text" placeholder="Subject is about..." class="bg-angry text-white mt-4 block p-[14px] rounded-[15px] w-full placeholder:text-white">
        <div class="relative">
          <textarea v-model="message" type="text" :placeholder="sampleText" class="bg-angry text-white mt-4 flex p-[14px] rounded-[15px] w-full placeholder:text-white min-h-[200px]">
          </textarea>
          <button class="absolute -bottom-1 -right-1 text-white p-[12px] rounded-[15px] bg-green-500">
            send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>