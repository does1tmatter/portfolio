import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'


export function useScrolling () {

  const { y } = useWindowScroll()
  const scrollerLimited = computed(() => y.value < 300 ? y.value / 10 : 30)
  const scrollerFast = computed(() => y.value / 2 || 0)

  return {
    scrollerLimited,
    scrollerFast
  }
}