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
import tagListModel from './models/tagListModel'



Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)


window.tagList = tagListModel.fetch()
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === "duplicated") {
    window.alert("标签名重复");
  } else if (message === 'success') {
    window.alert('添加成功')
  }
}


new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
