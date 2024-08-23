import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([])
  const loading = ref(false)
  const allTodos = computed(() => todos.value)
  const isLoading = computed({
    get() {
      return loading.value
    },
    set(newVal) {
      loading.value = newVal
    }
  })

  async function getAllTodos() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

    todos.value = response.data
  }

  async function addTodo(data) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', data)

    todos.value = response.data
  }

  async function updateTodo(id, data) {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, data)

    todos.value = response.data
  }

  async function deleteTodo(id) {
    isLoading.value = true
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

    todos.value = todos.value.filter((todo) => todo.id !== id)
    isLoading.value = false
  }

  return { todos, allTodos, getAllTodos, addTodo, updateTodo, deleteTodo, loading, isLoading }
})
