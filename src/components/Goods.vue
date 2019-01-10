<template>
  <div>
    <swiper :list="slideList" v-model="index" @on-index-change="onIndexChange"/>
    <div v-if="!traceInfo" class="not-found1">查询不到您所购买商品的溯源信息</div>
    <div v-if="!traceInfo" class="not-found2">请确认您的商品是从官方渠道购买~</div>
    <div v-if="traceInfo">
      <!--<card v-if="traceInfo.plantDTO" :header="{title: '您所购买产品的溯源信息' }">-->
      <!--<div slot="content" class="card-padding"><span>姓名：</span><span class="text-item1">{{ traceInfo.plantDTO.farmerName }}</span></div>-->
      <!--<div slot="content" class="card-padding"><span>地点：</span><span class="text-item1">{{ traceInfo.plantDTO.address }}</span></div>-->
      <!--<div slot="content" class="card-padding"><span>时间：</span><span class="text-item1">{{ traceInfo.plantDTO.startDate | formatDate }}</span></div>-->
      <!--<div slot="content" class="card-padding"><span>品种：</span><span class="text-item1">{{ traceInfo.plantDTO.goodsName }}</span></div>-->
      <!--<div slot="content" class="card-padding"><span>产地：</span><span class="text-item1">{{ origin }}</span></div>-->
      <!--</card>-->

      <cell
        :border-intent="false"
        :arrow-direction="showOrderCell ? 'up' : 'down'"
        title="采购信息"
        inline-desc=""
        @click.native="showOrderCell = !showOrderCell">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/image/goods/南瓜.png">
      </cell>
      <template v-if="showOrderCell">
        <cell-form-preview :border-intent="false" :list="orderData"/>
      </template>

      <cell
        :border-intent="false"
        :arrow-direction="showPlantCell ? 'up' : 'down'"
        title="种植信息"
        @click.native="showPlantCell = !showPlantCell">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/image/goods/S-农业.png">
      </cell>
      <template v-if="showPlantCell">
        <cell-form-preview :border-intent="false" :list="plantData"/>
      </template>

      <cell
        :border-intent="false"
        :arrow-direction="showTableCell ? 'up' : 'down'"
        title="种植流程"
        @click.native="showTableCell = !showTableCell">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/image/goods/生产流程.png">
      </cell>
      <x-table v-if="showTableCell" slot="content" :cell-bordered="false" style="width:100%;margin:0 20px 0 0px;background-color:#fff;">
        <thead>
          <tr>
            <th style="width: 10%">No</th>
            <th style="width: 30%">日期</th>
            <th style="width: 70%;padding-right:10px;text-align: right">种植流程</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in traceInfo.plantItemDTOList" :key="index">
          <tr>
            <td style="font-size:14px">{{ index + 1 }}</td>
            <td>{{ item.actionDate | formatDate }}</td>
            <td style="color:green;padding-right:10px;text-align: right">{{ item.actionName + (item.actionContent ? ':' + item.actionContent : '') }}</td>
          </tr>
        </tbody>
      </x-table>

      <cell
        :border-intent="false"
        :arrow-direction="showLineCell ? 'up' : 'down'"
        title="种植时间轴"
        is-link
        @click.native="showLineCell = !showLineCell">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/image/goods/icon_流程配置.png">
      </cell>
      <flow v-if="showLineCell" slot="content" orientation="vertical" style="height:200px;margin-right:200px" title="流程">
        <flow-state :title="traceInfo.plantDTO.farmerName" state="" is-done/>
        <template v-for="(item, index) in traceInfo.plantItemDTOList" >
          <flow-line :key="2*index" is-done tip-direction="left"/>
          <flow-state :state="index+1" :span="50" :key="2*index+1" :title="getItemInfo(item)" is-done/>
        </template>
      </flow>
      <!--<template v-for="(item, index) in traceInfo.plantItemDTOList" >-->
      <!--<card :header="{title: '种植条目'+(index+1) }" :key="item.id">-->
      <!--<div slot="content" class="card-padding"><span>姓名：</span><span class="text-item">{{ item.farmerName }}</span></div>-->
      <!--<div slot="content" class="card-padding"><span>操作：</span><span class="text-item">{{ item.actionName }}</span></div>-->
      <!--<div slot="content" class="card-padding"><span>时间：</span><span class="text-item">{{ item.actionDate | formatDate }}</span></div>-->
      <!--<div slot="content" class="card-padding"><span>描述：</span><span class="text-item">{{ item.actionContent }}</span></div>-->
      <!--</card>-->
      <!--</template>-->
    </div>
    <divider>---</divider>
    <br>
    <br>
  </div>

