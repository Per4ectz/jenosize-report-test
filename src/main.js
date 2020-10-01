import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import locale from 'element-ui/lib/locale/lang/en'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import echarts from 'echarts'

import Home from './pages/home.vue'
import Report from './pages/report.vue'


Vue.use(BootstrapVue)
Vue.use(ElementUI, { locale })
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

const routes = [
  {
    path: '/', 
    component: Home
  }
  ,{ 
    path: '/report', 
    component: Report 
  }
]
const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
