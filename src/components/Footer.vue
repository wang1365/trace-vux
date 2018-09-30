<template>
  <tabbar @on-index-change="onIndexChange">
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
import { Tabbar, TabbarItem } from 'vux'
export default{
  name: 'AppFooter',
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
  methods: {
    onIndexChange(index) {
      console.log('Tab bar changes:', index)
      this.$emit('update:index', index)
    }
  }
}
</script>

<style>
  .add{
    height:40px;
    width:40px;
  }
</style>
