<template>
  <tabbar ref="bar" @on-index-change="onIndexChange">
    <tabbar-item selected>
      <img slot="icon-active" src="../assets/image/ic_nav_news_actived.png">
      <img slot="icon" src="../assets/image/ic_nav_news_normal.png">
      <span slot="label">产品</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="../assets/image/ic_nav_tweet_normal.png">
      <img slot="icon-active" src="../assets/image/ic_nav_tweet_actived.png">
      <span slot="label">产地</span>
    </tabbar-item>
    <tabbar-item @on-item-click="onClickQuery">
      <x-icon slot="icon" type="ios-search" size="30"/>
      <x-icon slot="icon-active" type="ios-search-strong" size="30"/>
      <span slot="label">查询</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="../assets/image/ic_nav_discover_normal.png">
      <img slot="icon-active" src="../assets/image/ic_nav_discover_actived.png">
      <span slot="label">种植</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="../assets/image/ic_nav_my_normal.png">
      <img slot="icon-active" src="../assets/image/ic_nav_my_pressed.png">
      <span slot="label">品质</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem, TransferDom } from 'vux'
export default{
  name: 'AppFooter',
  directives: {
    TransferDom
  },
  components: {
    Tabbar,
    TabbarItem
  },
  props: {
    index: { type: Number, default: 0 }
  },
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
  },
  methods: {
    onIndexChange(index) {
      console.log('Tab bar changes:', index)
      this.$emit('update:index', index)
    },
    onClickQuery() {
      this.$emit('show-query')
    }
  }
}
</script>

<style>
  .add{
    height:40px;
    width:40px;
  }
   .weui-tabbar {
     position: fixed !important;
   }
</style>
