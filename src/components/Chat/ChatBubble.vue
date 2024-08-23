<script setup>
import { Icon } from '@iconify/vue'

import ChatSeparator from '@/components/Chat/ChatSeparator.vue'

const props = defineProps({
  username: {
    type: String,
    default: 'You'
  },
  time: {
    type: String,
    default: '19:32'
  },
  color: {
    type: String,
    default: 'color-2'
  },
  isPrimary: {
    type: Boolean,
    default: false
  },
  bubbleId: {
    type: String
  },
  isNewMessage: {
    type: Boolean,
    default: false
  },
  showSeparator: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <chat-separator v-if="showSeparator" :is-new-message-separator="isNewMessage && showSeparator" />
  <div
    :id="bubbleId"
    class="chat-bubble__wrap"
    :class="`chat--${isPrimary ? 'color-2' : color} ${isPrimary ? 'chat-bubble--primary' : ''}`"
  >
    <h3 class="chat-bubble__name">{{ isPrimary ? 'You' : username }}</h3>
    <div class="chat__bubble">
      <div class="bubble__body">
        <p class="message">
          Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some
          homework for you to fill. Please keep up with the due dates. Should you have any
          questions, you can message me anytime. Thanks.
        </p>
        <span class="time">{{ time }}</span>
      </div>
      <dropdown-menu :overlay="false" :direction="isPrimary ? 'right' : 'left'">
        <template #trigger>
          <span class="bubble__action">
            <Icon icon="material-symbols:more-horiz" />
          </span>
        </template>
        <template #body>
          <menu>
            <li class="bubble-action__item text--color-primary-1">Edit</li>
            <li class="bubble-action__item text--color-indicator-3">Delete</li>
          </menu>
        </template>
      </dropdown-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/components/Chat/styles.scss';
</style>
