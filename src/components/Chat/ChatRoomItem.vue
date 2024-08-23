<script setup>
import { Icon } from '@iconify/vue'

import '@/components/Chat/styles.scss'

const props = defineProps({
  isMultiple: {
    type: Boolean,
    default: true
  },
  participantName: {
    type: String,
    default: ''
  },
  roomTitle: {
    type: String,
    default: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]'
  }
})

const emits = defineEmits(['click'])

function resolveParticipantInitial() {
  if (!props.participantName) {
    return
  }

  return props.participantName.charAt(0)
}
</script>

<template>
  <li class="chat-room__item chat-room__card" @click="$emit('click')">
    <div class="chat-room__participant-avatar">
      <span class="main__avatar">
        <Icon v-if="!participantName && roomTitle" icon="mdi:person-outline" width="22px" />
        <span v-if="participantName && !isMultiple">{{ resolveParticipantInitial() }}</span>
      </span>
      <span v-if="isMultiple" class="secondary__avatar">
        <Icon icon="mdi:person-outline" width="22px" />
      </span>
    </div>
    <div class="chat-room__summary">
      <div class="chat-room__header">
        <h3 class="chat-room__title">
          {{ participantName || roomTitle }}
        </h3>
        <span class="chat-room__date">January 1, 2021 19:29</span>
      </div>
      <div class="chat-room__body">
        <h4 v-if="isMultiple" class="user__name">Cameron Phillips :</h4>
        <p class="user__message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure exercitationem voluptatum
          id officiis qui, sapiente expedita voluptates aliquam doloribus fugit nam sint mollitia
          et, eaque distinctio architecto rerum quia omnis.
        </p>
      </div>
    </div>
  </li>
</template>
