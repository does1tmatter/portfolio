import { ref, computed } from 'vue'
import Lightbox from '@/components/Lightbox.vue'

export function useLightbox () {

  const activeImage = ref(null)
  const show = computed(() => Boolean(activeImage.value))

  const openImage = (image) => activeImage.value = image

  const closeImage = () => activeImage.value = null

  return {
    Lightbox,
    show,
    activeImage,
    openImage,
    closeImage
  }
}