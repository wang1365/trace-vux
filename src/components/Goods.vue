<template>
  <div>
    <swiper :list="slideList" v-model="index" @on-index-change="onIndexChange"/>
    <br>
    <divider>黄瓜品种详情</divider>
    <card :header="{title: '品种：' }" :footer="{title: '查看更多...',link:'/component/panel'}">
      <span slot="content" class="card-padding">品名： 无刺黄瓜</span>
      <div slot="content" class="card-item"><span class="text-item">品名：</span><span>无刺黄瓜</span> </div>
      <div slot="content" class="card-item"><span class="text-item">品种纯度：</span><span>100%</span> </div>
      <p slot="content" class="card-padding">级别： 一级良种</p>
      <p slot="content" class="card-padding">品种纯度： 100%</p>
      <p slot="content" class="card-padding">品牌： 中科茂华</p>
      <p slot="content" class="card-padding">产地/厂家： 河北茂华种业有限公司</p>
    </card>

    <br>
    <divider>生产详情</divider>
    <card>
      <img slot="header" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1221213920,2160606380&fm=26&gp=0.jpg" style="width:100%;display:block;">
      <div slot="content" class="card-padding">
        <p style="color:#999;font-size:12px;">采摘于 2018年9月26日</p>
        <p style="font-size:14px;line-height:1.2;">生产地： 山东省寿光市文家街道桑家村</p>
        <br><br>
      </div>
    </card>
  </div>

</template>

<script>
import { Swiper, Divider, Card } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '高荣军'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '王晓川'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '王晓森',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]

export default {
  name: 'Goods',
  components: {
    Swiper, Divider, Card
  },
  data() {
    return {
      slideList: baseList,
      index: 0
    }
  },
  methods: {
    onIndexChange(e) {
      console.log('goods swiper:', e)
    }
  }
}
</script>

<style scoped lang="less">
  @import '~vux/src/styles/1px.less';

  .text-item {
    text-align: right;
    width: 200px;
    display: block;
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
</style>
