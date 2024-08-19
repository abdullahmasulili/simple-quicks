<script setup>
import { ref } from 'vue'

import VFab from '@/components/Buttons/VFab.vue'

import './assets/styles.scss'

import { resolveQuicksReveal } from '@/utilities/quicks'

const activeQuicks = ref(null)

function handleActiveQuicks(quicksName) {
  activeQuicks.value = quicksName
}

function handleRevealQuicks() {
  const quicksItems = document.querySelectorAll('.fab__container:not(.main__fab)')
  const quicksToggler = document.querySelector('.fab__container:is(.main__fab)')

  if (quicksToggler.classList.contains('reveal')) {
    resolveQuicksReveal(true, quicksItems)
    activeQuicks.value = null
    return quicksToggler.classList.remove('reveal')
  }

  quicksToggler.classList.add('reveal')
  resolveQuicksReveal(false, quicksItems)
}
</script>

<template>
  <main>
    <VFab
      icon="material-symbols:forum-outline"
      color="indicator-2"
      label="Inbox"
      fab-type="item"
      :hide-label="activeQuicks === 'inbox'"
      :class="activeQuicks === 'inbox' ? 'is-active' : ''"
      @click="handleActiveQuicks('inbox')"
      @close="handleActiveQuicks(null)"
      :is-active="activeQuicks === 'inbox'"
    />
    <VFab
      icon="material-symbols:chrome-reader-mode-outline"
      color="indicator-1"
      label="Task"
      fab-type="item"
      :hide-label="activeQuicks === 'task'"
      @click="handleActiveQuicks('task')"
      :class="activeQuicks === 'task' ? 'is-active' : ''"
      @close="handleActiveQuicks(null)"
      :is-active="activeQuicks === 'task'"
    />
    <Transition name="fade">
      <VFab v-show="!activeQuicks" icon="oui:bolt" class="main__fab" @click="handleRevealQuicks" />
    </Transition>
  </main>
</template>
