<script setup lang="ts">
import SpotifyLogo from '~/assets/svg/spotify-logo.svg'
import YoutubeLogo from '~/assets/svg/youtube-logo.svg'

const { gsap } = useGsap()
let tl

const animateLogos = () => {
  tl = gsap.timeline()
  const animations = [
    { selector: '.logo-yt', properties: { opacity: 0, duration: 2.5 } },
    { selector: '.logo-sp', properties: { opacity: 0, duration: 2.5 }, position: '<' },
    { selector: '.logo-yt-text', properties: { opacity: 1, duration: 2.5 } },
    { selector: '.logo-sp-text', properties: { opacity: 1, duration: 2.5 }, position: '<' },
    { selector: '.anim-container', properties: { opacity: 0, duration: 2.5 } },
  ]

  animations.forEach(({ selector, properties, position }) => {
    tl.to(selector, properties, position)
  })
}

defineExpose({
  animateLogos,
})
</script>

<template>
  <div class="anim-container grow content-center flex justify-center items-center w-full gap-3">
    <div class="flex justify-center items-center relative">
      <YoutubeLogo class="logo-yt absolute size-24" />
      <h1 class="logo-yt-text text-4xl opacity-0 font-bold">
        Youtube
      </h1>
    </div>
    <p class="text-4xl font-bold">
      to
    </p>
    <div class="flex justify-center items-center relative">
      <SpotifyLogo class="logo-sp text-[#AFB1FF] absolute size-24 mr-8" />
      <h1 class="logo-sp-text text-4xl font-bold opacity-0">
        Anchor.fm
      </h1>
    </div>
  </div>
</template>
