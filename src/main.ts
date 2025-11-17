import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/de'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import { revealDirective } from '@/helpers'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
  lang: quasarLang,
})
app.use(router)

app.directive('reveal', revealDirective)

app.mount('#app')
