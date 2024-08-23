<script setup>
import { ref, watchEffect } from 'vue'

import QuicksDialog from '@/components/Dialog/QuicksDialog.vue'
import DialogHeader from '@/components/Dialog/DialogHeader.vue'
import DialogBody from '@/components/Dialog/DialogBody.vue'
import ChatRoom from '@/components/Chat/ChatRoom.vue'

const props = defineProps({
  activeQuicks: {
    type: String
  }
})

const emits = defineEmits(['onClose'])

const isChatRoomOpen = ref(false)
const isQuickOpen = ref(false)
const isAgentRoom = ref(false)
const dialogTitle = ref('I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]')

watchEffect(() => {
  if (props.activeQuicks === 'inbox') {
    isQuickOpen.value = true
  } else {
    isQuickOpen.value = false
    isChatRoomOpen.value = false
  }
})

function handleOpenChatRoom(isAgent, roomTitle) {
  isChatRoomOpen.value = true
  isAgentRoom.value = isAgent
  dialogTitle.value = roomTitle
}
</script>

<template>
  <quicks-dialog :is-open="isQuickOpen">
    <template #dialog-header>
      <dialog-header
        :is-show="isChatRoomOpen"
        @on-back="isChatRoomOpen = false"
        @on-close="$emit('onClose')"
        :title="dialogTitle"
        :participant-count="isAgentRoom ? 2 : 3"
      />
    </template>
    <dialog-body :class="isChatRoomOpen ? 'dialog--chat-room' : ''">
      <chat-room
        @on-room-click="handleOpenChatRoom"
        :is-room-open="isChatRoomOpen"
        :is-agent="isAgentRoom"
      />
    </dialog-body>
  </quicks-dialog>
</template>
