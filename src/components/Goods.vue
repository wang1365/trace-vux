<template>
  <div>
    <swiper :list="slideList" v-model="index" @on-index-change="onIndexChange"/>
    <br>
    <divider>黄瓜品种详情</divider>
    <card :header="{title: '品种：' }" :footer="{title: '查看更多...',link:'/component/panel'}">
      <div slot="content" class="card-padding"><span>品    名：</span><span class="text-item">无刺黄瓜</span> </div>
      <div slot="content" class="card-padding"><span>品种纯度：</span><span class="text-item">100%</span> </div>
      <div slot="content" class="card-padding"><span>级    别：</span><span class="text-item">一级良种</span> </div>
      <div slot="content" class="card-padding"><span>品    牌：</span><span class="text-item">中科茂华</span> </div>
      <div slot="content" class="card-padding"><span>厂    家：</span><span class="text-item">河北茂华种业有限公司</span> </div>
      <div slot="content" class="card-padding"><span>品种纯度：</span><span class="text-item">100%</span> </div>
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

    <br>
    <divider>订单</divider>
    <card v-if="traceInfo">
      <div slot="content" class="card-padding">
        <p style="color:#999;font-size:12px;">{{ traceInfo.orderId }}</p>
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
  img: 'http://img0.imgtn.bdimg.com/it/u=1432350417,449077377&fm=26&gp=0.jpg',
}, {
  url: 'javascript:',
  img: 'http://img0.imgtn.bdimg.com/it/u=2913072137,2479013543&fm=26&gp=0.jpg',
}, {
  url: 'javascript:',
  img: 'http://img2.imgtn.bdimg.com/it/u=869723110,4275175310&fm=26&gp=0.jpg', // 404
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]

export default {
  name: 'Goods',
  components: {
    Swiper, Divider, Card
  },
  props: {
    traceInfo: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      slideList: baseList,
      index: 0
    }
  },
  mounted() {
    console.log('check trace info:', this.traceInfo)
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
