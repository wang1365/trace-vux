<template>
  <div>
    <!--<x-header :left-options="{showBack: false}">{{ title }}</x-header>-->
    <x-header :left-options="{showBack: false}" style="background-color:#0A4502;">寿光蔬菜，品质生活</x-header>
    <!-- <app-header>{{ $data }}</app-header> -->
    <router-view :key="key" :trace-info="traceInfo"/>
    <app-footer :index.sync="footerIndex" @on-index-change="onFooterIndexChange" @show-query="onClickQuery"/>
    <alert v-model="showPop" title="友情提示" > 查询不到生产批次:{{ id }} 对应的溯源信息！</alert>
    <div v-transfer-dom>
      <confirm
        v-model="showIdInput"
        :input-attrs="{type: 'number'}"
        show-input
        hide-on-blur
        title="溯源查询"
        placeholder="请输入生产批次号"
        @on-confirm="onConfirmQuery"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { XHeader, Tab, TabItem, Alert, Confirm, TransferDomDirective as TransferDom } from 'vux'
// import { setId, incrementag } from '../vuex/actions'
// import AppHeader from './Header'
import AppFooter from './Footer'
import Goods from './Goods'
import Quality from './Quality'
import { getTraceInfoByOrder } from '@/api/traceInfo'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Alert,
    Confirm,
    // AppHeader,
    AppFooter,
    Tab,
    TabItem,
    Goods,
    Quality
  },
  data() {
    return {
      footerIndex: 0,
      showPop: false,
      showIdInput: false,
      traceInfo: null
    }
  },
  computed: {
    key() {
      return this.$route.fullPath
    },
    title() {
      return ['产品信息', '产地信息', '直接查询', '种植信息', '质检报告'][this.footerIndex]
    },
    id() {
      return this.$route.params.id || ''
    }
  },
  watch: {
    footerIndex(newIndex) {
      const id = this.$route.params.id
      // if (newIndex === 2) {
      //   // this.showIdInput = true
      // } else {
      const page = [
        { name: 'goods', id },
        { name: 'origin', id },
        // {},
        { name: 'plant', id },
        { name: 'quality', id }
      ][newIndex]
      console.log('subPage is:', newIndex, page)
      this.$router.push(page)
      // }
    },
    '$route'(to, from) {
      this.updateTraceInfo()
    }
  },
  ready() {
  },
  mounted() {
    this.updateTraceInfo()
  },
  methods: {
    ...mapActions([
      'setId'
    ]),
    onFooterIndexChange(e) {
      console.log('########')
      console.log(e)
    },
    onConfirmQuery(id) {
      console.log('id:', id)
      if (!id) {
        this.$vux.alert.show({
          title: '提示',
          content: '请输入有效的ID！'
        })
      } else {
        this.$router.push(`/goods/${id}`)
      }
    },
    onClickQuery() {
      console.log('home onClickQuery', this.showIdInput)
      this.showIdInput = true
    },
    updateTraceInfo() {
      const orderId = this.$route.params.id
      console.log('updateTraceInfo for order:', orderId)
      getTraceInfoByOrder(orderId).then(res => {
        this.traceInfo = res.data.data
      }).catch(err => {
        console.log('Get trace info failed:', err)
      })
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
