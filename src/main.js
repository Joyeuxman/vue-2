// 入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './tools/rem'
import './style/common'

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

//???难点1 不能在index.html中添加router-view
// 不然router-view渲染不出页面
new Vue({
  el: '#app',//挂载元素
  store,//vuex的状态管理
  router,//路由
  template: '<App/>',//渲染内容 ???必须要加
  components: { App }//渲染组件 ???必须要加
})
