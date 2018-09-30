<template>
  <div>
    <app-header>{{ $data }}</app-header>
    <tab :line-width="2" :index.sync="index">
      <tab-item v-for="item in taglist" :selected="tag === item" :key="item" @click="tag = item">{{ item }}</tab-item>
    </tab>
    <app-footer/>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import { incrementag } from '../vuex/actions'
import AppHeader from './Header'
import AppFooter from './Footer'

export default {
  components: {
    AppHeader,
    AppFooter,
    Tab,
    TabItem
  },
  data() {
    return {
      tag: '资讯',
      taglist: ['资讯', '博客', '问答', '活动'],
      index: 0
    }
  },
  vuex: {
    actions: {
      increment: incrementag
    }
  },
  ready() {
  },
  methods: {
  }
}
</script>

<style>
  /*@import '~vux/dist/vux.css';*/
  body{
    line-height: 1.2; /* 设置行间距为1.2 ,默认是1.6的太大*/
  }
</style>
