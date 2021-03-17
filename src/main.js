import 'primevue/resources/themes/vela-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import {createApp} from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import BadgeDirective from 'primevue/badgedirective'
import {createRouter, createWebHistory} from 'vue-router'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'
import Menubar from 'primevue/menubar';
import Badge from 'primevue/badge';
import Avatar from 'primevue/avatar';

import Sample from '@/components/Sample'
import Chart from 'primevue/chart'

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

app.directive("badge", BadgeDirective)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Dialog', Dialog)
app.component('Toast', Toast)
app.component('Menubar', Menubar)
app.component('Badge', Badge)
app.component('Avatar', Avatar)
app.component('Chart', Chart)

app.mount('#app')
