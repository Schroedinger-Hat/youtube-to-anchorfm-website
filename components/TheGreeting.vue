<script setup lang="ts">
import SHLogo from '~/assets/svg/sh-logo.svg'
</script>

<template>
  <div class="flex w-full flex-col-reverse md:flex-col items-center justify-center gap-y-2 p-4">
    <LogoIntro class="grow" />
    <nav class="flex justify-center itemss-center gap-x-2">
      <CtaIcon
        is-anchor
        as-child
        icon="logo-github"
        target="_blank"
        to="https://github.com/Schroedinger-Hat/youtube-to-anchorfm"
        variant="outline"
      />
      <CtaIcon
        is-anchor
        as-child
        icon="logo-github"
        target="_blank"
        to="https://www.schrodinger-hat.it/"
        variant="outline"
      >
        <SHLogo class="size-5" />
      </CtaIcon>
    </nav>
  </div>
</template>
