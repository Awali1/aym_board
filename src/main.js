// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Http from '@/libs/http.js'
import VueUtils from '@/libs/vue_utils.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/main.scss'

Vue.use(VueUtils)
Vue.use(ElementUI)
Vue.prototype.$http = Http
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})