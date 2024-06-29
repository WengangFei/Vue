import { ref } from 'vue'

export const newCount = ref(88888)
//global state
const globalCount = ref(500)

export function useCount() {
  //local state
  const localCount = ref(100)
  const incrementLocal = () => {
    localCount.value += 100
  }

  const incrementGlobal = () => {
    globalCount.value += 10
  }

  return {
    globalCount,
    localCount,
    incrementLocal,
    incrementGlobal
  }
}
