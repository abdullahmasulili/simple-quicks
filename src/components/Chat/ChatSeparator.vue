<script setup>
import { Icon } from '@iconify/vue'

import { COLORS } from '@/utilities/CONSTANT'

const props = defineProps({
  label: {
    type: String,
    default: 'Today June 09, 2021'
  },
  color: {
    type: String,
    default: COLORS.PRIMARY_2
  },
  isNewMessageSeparator: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="chat__separator"
    :style="`color: ${isNewMessageSeparator ? COLORS.INDICATOR_3 : color}; border-top: 1px solid ${isNewMessageSeparator ? COLORS.INDICATOR_3 : color}; width: 100%`"
  >
    <span
      class="separator__label"
      :style="`padding-inline: ${isNewMessageSeparator ? '5px' : '20px'}; left: calc(50% - calc(${isNewMessageSeparator ? '138.03px' : '185.02px'} / 2))`"
    >
      {{ isNewMessageSeparator ? 'New Message' : label }}
      <Icon
        class="separator__icon"
        v-if="isNewMessageSeparator"
        icon="material-symbols:arrow-downward"
        width="24px"
      />
    </span>
  </div>
</template>
