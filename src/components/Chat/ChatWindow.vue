<script setup>
const props = defineProps({
  hasNewMessage: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="chat__window">
    <ul class="chat__messages">
      <slot></slot>
    </ul>
    <button v-if="hasNewMessage" class="btn btn--new-message">New Message</button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/components/Chat/styles.scss';
</style>
