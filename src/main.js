import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import {createApp} from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import {createRouter, createWebHistory} from 'vue-router'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'
import Menubar from 'primevue/menubar';

import Sample from '@/components/Sample'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Sample}
    ]
})

const app = createApp(App)
app.use(PrimeVue, {ripple: true})
app.use(ToastService)
app.use(router)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Dialog', Dialog)
app.component('Toast', Toast)
app.component('Menubar', Menubar)

app.mount('#app')
