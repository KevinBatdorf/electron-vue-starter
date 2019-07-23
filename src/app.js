import Vue from 'vue'
import router from './router'
import store from './store'
import { MainApp } from './main'

Vue.config.devtools = true
Vue.component('main-app-component', MainApp)
const Deploykit = new Vue({ router, store }).$mount('#app')

window.Deploykit = { Deploykit, MainApp }

export { Deploykit, MainApp }