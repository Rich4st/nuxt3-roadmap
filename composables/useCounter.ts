import { ref } from 'vue'

export const useRouter = () => {
  const count = ref(0)

  const increment = () => {
    count.value += 1
  }

  return {
    count,
    increment,
  }
}