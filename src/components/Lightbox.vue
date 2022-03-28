<template>
  <div :class="`fixed top-0 left-0 z-50 w-screen h-screen bg-skywhite bg-opacity-40 backdrop-blur-lg flex justify-center items-center p-8 lg:p-16`" @click.self="$emit('hide-lightbox', false)">
    <div class="bg-white rounded-[20px] md:rounded-[50px] overflow-hidden flex flex-wrap 2xl:flex-nowrap items-center max-w-[900px] 2xl:max-w-none shadow-2xl shadow-gray-500/[.1]">
      <img :src="image" alt="" class="h-full max-h-[90vh] lg:max-w-[70vw] w-full max-w-screen">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    }
  }
}
</script>