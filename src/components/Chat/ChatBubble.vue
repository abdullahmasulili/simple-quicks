<script setup>
import { Icon } from '@iconify/vue'
import '@storinka/dropdown/dist/styles/light-theme.css'

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
  }
})
</script>

<template>
  <div
    :id="bubbleId"
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
      <span class="bubble__action" v-s-dropdown-toggle:[bubbleId]>
        <Icon icon="material-symbols:more-horiz" />
      </span>
      <SDropdown :name="bubbleId" theme="light" :align="isPrimary ? 'left' : 'right'">
        <menu>
          <li class="bubble-action__item text--color-primary-1">Edit</li>
          <li class="bubble-action__item text--color-indicator-3">Delete</li>
        </menu>
      </SDropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/components/Chat/styles.scss';
</style>
