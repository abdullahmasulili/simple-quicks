<script setup>
import { Icon } from '@iconify/vue'

import '@/components/Chat/styles.scss'

const props = defineProps({
  isMultiple: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <li class="chat-room__item chat-room__card">
    <div class="chat-room__participant-avatar">
      <span class="main__avatar">
        <Icon icon="mdi:person-outline" width="22px" />
      </span>
      <span v-if="isMultiple" class="secondary__avatar">
        <Icon icon="mdi:person-outline" width="22px" />
      </span>
    </div>
    <div class="chat-room__summary">
      <div class="chat-room__header">
        <h3 class="chat-room__participant">
          Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]
        </h3>
        <span class="chat-room__date">January 1, 2021 19:29</span>
      </div>
      <div class="chat-room__body">
        <h4 class="user__name">Cameron Phillips :</h4>
        <p class="user__message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure exercitationem voluptatum
          id officiis qui, sapiente expedita voluptates aliquam doloribus fugit nam sint mollitia
          et, eaque distinctio architecto rerum quia omnis.
        </p>
      </div>
    </div>
  </li>
</template>
