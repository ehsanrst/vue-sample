import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'prismjs/themes/prism-coy.css'

import '@/assets/styles/main.css'
import '@/assets/styles/sidebar.css'
import '@/assets/styles/responsive.css'
import '@/assets/styles/splash.css'
import '@/assets/styles/profile.css'
import '@/assets/styles/menu.css'
import '@/assets/styles/topbar.css'

import {createApp, reactive} from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import BadgeDirective from 'primevue/badgedirective'
import Ripple from 'primevue/ripple'
import {createRouter, createWebHashHistory} from 'vue-router'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'
import Menubar from 'primevue/menubar'
import Badge from 'primevue/badge'
import Avatar from 'primevue/avatar'
import Chart from 'primevue/chart'

import Dashboard from '@/components/Dashboard'
import Users from '@/components/Users'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Dashboard},
        {path: '/users', component: Users}
    ]
})

const app = createApp(App)
app.config.globalProperties.$appState = reactive({inputStyle: 'outlined'})

app.use(PrimeVue)
app.use(ToastService)
app.use(router)

app.directive('badge', BadgeDirective)
app.directive('ripple', Ripple)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Dialog', Dialog)
app.component('Toast', Toast)
app.component('Menubar', Menubar)
app.component('Badge', Badge)
app.component('Avatar', Avatar)
app.component('Chart', Chart)

app.mount('#app')
