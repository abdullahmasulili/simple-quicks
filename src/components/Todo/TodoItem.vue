<script setup>
import { Icon } from '@iconify/vue'
import { Collapse } from 'vue-collapsed'

const props = defineProps({
  title: {
    type: String,
    default:
      'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203'
  },
  isDone: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['onDelete', 'onCheck'])
</script>

<template>
  <li class="list__item" :class="isDone && 'item--done'">
    <div class="todo__summary">
      <input class="todo__check" type="checkbox" @click="$emit('onCheck')" :checked="isDone" />
      <h2 class="todo__title">
        {{ title }}
      </h2>
      <div class="todo__misc">
        <span class="remaining__days remaining--soon">2 Days Left</span>
        <span class="created__date">12/06/2021</span>
        <div class="todo__action">
          <Icon
            class="action__expand-trigger"
            icon="material-symbols:keyboard-arrow-down-rounded"
            width="22"
          />
          <div class="todo-more-action__wrap">
            <dropdown-menu :overlay="false" direction="right">
              <template #trigger>
                <Icon class="action__menu-trigger" icon="material-symbols:more-horiz" width="22" />
              </template>
              <template #body>
                <menu>
                  <li
                    class="action__delete-todo text--color-indicator-3"
                    @click="$emit('onDelete')"
                  >
                    Delete
                  </li>
                </menu>
              </template>
            </dropdown-menu>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import './styles.scss';
</style>
