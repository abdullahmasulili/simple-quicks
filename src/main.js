import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import veProgress from 'vue-ellipse-progress'
import DropdownMenu from 'v-dropdown-menu'

import 'v-dropdown-menu/css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(veProgress)
app.use(DropdownMenu)

app.mount('#app')
