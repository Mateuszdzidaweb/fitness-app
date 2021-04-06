import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/styles.css'
import './assets/js/AuthConfig.js'

createApp(App).use(router).mount('#app')
