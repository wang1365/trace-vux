import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Goods from '@/components/Goods'
import Quality from '@/components/Quality'
import Origin from '@/components/Origin'
import Plant from '@/components/Plant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'goods/0',
      component: Home,
      children: [
        {
          path: 'goods/:id',
          name: 'goods',
          component: Goods
        },
        {
          path: 'quality/:id',
          name: 'quality',
          component: Quality
        },
        {
          path: 'plant/:id',
          name: 'plant',
          component: Plant
        },
        {
          path: 'origin/:id',
          name: 'origin',
          component: Origin
        }
      ]
    }
  ]
})
