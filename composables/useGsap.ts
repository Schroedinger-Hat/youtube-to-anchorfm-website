export const useGsap = () => {
  const nuxtApp = useNuxtApp()

  return {
    gsap: nuxtApp.$gsap,
  }
}
