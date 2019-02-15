import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home/index'
import list from '@/components/home/list'
import suggest from '@/components/home/suggest'
import add from '@/components/home/add'
import study from '@/components/study/index'
import example from '@/components/study/example'
import mine from '@/components/mine/index'
import record from '@/components/mine/record'
import flag from '@/components/mine/flag'
import plot from '@/components/plot/index'
import putTalk from '@/components/plot/putTalk'
import foot from '@/components/sharing/foot'
import scroll from '@/components/sharing/scroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'study',
      component: study
    },
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index
    // },
    {
      path: '/study',
      name: 'study',
      component: study
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/home/add',
      name: 'add',
      component: add
    },
    {
      path: '/home/list',
      name: 'list',
      component: list
    },
    {
      path: '/home/suggest',
      name: 'suggest',
      component: suggest
    },
    {
      path: '/study/example',
      name: 'example',
      component: example
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/mine/record',
      name: 'record',
      component: record
    },
    {
      path: '/mine/flag',
      name: 'flag',
      component: flag
    },
    {
      path: '/plot',
      name: 'plot',
      component: plot
    },
    {
      path: '/plot/putTalk',
      name: 'putTalk',
      component: putTalk
    },
    {
      path: '/foot',
      name: 'Foot',
      component: foot
    },
    {
      path: '/scroll',
      name: 'Scroll',
      component: scroll
    }
  ]
})
