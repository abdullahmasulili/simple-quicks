import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([])
  const allTodos = computed(() => todos.value)

  async function getAllTodos() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

    todos.value = response.data
  }

  return { todos, allTodos, getAllTodos }
})
