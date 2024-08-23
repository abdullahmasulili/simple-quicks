<script setup>
import { ref } from 'vue'

import VFab from '@/components/Buttons/VFab.vue'
import Inbox from '@/components/Quicks/Inbox.vue'
import Task from '@/components/Quicks/Task.vue'

import './assets/styles.scss'

import {
  resolveHideQuicks,
  resolveRevealQuicks,
  calculateQuicksItemPosition
} from '@/utilities/quicks'

const activeQuicks = ref(null)
const showQuicks = ref(false)

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
</script>

<template>
  <main>
    <Inbox :active-quicks="activeQuicks" @on-close="handleCloseQuicks" />
    <Task :active-quicks="activeQuicks" />
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
