import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// JS默认规则，如果引入的是目录，就自动引入目录下的index文件
// 相当于import router from './router/index.ts'
import store from './store'
import Nav from '@/components/Nav.vue'
// 这里全局引入Nav.vue；“Vue.component('Nav',Nav)”
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'


Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)


new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function(){
  setTimeout(function(){
    window.scrollTo(0,200)
  },0)
};
// 0秒后自动往上跳200px
