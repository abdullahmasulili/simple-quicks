<script setup>
import { ref } from 'vue'

import VSpinner from '@/components/Spinner/VSpinner.vue'

import { COLORS } from '@/utilities/CONSTANT'

const props = defineProps({
  hasNewMessage: {
    type: Boolean,
    default: false
  },
  isAgent: {
    type: Boolean,
    default: false
  }
})

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 1000)
</script>

<template>
  <div class="chat__window">
    <ul class="chat__messages">
      <slot></slot>
    </ul>
    <button v-if="hasNewMessage" class="btn btn--new-message">New Message</button>
    <div v-if="loading && isAgent" class="agent-connect__loading">
      <v-spinner :size="32" :line-size="4" :thumb-color="COLORS.PRIMARY_1" />
      <span class="loading__caption">
        Please wait while we connect you with one of our team ...
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/components/Chat/styles.scss';
</style>
