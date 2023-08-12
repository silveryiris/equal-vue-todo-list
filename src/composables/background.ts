import { ref, computed } from "vue"

const gradientColors = [
  { c1: "#722d48", c2: "#80ddd1" },
  { c1: "#b5ba72", c2: "#372674" },
  { c1: "#72798a", c2: "#e96348" },
  { c1: "#41B17E", c2: "#CA19EF" },
  { c1: "#23EC78", c2: "#9A0BEA" },
  { c1: "#C7C9DE", c2: "#E85CD2" },
]

const getRandomDegree = (limit = 360) => {
  return Math.floor(Math.random() * limit)
}

const getRandomColorData = () => {
  return gradientColors[Math.floor(Math.random() * gradientColors.length)]
}

const degree = ref(getRandomDegree())

const colors = ref(getRandomColorData())

const changeBackground = () => {
  colors.value = getRandomColorData()
  degree.value = getRandomDegree()
}

const getGradientBackground = computed(() => {
  return `background: linear-gradient(${degree.value}deg,${colors.value.c1},${colors.value.c2})`
})

export const useGradientBackground = () => {
  return {
    getRandomDegree,
    getRandomColorData,
    colors,
    degree,
    changeBackground,
    getGradientBackground,
  }
}
