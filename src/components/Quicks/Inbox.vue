<script setup>
import { ref, watchEffect } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import SearchBar from '@/components/SearchBar/SearchBar.vue'
import ChatRoomList from '@/components/Chat/ChatRoomList.vue'
import ChatRoomItem from '@/components/Chat/ChatRoomItem.vue'
import ChatWindow from '@/components/Chat/ChatWindow.vue'
import ChatBubble from '@/components/Chat/ChatBubble.vue'
import ComposeMessage from '@/components/ComposeMessage/ComposeMessage.vue'
import QuicksDialog from '@/components/Dialog/QuicksDialog.vue'
import DialogHeader from '@/components/Dialog/DialogHeader.vue'
import DialogBody from '@/components/Dialog/DialogBody.vue'

const props = defineProps({
  activeQuicks: {
    type: String
  }
})

const emits = defineEmits(['onClose'])

const isChatRoomOpen = ref(false)
const isQuickOpen = ref(false)

watchEffect(() => {
  if (props.activeQuicks === 'inbox') {
    isQuickOpen.value = true
  } else {
    isQuickOpen.value = false
    isChatRoomOpen.value = false
  }
})

function handleOpenChatRoom() {
  isChatRoomOpen.value = true
}
</script>

<template>
  <quicks-dialog :is-open="isQuickOpen">
    <template #dialog-header>
      <dialog-header
        :is-show="isChatRoomOpen"
        @on-back="isChatRoomOpen = false"
        @on-close="$emit('onClose')"
      />
    </template>
    <dialog-body :class="isChatRoomOpen ? 'dialog--chat-room' : ''">
      <div class="content__wrap" v-if="isChatRoomOpen">
        <chat-window>
          <chat-bubble color="color-1" username="Mary Hilda" :bubble-id="uuidv4()" />
          <chat-bubble is-primary :bubble-id="uuidv4()" />
        </chat-window>
        <compose-message />
      </div>
      <div class="content__wrap" v-if="!isChatRoomOpen">
        <search-bar placeholder="Search" />
        <chat-room-list>
          <chat-room-item @click="handleOpenChatRoom" :is-agent="false" />
          <chat-room-item
            @click="handleOpenChatRoom"
            :is-multiple="false"
            participant-name="FastVisa Support"
          />
        </chat-room-list>
      </div>
    </dialog-body>
  </quicks-dialog>
</template>
