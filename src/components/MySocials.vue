<script setup>
import { ref } from 'vue'
import { AtSymbolIcon, HashtagIcon, CameraIcon, CheckCircleIcon } from '@heroicons/vue/solid'
import SickButton from '@/components/SickButton.vue'

const setClipboard = (_text) => {
  const type = 'text/plain'
  const blob = new Blob([_text], { type })
  const data = [new ClipboardItem({ [type]: blob})]
  navigator.clipboard.write(data)
    .then(() => {
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    })
}

const copied = ref(false)
const discordId = 'angry bud#1335'

</script>

<template>
  <div class="mx-auto max-w-max md:max-w-none md:mx-0">
    <Transition name="slide-button">
      <SickButton v-if="copied" class="bg-green-500 shadow-green-500/[.2] text-white cursor-progress">
        <template #icon>
          <CheckCircleIcon class="w-3 inline"/>
        </template>
        <template #text>
            copied!
        </template>
      </SickButton>
      <SickButton v-else class="bg-[#5865F2] shadow-[#5865F2]/[.2] text-white" @click="setClipboard(discordId)">
        <template #icon>
          <HashtagIcon class="w-3 inline"/>
        </template>
        <template #text>
          discord
        </template>
      </SickButton>
    </Transition>
    <a href="https://instagram.com" target="_blank">
      <SickButton class="bg-white shadow-black/[.05] border border-angry text-angry ml-4">
        <template #icon>
          <CameraIcon class="w-3 inline"/>
        </template>
        <template #text>
          instagram
        </template>
      </SickButton>
    </a>
    <a href="https://twitter.com" target="_blank">
      <SickButton class="bg-blueone shadow-blueone/[.2] text-white ml-4">
        <template #icon>
          <AtSymbolIcon class="w-3 inline"/>
        </template>
        <template #text>
          twitter
        </template>
      </SickButton>
    </a>
  </div>
</template>