<template>
  <div class="chat__window">
    <ul class="chat__messages">
      <slot></slot>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/components/Chat/styles.scss';
</style>
