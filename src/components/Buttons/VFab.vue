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
  hideLabel: {
    type: Boolean,
    default: true
  },
  fabType: {
    type: String,
    default: 'toggler'
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['click', 'close'])
</script>

<template>
  <div class="fab__container">
    <div class="fab__wrap">
      <Transition name="fade">
        <span v-if="label && !hideLabel" class="fab__label">{{ label }}</span>
      </Transition>
      <button class="btn btn--fab" :class="`color--${color}`" @click="$emit('click')">
        <Icon :icon="icon" />
      </button>
      <button
        v-if="fabType !== 'toggler' && isActive"
        class="btn btn--fab color--primary-2 quick-closer"
        @click="$emit('close')"
      ></button>
    </div>
  </div>
</template>
