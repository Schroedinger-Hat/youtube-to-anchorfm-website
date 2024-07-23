<script setup lang="ts">
import type { ButtonVariants } from '~/components/ui/button'

withDefaults(defineProps<{
  asChild?: boolean
  icon?: string
  isAnchor?: boolean
  to?: string
  variant?: ButtonVariants['variant']
}>(), {
  variant: 'outline',
})
</script>

<template>
  <SCButton size="icon" :variant="variant" class="size-8" :as-child="asChild">
    <template v-if="asChild && isAnchor">
      <NuxtLink :to="to">
        <slot>
          <Icon :name="`carbon:${icon}`" class="size-5" />
        </slot>
      </NuxtLink>
    </template>
    <template v-else>
      <slot>
        <Icon :name="`carbon:${icon}`" class="size-5" />
      </slot>
    </template>
  </SCButton>
</template>
