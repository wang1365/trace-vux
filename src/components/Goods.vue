<template>
  <div>
    <swiper :list="slideList" v-model="index" @on-index-change="onIndexChange"/>

    <div v-if="traceInfo">
      <card v-if="traceInfo.plantDTO" :header="{title: '您所购买产品的溯源信息' }">
        <div slot="content" class="card-padding"><span>姓名：</span><span class="text-item1">{{ traceInfo.plantDTO.farmerName }}</span></div>
        <div slot="content" class="card-padding"><span>地点：</span><span class="text-item1">{{ traceInfo.plantDTO.address }}</span></div>
        <div slot="content" class="card-padding"><span>时间：</span><span class="text-item1">{{ traceInfo.plantDTO.startDate | formatDate }}</span></div>
        <div slot="content" class="card-padding"><span>品种：</span><span class="text-item1">{{ traceInfo.plantDTO.goodsName }}</span></div>
        <div slot="content" class="card-padding"><span>产地：</span><span class="text-item1">{{ origin }}</span></div>
      </card>
      <template v-for="(item, index) in traceInfo.plantItemDTOList" >
        <card :header="{title: '种植条目'+(index+1) }" :key="item.id">
          <div slot="content" class="card-padding"><span>姓名：</span><span class="text-item">{{ item.farmerName }}</span></div>
          <div slot="content" class="card-padding"><span>操作：</span><span class="text-item">{{ item.actionName }}</span></div>
          <div slot="content" class="card-padding"><span>时间：</span><span class="text-item">{{ item.actionDate | formatDate }}</span></div>
          <div slot="content" class="card-padding"><span>描述：</span><span class="text-item">{{ item.actionContent }}</span></div>
        </card>
      </template>
    </div>
    <br>
  </div>

</template>

<script>
import { Swiper, Divider, Card } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'http://img0.imgtn.bdimg.com/it/u=1432350417,449077377&fm=26&gp=0.jpg'
}, {
  url: 'javascript:',
  img: 'http://img0.imgtn.bdimg.com/it/u=2913072137,2479013543&fm=26&gp=0.jpg'
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
  computed: {
    origin() {
      return this.traceInfo ? this.traceInfo.tenant.name : '寿光蔬菜高科技示范园'
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
