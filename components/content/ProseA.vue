<script setup lang="ts">
withDefaults(defineProps<{
  href: string
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & {}) | null | undefined
}>(), {
  href: '',
  target: undefined,
})
</script>

<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="underline underline-offset-2 decoration-gray-400 hover:decoration-gray-700 transition-colors"
  >
    <slot />
  </NuxtLink>
</template>
