<template>
  <tabbar>
    <tabbar-item selected>
      <img slot="icon-active" src="../assets/image/ic_nav_news_actived.png">
      <img slot="icon" src="../assets/image/ic_nav_news_normal.png">
      <span slot="label">综合</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="../assets/image/ic_nav_tweet_normal.png">
      <img slot="icon-active" src="../assets/image/ic_nav_tweet_actived.png">
      <span slot="label">动弹</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="../assets/image/ic_nav_discover_normal.png">
      <img slot="icon-active" src="../assets/image/ic_nav_discover_actived.png">
      <span slot="label">发现</span>
    </tabbar-item>
    <tabbar-item>
      <img slot="icon" src="../assets/image/ic_nav_my_normal.png">
      <img slot="icon-active" src="../assets/image/ic_nav_my_pressed.png">
      <span slot="label">我的</span>
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
  data() {
    return {
      msg: ''
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
