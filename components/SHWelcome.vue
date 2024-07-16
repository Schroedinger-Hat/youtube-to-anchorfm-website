<script setup lang="ts">
import type IntroAnimationClient from './IntroAnimation.vue'
import SHLogo from '~/assets/svg/sh-logo.svg'

useSeoMeta({
  title: 'SH Nuxt Template',
  description: 'Welcome to the SH Nuxt Template',
})

const introAnimationEl = ref<ComponentPublicInstance<typeof IntroAnimationClient> | null>(null)

onMounted(() => introAnimationEl.value?.animateLogos())
</script>

<template>
  <div class="app grid grid-cols-1 md:grid-cols-2 h-dvh">
    <div class="flex w-full flex-col items-center justify-center gap-y-2 p-4">
      <div class="grow content-center flex justify-center items-center w-full gap-3">
        <IntroAnimation ref="introAnimationEl" />
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
