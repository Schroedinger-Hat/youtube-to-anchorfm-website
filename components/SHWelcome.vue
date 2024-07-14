<script setup lang="ts">
import SpotifyLogo from '~/assets/svg/spotify-logo.svg'
import YoutubeLogo from '~/assets/svg/youtube-logo.svg'
import SHLogo from '~/assets/svg/sh-logo.svg'

useSeoMeta({
  title: 'SH Nuxt Template',
  description: 'Welcome to the SH Nuxt Template',
})

const { gsap } = useGsap()

const animateLogos = () => {
  const tl = gsap.timeline({ repeat: -1, yoyo: true })

  const animations = [
    { selector: '.logo-yt', properties: { opacity: 0, duration: 2.5 } },
    { selector: '.logo-sp', properties: { opacity: 0, duration: 2.5 }, position: '<' },
    { selector: '.logo-yt-text', properties: { opacity: 1, duration: 2.5 } },
    { selector: '.logo-sp-text', properties: { opacity: 1, duration: 2.5 }, position: '<' },
  ]

  animations.forEach(({ selector, properties, position }) => {
    tl.to(selector, properties, position)
  })
}

onMounted(animateLogos)
</script>

<template>
  <div class="app grid grid-cols-1 md:grid-cols-2 h-dvh">
    <div class="flex w-full flex-col items-center justify-center gap-y-2 p-4">
      <div class="grow content-center flex justify-center items-center w-full gap-3">
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
      <nav>
        <CtaIcon
          is-anchor
          as-child
          icon="logo-github"
          target="_blank"
          to="https://www.github.com/readpato/duck-remember"
          variant="outline"
        />
      </nav>
    </div>
    <div class="w-full bg-white flex flex-col justify-center items-center p-4">
      <div class="grow flex flex-col justify-center items-center w-full mx-auto text-black">
        <h2 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-balance">
          An automation tool to publish your podcast
        </h2>
        <span class="inline-flex justify-center items-center pt-2">by
          <SHLogo class="size-8 ml-1" />
        </span>
      </div>
    </div>
  </div>
</template>
