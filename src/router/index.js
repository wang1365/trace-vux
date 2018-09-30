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
      redirect: 'goods',
      component: Home,
      children: [
        {
          path: 'goods',
          name: 'goods',
          component: Goods
        },
        {
          path: 'quality',
          name: 'quality',
          component: Quality
        },
        {
          path: 'plant',
          name: 'plant',
          component: Plant
        },
        {
          path: 'origin',
          name: 'origin',
          component: Origin
        }
      ]
    }

  ]
})
