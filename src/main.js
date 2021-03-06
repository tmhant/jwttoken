import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// setup fake backend
import { configureFakeBackend } from './router/fake-backend';
configureFakeBackend();
createApp(App).use(store).use(router).use(bootstrap).mount('#app')
