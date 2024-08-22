<script setup>
import { Icon } from '@iconify/vue'

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
  }
})
</script>

<template>
  <div
    class="chat-bubble__wrap"
    :class="`chat--${color} ${isPrimary ? 'chat-bubble--primary' : ''}`"
  >
    <h3 class="chat-bubble__name">{{ username }}</h3>
    <div class="chat__bubble">
      <div class="bubble__body">
        <p class="message">
          Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some
          homework for you to fill. Please keep up with the due dates. Should you have any
          questions, you can message me anytime. Thanks.
        </p>
        <span class="time">{{ time }}</span>
      </div>
      <span class="bubble__action">
        <Icon icon="material-symbols:more-horiz" />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/components/Chat/styles.scss';
</style>
