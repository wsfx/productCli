// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
/**
 * 目录规范
 * components  公共组件目录
 *    展示组件    容器组件
 * router   路由配置
 * static  静态资源
 * store   vuex数据管理
 * util   公共的工具库
 * views  路由组件   ->  components 业务组件
 * 过滤器   插件
 * 
 */