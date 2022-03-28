<template>
  <transition name="fade">
    <div class="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-md flex justify-center items-center p-8 lg:p-0" @click.self="$emit('hide-lightbox', false)">
      <div class="bg-white rounded-2xl overflow-hidden flex flex-wrap 2xl:flex-nowrap items-center max-w-[900px] 2xl:max-w-none">
        <img :src="image" alt="" class="h-full max-h-[80vh] w-full max-w-screen">
      </div>
    </div>
  </transition>
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
