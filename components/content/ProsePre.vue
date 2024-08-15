<script setup lang="ts">
const props = defineProps<{
  code: string
  language?: 'json' | 'js' | 'yaml'
  filename?: string
  highlights?: number[]
  meta?: string
  class?: string
}>()

const languageIcon = computed(() => {
  switch (props.language) {
    case 'json':
      return 'json'
    case 'js':
      return 'javascript'
    case 'yaml':
      return 'yaml'
    default:
      return 'terminal'
  }
})
</script>

<template>
  <div class="bg-black rounded-md overflow-hidden my-4">
    <div class="flex justify-start items-center space-x-2 text-white text-sm border border-b-white/50 border-b p-3">
      <Icon :name="`logos:${languageIcon}`" />
      <span>{{ filename }}</span>
    </div>
    <pre :class="$props.class" class="flex justify-start items-center p-3 overflow-x-scroll">
    <slot />
  </pre>
  </div>
</template>

<style>
pre code .line {
  display: block;
}
</style>
