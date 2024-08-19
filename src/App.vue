<script setup>
import VFab from '@/components/Buttons/VFab.vue'

import './assets/styles.scss'

import { handleRevealQuicks } from '@/utilities/quicks'
</script>

<template>
  <main>
    <VFab icon="material-symbols:forum-outline" color="indicator-2" label="Inbox" show-label />
    <VFab
      icon="material-symbols:chrome-reader-mode-outline"
      color="indicator-1"
      label="Task"
      show-label
    />
    <VFab icon="oui:bolt" class="main__fab" @click="handleRevealQuicks" />
  </main>
</template>
