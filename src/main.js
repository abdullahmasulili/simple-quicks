import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import SDropdown from '@storinka/dropdown'
import veProgress from 'vue-ellipse-progress'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SDropdown)
app.use(veProgress)

app.mount('#app')
