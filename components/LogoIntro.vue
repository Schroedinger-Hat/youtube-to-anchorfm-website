<script setup lang="ts">
import SpotifyLogo from '~/assets/svg/spotify-logo.svg'
import YoutubeLogo from '~/assets/svg/youtube-logo.svg'
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full gap-2">
    <div class="flex justify-center items-end gap-3 text-4xl font-bold">
      <div class="flex flex-col justify-center items-center space-y-1">
        <YoutubeLogo class="size-8" />
        <h1>Youtube</h1>
      </div>
      <p>to</p>
      <div class="flex flex-col justify-center items-center space-y-1">
        <SpotifyLogo class="text-[#AFB1FF] size-8" />
        <h1>Anchor.fm</h1>
      </div>
    </div>
    <h2 class="scroll-m-20 text-xl font-semibold tracking-tight text-center text-balance">
      An automation tool to publish your podcast
    </h2>
  </div>
</template>
