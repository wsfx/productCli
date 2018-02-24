import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '@/store'

import Home from '@/views/Home'
import Shop from '@/views/Shop'
import ShopList from '@/views/Shop/children/ShopList'
import AddShop from '@/views/Shop/children/AddShop'

import Operate from '@/views/Operate'
import FoodEntry from '@/views/Operate/children/FoodEntry'

import User from '@/views/User'

import Login from '@/views/Login'
import Fetch from '@/util/Fetch'


Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: {
        isFull: true
      },
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '系统首页',
        icon: ''
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta: {
        title: '商铺管理',
        icon: ''
      },
      children: [
        {
          path: 'shop_list',
          name: 'ShopList',
          component: ShopList,
          meta: {
            title: '商铺列表',
            icon: ''
          }
        },
        {
          path: 'add_shop',
          name: 'AddShop',
          component: AddShop,
          meta: {
            title: '商铺审核',
            icon: ''
          }
        }
      ]
    },
    {
      path: '/operate',
      name: 'Operate',
      component: Operate,
      meta: {
        title: '运营配置',
        icon: ''
      },
      children: [
        {
          path: 'food_entry',
          name: 'FoodEntry',
          component: FoodEntry,
          meta: {
            title: '分类管理',
            icon: ''
          }
        }
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        title: '用户管理',
        icon: ''
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录',
        icon: '',
        isFull: true,
        noLogin: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (from.path == '/') {
    next()
  }
  
  let isLogin = window.localStorage.getItem('user')
  // fetch('/api/user/getUserInfo',{
  //   credentials: 'same-origin',
  //   mode: 'same-origin',
  //   headers: new Headers({
  //     'to': 'image/jpeg',
  //     'Accept-Charset': 'utf-8'
  //   })
  // }).then((response) => {
  //   console.log(response)
  //   return response.json()
  // }).then((data) => {
  //   console.log(data)
  // })

  // Fetch.get('/api/user/getUserInfo', {
  //   name: 'aaaa'
  // }).then((data) => {
  //   console.log(from.path)
  //   // if (from.path == '/') {
  //   //   next('/home')
  //   // } else {
  //     next()
  //   // }
  // }, (error) => {
  //   console.log(error)
  //   if (to.meta.noLogin) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // })
    store.dispatch('base/getUserInfo').then((data) => {
      console.log(data)
      // if (from.path == '/') {
      //   next('/home')
      // } else {
        next()
      // }
    }, (data) => {
      if (to.meta.noLogin) {
        next()
      } else {
        next('/login')
      }
    })
  // this.a.app.$axios.get('/api/user/getUserInfo').then((data) => {
    
  // }, (error) => {
  //   console.log('aaaa')
    
  // })
})

/**
 * fetch优点
 * 简单，是一个window的方法，可以直接使用；
 * 基于Promise设计的api， 支持 async/await
 * 可以操作cookie，控制cookie是否可以发送
 * 缺点
 * 存在兼容问题
 * 服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
 * 
 * fetch的用法
 * fetch(String url [, Object options]);
 *      method：请求的方法，如： GET、 POST
 *      headers：请求头部信息，可以是一个 Headers 对象的实例，也可以是一个简单对象
 *      body: 需要发送的数据  相当于ajax里面的data （可以是FormData，URLSearchParams），需要注意的是 GET传值不是写在body上，而是写在url地址上的
 *      mode: 控制跨域
 *      credentials： 控制cookie

 * fetch 方法的第一个参数可以是 Request 对象，也可以是一个 url，第二个参数可选，包含一些配置信息。fetch 方法返回 Promise。
 * fetch返回的是一个Promise，Promise接收的一个response响应内容
 * 
 * response可以通过  json()  text() 方法在返回一个Promise， 可以接收成功失败的返回值
 */

export default router
