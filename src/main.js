// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './router'
import ElementUI from 'element-ui'
// import Routes from './router/index'
import 'element-ui/lib/theme-default/index.css'

//全局統一路徑
import { publicPath } from '../vue.config'

//全局統一路徑
// import { VueRouter } from 'vue-router/types/router'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter)

const router = new VueRouter({
  base:publicPath,
  routes: Routes,
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
