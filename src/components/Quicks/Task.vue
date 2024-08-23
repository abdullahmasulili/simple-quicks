<script setup>
import { onBeforeMount, ref, watchEffect } from 'vue'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'

import { useTodosStore } from '@/stores/todos'

import QuicksDialog from '@/components/Dialog/QuicksDialog.vue'
import DialogBody from '@/components/Dialog/DialogBody.vue'
import VBtn from '@/components/Buttons/VBtn.vue'
import TodoList from '@/components/Todo/TodoList.vue'
import TodoItem from '@/components/Todo/TodoItem.vue'

const props = defineProps({
  activeQuicks: {
    type: String
  }
})

const store = useTodosStore()

const isQuickOpen = ref(false)
const { allTodos } = storeToRefs(store)
const { getAllTodos } = store

onBeforeMount(() => {
  getAllTodos()
  console.log(allTodos)
})

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
      <div class="dialog__misc">
        <div class="filter__wrap">
          <dropdown-menu :overlay="false" direction="center">
            <template #trigger>
              <button class="filter__selector">
                <span>My Tasks</span>
                <Icon icon="material-symbols:keyboard-arrow-down-rounded" width="18px" />
              </button>
            </template>
            <template #body>
              <menu class="filter__list">
                <li class="list__item">Personal Errands</li>
                <li class="list__item">Urgent To-Do</li>
              </menu>
            </template>
          </dropdown-menu>
        </div>
        <v-btn caption="New Task" />
      </div>
      <div class="content__wrap">
        <todo-list>
          <todo-item v-for="todo in allTodos" :key="todo.title" :title="todo.title" />
        </todo-list>
      </div>
    </dialog-body>
  </quicks-dialog>
</template>

<style lang="scss" scoped>
@import '@/components/Quicks/styles.scss';
</style>
