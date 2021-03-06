// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router/index.js'

import { TabItem } from 'vux'
import { Swiper } from 'vux'
import { SwiperItem } from 'vux'
import { Scroller } from 'vux'
import { Cell } from 'vux'
import { Group } from 'vux'
import { Tabbar, TabbarItem } from 'vux'
import { AlertPlugin } from 'vux'

import * as filters from './filters/index'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.use(AlertPlugin)
Vue.component({
  TabItem,
  Swiper,
  SwiperItem,
  Scroller,
  Cell,
  Group,
  Tabbar,
  TabbarItem
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
