<script setup lang="ts">
useSeoMeta({
  title: 'Youtube to Anchor.fm',
  description: 'An automation tool for your podcast',
})
</script>

<template>
  <div class="app grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-1 h-dvh">
    <TheGreeting class="row-span-1" />
    <div class="row-span-3 md:row-span-1 bg-white flex flex-col justify-center items-center p-4 text-black w-full overflow-y-scroll text-wrap">
      <ContentDoc class="h-dvh w-full" />
    </div>
  </div>
</template>

<style lang="css">
p + p:not(:last-child) {
  margin-bottom: 16px;
}
</style>
