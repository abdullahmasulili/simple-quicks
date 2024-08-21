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
  // hideLabel: {
  //   type: Boolean || String,
  //   default: true
  // },
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
  <div class="fab__wrap">
    <Transition name="fade">
      <div class="fab__label" v-if="label">
        <span>{{ label }}</span>
      </div>
    </Transition>
    <button class="btn btn--fab" :class="`color--${color} fab--${fabType}`" @click="$emit('click')">
      <Icon :icon="icon" />
    </button>
    <Transition name="slide-fade">
      <button
        v-if="fabType !== 'toggler' && isActive"
        class="btn btn--fab color--primary-2 quick-closer"
        @click="$emit('close')"
      ></button>
    </Transition>
  </div>
</template>
