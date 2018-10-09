<template>
  <div>
    <divider>相关视频</divider>
    <video style="height: 100%;width: 100%" controls poster="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=583902322,1013386853&fm=26&gp=0.jpg">
      <source src="http://ips.ifeng.com/video19.ifeng.com/video09/2018/04/19/25603882-102-9987625-025625.mp4">
    </video>
    <divider>视频2</divider>
    <video style="height: 100%;width: 100%" controls poster="http://img0.imgtn.bdimg.com/it/u=2264166786,3696145444&fm=26&gp=0.jpg">
      <source src="http://ips.ifeng.com/video19.ifeng.com/video09/2018/09/23/v47391907-102-009-064951.mp4">
    </video>
    <br>
    <divider v-if="traceInfo">订单ID: {{ traceInfo.orderId }}</divider>
    <div v-if="traceInfo">
      <card v-if="traceInfo.plantDTO" :header="{title: '年度种植计划' }">
        <div slot="content" class="card-padding"><span>姓名：</span><span class="text-item1">{{ traceInfo.plantDTO.farmerName }}</span></div>
        <div slot="content" class="card-padding"><span>地点：</span><span class="text-item1">{{ traceInfo.plantDTO.address }}</span></div>
        <div slot="content" class="card-padding"><span>时间：</span><span class="text-item1">{{ traceInfo.plantDTO.startDate | formatDate }}</span></div>
        <div slot="content" class="card-padding"><span>品种：</span><span class="text-item1">{{ traceInfo.plantDTO.goodsName }}</span></div>
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
    <br>
    <divider>---</divider>
  </div>

</template>

<script>
import { Swiper, Divider, Card } from 'vux'

export default {
  name: 'Plant',
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
    }
  }
}
</script>

<style scoped lang="less">
  @import '~vux/src/styles/1px.less';

  .text-item {
    text-align: right;
    color: darkgreen;
  }

  .text-item1 {
    text-align: right;
    color: green;
  }
  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 10px;
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
