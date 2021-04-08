import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/styles.css'
import './assets/js/AuthConfig.js'

// const app = Vue.createApp(App)
// app.use(VueAxios, axios)



createApp(App).use(router,VueAxios,axios).mount('#app')
// createApp(App).use().mount('#app')

