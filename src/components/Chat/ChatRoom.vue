<script setup>
import { computed, ref, watch, watchEffect } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import SearchBar from '@/components/SearchBar/SearchBar.vue'
import ChatRoomList from '@/components/Chat/ChatRoomList.vue'
import ChatRoomItem from '@/components/Chat/ChatRoomItem.vue'
import ChatWindow from '@/components/Chat/ChatWindow.vue'
import ChatBubble from '@/components/Chat/ChatBubble.vue'
import ComposeMessage from '@/components/ComposeMessage/ComposeMessage.vue'

const props = defineProps({
  isRoomOpen: {
    type: Boolean,
    default: false
  },
  isAgent: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['onRoomClick'])

const openRoom = computed({
  get() {
    return props.isRoomOpen
  }
})
</script>

<template>
  <div class="content__wrap" v-if="openRoom">
    <chat-window>
      <chat-bubble
        :color="isAgent ? 'color-4' : 'color-1'"
        :username="isAgent ? 'FastVisa Support' : 'Mary Hilda'"
        :bubble-id="uuidv4()"
      />
      <chat-bubble is-primary :bubble-id="uuidv4()" />
    </chat-window>
    <compose-message />
  </div>
  <div class="content__wrap" v-if="!openRoom">
    <search-bar placeholder="Search" />
    <chat-room-list>
      <chat-room-item @click="$emit('onRoomClick')" :is-agent="isAgent" />
      <chat-room-item
        @click="$emit('onRoomClick', true, 'FastVisa Support')"
        :is-multiple="false"
        participant-name="FastVisa Support"
      />
    </chat-room-list>
  </div>
</template>
