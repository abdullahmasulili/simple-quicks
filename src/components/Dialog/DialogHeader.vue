<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  title: {
    type: String,
    default: 'I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]'
  },
  participantCount: {
    type: Number,
    default: 3
  },
  isShow: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['onBack', 'onClose'])
</script>

<template>
  <div class="dialog__header" v-if="isShow">
    <span class="dialog__back-button" @click="$emit('onBack')">
      <Icon icon="material-symbols:arrow-back" width="24px" />
    </span>
    <div class="dialog__title">
      <h2 class="chat-room__name">{{ title }}</h2>
      <span class="participant__count">{{ participantCount }} Participant</span>
    </div>
    <span class="dialog__close-button" @click="$emit('onClose')">
      <Icon icon="material-symbols:close" width="24px" />
    </span>
  </div>
</template>
