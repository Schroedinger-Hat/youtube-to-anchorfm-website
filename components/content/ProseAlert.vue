<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

defineProps<{
  icon?: string
  className?: string
}>()
</script>

<template>
  <Alert class="bg-white text-black flex justify-center items-start mb-4">
    <Icon v-if="icon" :name="`carbon:${icon}`" class="w-20" />
    <div>
      <AlertTitle>
        <slot name="title" />
      </AlertTitle>
      <AlertDescription>
        <slot name="description" />
      </AlertDescription>
    </div>
  </Alert>
</template>