</template>

<script>
import { Swiper, Divider, Card, XTable, Flow, FlowState, FlowLine, Cell, CellFormPreview } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'http://img0.imgtn.bdimg.com/it/u=1432350417,449077377&fm=26&gp=0.jpg'
}, {
  url: 'javascript:',
  img: 'http://img0.imgtn.bdimg.com/it/u=3089978324,4168163468&fm=26&gp=0.jpg'
}, {
  url: 'javascript:',
  img: 'http://img2.imgtn.bdimg.com/it/u=869723110,4275175310&fm=26&gp=0.jpg', // 404
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]

export default {
  name: 'Goods',
  components: {
    Swiper, Divider, Card, XTable, Flow, FlowState, FlowLine, Cell, CellFormPreview
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
      index: 0,
      showOrderCell: true,
      showPlantCell: true,
      showTableCell: true,
      showLineCell: true,
      orderData: [],
      plantData: []
    }
  },
  computed: {
    origin() {
      return this.traceInfo ? this.traceInfo.tenant.name : '寿光蔬菜高科技示范园'
    }
  },
  watch: {
    traceInfo() {
      if (!this.traceInfo) {
        return
      }
      const order = this.traceInfo.orderDTO
      this.orderData.push({ label: '采购人', value: order.buyerName })
      this.orderData.push({ label: '农户', value: order.sellerName })
      this.orderData.push({ label: '采购时间', value: this.$options.filters.formatDate(order.orderTime) })
      this.orderData.push({ label: '采购地点', value: order.address })
      this.orderData.push({ label: '品种', value: order.goodsName })

      const plant = this.traceInfo.plantDTO
      this.plantData.push({ label: '农户', value: plant.farmerName })
      this.plantData.push({ label: '种植时间', value: this.$options.filters.formatDate(plant.startDate) })
      this.plantData.push({ label: '种植地点', value: plant.address })
      this.plantData.push({ label: '品种', value: plant.goodsName })

      const goods = this.traceInfo.goods
      this.slideList = []
      this.slideList.push({ url: 'javascript:', img: goods.url1 ? goods.url1 : baseList[0].img })
      this.slideList.push({ url: 'javascript:', img: goods.url2 ? goods.url2 : baseList[1].img })
      this.slideList.push({ url: 'javascript:', img: goods.url3 ? goods.url3 : baseList[2].img })
    }
  },
  mounted() {
  },
  methods: {
    onIndexChange(e) {
      console.log('goods swiper:', e)
    },
    getItemInfo(item) {
      return this.$options.filters.formatDate(item.actionDate) + ',' +
      item.actionName + (item.actionContent ? ':' + item.actionContent : '')
    }
  }
}
</script>

<style scoped lang="less">
  /*@import '~vux/src/styles/1px.less';*/

  /*.text-item {*/
    /*text-align: right;*/
  /*}*/
  /*.card-demo-flex {*/
    /*display: flex;*/
  /*}*/
  /*.card-demo-content01 {*/
    /*padding: 10px 0;*/
  /*}*/
  /*.card-padding {*/
    /*padding: 15px;*/
  /*}*/
  /*.card-demo-flex > div {*/
    /*flex: 1;*/
    /*text-align: center;*/
    /*font-size: 12px;*/
  /*}*/
  /*.card-demo-flex span {*/
    /*color: #f74c31;*/
  /*}*/
  th {
    font-size:14px;
    color: gray;
  }
  td {
    font-size:14px;
    color: gray;
  }
  .not-found1 {
    margin: 20px 0 auto;
    text-align: center;
    font-size: 20px;
    color: red;
  }
  .not-found2 {
    margin: 20px 0 auto;
    text-align: center;
    font-size: 18px;
  }
</style>
