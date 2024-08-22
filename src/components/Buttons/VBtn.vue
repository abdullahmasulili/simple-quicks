<script setup>
import '@/components/Buttons/styles.scss'

const props = defineProps({
  color: {
    type: String,
    default: 'primary-1'
  },
  caption: {
    type: String,
    default: 'Click Me'
  }
})
</script>

<template>
  <button class="btn" :class="`color--${color}`">{{ caption }}</button>
</template>
