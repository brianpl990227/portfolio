/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import router from './router/index'
import store from './store/index'



const app = createApp(App)

store.commit('initializeStore')
app.use(router)
app.use(store)


registerPlugins(app)

app.mount('#app')
