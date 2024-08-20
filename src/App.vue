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

import { resolveHideQuicks, resolveRevealQuicks } from '@/utilities/quicks'

const activeQuicks = ref(null)
const showQuicks = ref(false)

function handleActiveQuicks(quicksName) {
  activeQuicks.value = quicksName

  const quicksToggler = document.querySelector('.fab__wrap:is(.main__fab)')
  quicksToggler.classList.toggle('soft-hide')
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
