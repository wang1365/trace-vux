<template>
  <tabbar class="tabbar">
    <div class="title"/>
    <tabbar-item class="search">
      <img slot="icon" src="../assets/image/actionbar_search_icon.png">
    </tabbar-item>
  </tabbar>

</template>

<script>
import { getTag } from '../vuex/getters'
import { Tabbar, TabbarItem } from 'vux'
export default{
  name: 'AppHeader',
  components: {
    Tabbar,
    TabbarItem
  },
  vuex: {
    getters: {
      // 注意在这里你需要 `getTag` 函数本身而不是它的执行结果 'getTag()'
      tag: getTag
    }
  },
  methods: {

  }
}
</script>

<style>
.tabbar{
  background-color:#00CC66;
  height:50px;
  position:relative;
}
.search{
  position:absolute;right:5px;top:5px;z-index:999;
}
.title{
  text-align:center;
  margin:auto;
  color:white;
  line-height:50px;
  font-size:18px;
}
</style>
