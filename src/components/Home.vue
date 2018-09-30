<template>
  <div>
    <x-header :left-options="{showBack: false}">{{ title }}</x-header>
    <app-header>{{ $data }}</app-header>
    <router-view :key="key"/>
    <app-footer :index.sync="footerIndex" @on-index-change="onFooterIndexChange"/>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem } from 'vux'
import { incrementag } from '../vuex/actions'
import AppHeader from './Header'
import AppFooter from './Footer'
import Goods from './Goods'
import Quality from './Quality'

export default {
  components: {
    XHeader,
    AppHeader,
    AppFooter,
    Tab,
    TabItem,
    Goods,
    Quality
  },
  data() {
    return {
      tag: '资讯',
      taglist: ['资讯', '博客', '问答', '活动'],
      footerIndex: 0,
    }
  },
  computed: {
    key() {
      return this.$route.fullPath
    },
    title() {
      return ['产品信息', '产地信息', '种植信息', '质检报告'][this.footerIndex]
    }
  },
  watch: {
    footerIndex(newIndex) {
      const page = ['/goods', '/origin', '/plant', '/quality'][newIndex]
      console.log('subPage is:', newIndex, page)
      this.$router.push(page)
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
    onFooterIndexChange(e) {
      console.log('########')
      console.log(e)
    }
  }
}
</script>

<style>
  /*@import '~vux/dist/vux.css';*/
  body{
    line-height: 1.2; /* 设置行间距为1.2 ,默认是1.6的太大*/
  }
</style>
