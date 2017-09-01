import Vue from 'vue'
import Router from 'vue-router'
// 组件
import Hello from '@/components/Hello'
const WeChat = r => require.ensure([], () => r(require('@/components/WeChat')), 'WeChat')
const Whome = r => require.ensure([], () => r(require('@/components/Whome')), 'Whome')
const Wtopic = r => require.ensure([], () => r(require('@/components/Wtopic')), 'Wtopic')
const Wscore = r => require.ensure([], () => r(require('@/components/Wscore')), 'Wscore')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,
    },
    {
      path: '/WeChat',
      component: WeChat,
      children: [
        {
          path: '',
          component: Whome
        },
        {
          path: 'topic',
          component: Wtopic
        },
        {
          path: 'score',
          component: Wscore
        },
      ]
    }
  ]
})
