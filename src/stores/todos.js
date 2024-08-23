import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([])
  const loading = ref(false)
  const allTodos = computed(() => todos.value)
  const setLoading = computed({
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

  async function updateTodo(data) {
    setLoading.value = true
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${data.id}`, data)

    const todoIndex = todos.value.findIndex((todo) => todo.id === data.id)

    if (todoIndex !== -1) {
      todos.value.splice(todoIndex, 1, data)
      setLoading.value = false
    }
  }

  async function deleteTodo(id) {
    setLoading.value = true
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

    todos.value = todos.value.filter((todo) => todo.id !== id)
    setLoading.value = false
  }

  return { todos, allTodos, getAllTodos, addTodo, updateTodo, deleteTodo, loading, setLoading }
})
