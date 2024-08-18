<script setup>
import VFab from '@/components/Buttons/VFab.vue'

import './assets/styles.scss'

function handleRevealQuicks() {
  const quicksItems = document.querySelectorAll('.fab__wrap:not(.main__fab)')

  quicksItems.forEach((item, index) => {
    if (item.classList.contains('revealed')) {
      return resolveHideQuicks(item)
    }

    item.classList.add('revealed')
    item.style.transform = calculateQuicksItemPosition(index)
    item.style.pointerEvents = 'all'
    item.style.visibility = 'visible'
    item.style.opacity = 1
  })
}

function calculateQuicksItemPosition(index) {
  const multiplier = index + 1
  const buttonSize = 60
  const spacing = 20
  const position = (buttonSize + spacing) * -1
  const result = position * multiplier

  return `translateX(${result}px)`
}

function resolveHideQuicks(element) {
  element.style.transform = 'translateX(0px)'
  element.style.pointerEvents = 'none'
  element.style.visibility = 'hidden'
  element.style.opacity = 0
  element.classList.remove('revealed')
}
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
