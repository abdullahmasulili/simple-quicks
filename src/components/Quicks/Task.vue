<script setup>
import { ref, watchEffect } from 'vue'

import QuicksDialog from '@/components/Dialog/QuicksDialog.vue'
import DialogBody from '@/components/Dialog/DialogBody.vue'

const props = defineProps({
  activeQuicks: {
    type: String
  }
})

const isQuickOpen = ref(false)

watchEffect(() => {
  if (props.activeQuicks === 'task') {
    isQuickOpen.value = true
  } else {
    isQuickOpen.value = false
  }
})
</script>

<template>
  <quicks-dialog :is-open="isQuickOpen">
    <dialog-body>
      <div class="content__wrap">
        <div class="dialog__misc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis quae,
          laboriosam, temporibus aliquam tenetur quasi deserunt quis dolore, commodi error nemo eos
          impedit suscipit itaque nobis odio. Est, magnam?
        </div>
      </div>
    </dialog-body>
  </quicks-dialog>
</template>
