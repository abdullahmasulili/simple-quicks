<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: true
  },
  caption: {
    type: String,
    default: ''
  },
  lineSize: {
    type: Number,
    default: 5
  },
  size: {
    type: Number,
    default: 60
  },
  trackColor: {
    type: String,
    default: '#F8F8F8'
  },
  thumbColor: {
    type: String,
    default: '#C4C4C4'
  }
})
</script>

<template>
  <div class="spinner__loading">
    <ve-progress
      progress
      :loading="isActive"
      :empty-color="trackColor"
      :loader="{ color: thumbColor }"
      :size="size"
      :thickness="lineSize"
      :empty-thickness="lineSize"
    />
    <span class="loading__caption" v-if="caption">{{ caption }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import './styles.scss';
</style>
