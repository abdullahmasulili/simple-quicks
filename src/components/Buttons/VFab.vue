<script setup>
import { defineProps } from 'vue'
import { Icon } from '@iconify/vue'

import './styles.scss'

const props = defineProps({
  icon: {
    type: String,
    default: false
  },
  color: {
    type: String,
    default: 'primary-1'
  },
  label: {
    type: String
  },
  showLabel: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="fab__wrap">
    <span v-if="label && showLabel" class="fab__label">{{ label }}</span>
    <button class="btn btn--fab" :class="`color--${color}`">
      <Icon :icon="icon" />
    </button>
  </div>
</template>
