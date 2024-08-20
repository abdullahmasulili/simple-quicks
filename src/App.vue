<template>
  <main>
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
        @close="handleActiveQuicks(null)"
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
        @close="handleActiveQuicks(null)"
      />
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

import VFab from '@/components/Buttons/VFab.vue'

import './assets/styles.scss'

import { resolveQuicksReveal } from '@/utilities/quicks'

const activeQuicks = ref(null)
const showQuicks = ref(false)

function handleActiveQuicks(quicksName) {
  activeQuicks.value = quicksName

  if (!quicksName) {
    showQuicks.value = false
  }
}

function handleRevealQuicks() {
  showQuicks.value = !showQuicks.value

  const quicks = document.querySelectorAll('.fab__wrap:not(.main__fab)')

  quicks.forEach((item, index) => {
    item.style.position = 'relative'
    setTimeout(
      () => {
        item.style.marginRight = '15px'
      },
      50 * (index + 1)
    )
  })
}
</script>
