<script setup>
import { Icon } from '@iconify/vue'

import '@/components/SearchBar/styles.scss'

const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="form__control">
    <input type="text" :placeholder="placeholder" />
    <span class="form__icon">
      <Icon icon="mdi:magnify" />
    </span>
  </div>
</template>
