<template>
  <div>
    <app-header>{{ $data }}</app-header>
    <tab :line-width="2" :index.sync="index">
      <tab-item v-for="item in taglist" :selected="tag === item" :key="item" @click="tag = item">{{ item }}</tab-item>
    </tab>
    <router-view :key="key"/>
    <app-footer :index.sync="footerIndex" @on-index-change="onFooterIndexChange"/>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import { incrementag } from '../vuex/actions'
import AppHeader from './Header'
import AppFooter from './Footer'
import Goods from './Goods'
import Quality from './Quality'

export default {
  components: {
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
      subPage: ''
    }
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
  watch: {
    footerIndex(newIndex) {
      let page = ''
      if (newIndex === 0) {
        page = '/goods'
      } else {
        page = '/quality'
      }

      console.log('subPage is:', newIndex, page)
      this.$router.push(page)
      this.subPage = page
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
