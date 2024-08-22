<script setup>
import { Icon } from '@iconify/vue'

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

<style lang="scss" scoped>
@import './styles.scss';
</style>
