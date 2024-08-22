<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

import VFab from '@/components/Buttons/VFab.vue'
import SearchBar from '@/components/SearchBar/SearchBar.vue'
import ChatRoomList from '@/components/Chat/ChatRoomList.vue'
import ChatRoomItem from '@/components/Chat/ChatRoomItem.vue'
import ChatWindow from '@/components/Chat/ChatWindow.vue'
import ChatBubble from '@/components/Chat/ChatBubble.vue'
import ComposeMessage from '@/components/ComposeMessage/ComposeMessage.vue'

import './assets/styles.scss'

import {
  resolveHideQuicks,
  resolveRevealQuicks,
  calculateQuicksItemPosition
} from '@/utilities/quicks'

const activeQuicks = ref(null)
const showQuicks = ref(false)
const isChatRoomOpen = ref(true)

function handleActiveQuicks(quicksName) {
  activeQuicks.value = quicksName

  const quicks = document.querySelectorAll('.fab__wrap:not(.main__fab)')
  const activeQuicksIndex = resolveActiveQuicksIndex(quicks)
  let offset = 0

  quicks.forEach((item, index) => {
    const quicksLabel = item.dataset.quicksLabel.toLowerCase()

    if (quicksLabel === activeQuicks.value) {
      offset = calculateQuicksItemPosition(index)
      item.style.transform = `translateX(${offset}px)`
      item.style.marginRight = '0px'

      return
    }

    if (activeQuicksIndex === 0) {
      item.style.transform = `translateX(53px)`

      return
    }

    if (activeQuicksIndex > 0) {
      item.style.transform = `translateX(-15px)`
    }

    if (activeQuicksIndex < index) {
      item.style.transform = `translateX(53px)`
    }
  })
}

function resolveActiveQuicksIndex(nodeList) {
  return new Array(...nodeList).findIndex(
    (item) => item.dataset.quicksLabel.toLowerCase() === activeQuicks.value
  )
}

function handleCloseQuicks() {
  activeQuicks.value = null

  const quicks = document.querySelectorAll('.fab__wrap:not(.main__fab)')

  quicks.forEach((item) => {
    item.style.transform = 'translateX(0px)'
    item.style.marginRight = '15px'
  })
}

function handleRevealQuicks() {
  const quicks = document.querySelectorAll('.fab__wrap:not(.main__fab)')

  if (showQuicks.value) {
    resolveHideQuicks(quicks)

    activeQuicks.value = null

    return (showQuicks.value = false)
  }

  showQuicks.value = true

  resolveRevealQuicks(quicks)
}

function handleOpenChatRoom() {
  isChatRoomOpen.value = true
}
</script>

<template>
  <main>
    <Transition name="fade">
      <dialog open v-if="activeQuicks" class="quicks__dialog">
        <div class="dialog__header" v-if="isChatRoomOpen">
          <span class="dialog__back-button" @click="isChatRoomOpen = false">
            <Icon icon="material-symbols:arrow-back" width="24px" />
          </span>
          <div class="dialog__title">
            <h2 class="chat-room__name">
              I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </h2>
            <span class="participant__count">3 Participant</span>
          </div>
          <span class="dialog__close-button" @click="handleCloseQuicks">
            <Icon icon="material-symbols:close" width="24px" />
          </span>
        </div>
        <div class="dialog__body" :class="isChatRoomOpen ? 'dialog--chat-room' : ''">
          <div class="content__wrap" v-if="isChatRoomOpen">
            <chat-window>
              <chat-bubble color="color-1" username="Mary Hilda" />
              <chat-bubble is-primary />
            </chat-window>
            <compose-message />
          </div>
          <div class="content__wrap" v-if="!isChatRoomOpen">
            <search-bar placeholder="Search" />
            <chat-room-list>
              <chat-room-item v-for="i in 10" :key="i" @click="handleOpenChatRoom" />
            </chat-room-list>
          </div>
        </div>
      </dialog>
    </Transition>
    <div class="quicks">
      <VFab
        icon="oui:bolt"
        class="main__fab"
        :class="showQuicks && 'reveal-item'"
        @click="handleRevealQuicks"
      />
      <VFab
        icon="material-symbols:forum-outline"
        color="indicator-2"
        label="Inbox"
        fab-type="item"
        :hide-label="activeQuicks"
        :class="activeQuicks === 'inbox' ? 'is-active' : ''"
        :is-active="activeQuicks === 'inbox'"
        @click="handleActiveQuicks('inbox')"
        @close="handleCloseQuicks()"
      />
      <VFab
        icon="material-symbols:chrome-reader-mode-outline"
        color="indicator-1"
        label="Task"
        fab-type="item"
        :hide-label="activeQuicks"
        :class="activeQuicks === 'task' ? 'is-active' : ''"
        :is-active="activeQuicks === 'task'"
        @click="handleActiveQuicks('task')"
        @close="handleCloseQuicks()"
      />
    </div>
  </main>
</template>
