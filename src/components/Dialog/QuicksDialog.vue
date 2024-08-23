<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <Transition name="fade">
    <dialog v-if="isOpen" class="quicks__dialog" open>
      <slot name="dialog-header"></slot>
      <slot></slot>
    </dialog>
  </Transition>
</template>
