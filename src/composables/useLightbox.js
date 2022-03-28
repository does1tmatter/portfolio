import { ref, computed } from 'vue'
import { useScrollLock } from '@vueuse/core'
import Lightbox from '@/components/Lightbox.vue'

export function useLightbox () {

  const isLocked = useScrollLock(document.body)

  const activeImage = ref(null)
  const show = computed(() => Boolean(activeImage.value))

  const openImage = (image) => {
    activeImage.value = image
    isLocked.value = true
  }

  const closeImage = () => {
    activeImage.value = null
    isLocked.value = false
  }

  return {
    Lightbox,
    show,
    activeImage,
    openImage,
    closeImage
  }
}