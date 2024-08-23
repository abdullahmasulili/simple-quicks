import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import SDropdown from '@storinka/dropdown'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SDropdown)

app.mount('#app')
