<script setup>
import VBtn from '../Buttons/VBtn.vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Type a new message'
  }
})

const emits = defineEmits(['onSend'])
</script>

<template>
  <div class="compose-message__wrap">
    <input class="form__control" type="text" :placeholder="placeholder" />
    <v-btn @click="$emit('onSend')" caption="Send" />
  </div>
</template>

<style lang="scss" scoped>
@import './styles.scss';
</style>
