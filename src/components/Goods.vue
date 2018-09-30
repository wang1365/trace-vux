<template>
  <div>
    <swiper :list="slideList" v-model="index" @on-index-change="onIndexChange"/>
    <br>
    <divider>黄瓜品种详情</divider>
    <card :header="{title: $t('Product details') }" :footer="{title: $t('More'),link:'/component/panel'}">
      <p slot="content" class="card-padding">aaaaa</p>
      <p slot="content" class="card-padding">aaaaa</p>
      <p slot="content" class="card-padding">aaaaa</p>
      <p slot="content" class="card-padding">aaaaa</p>
    </card>

    <br>
    <divider>{{ $t('Use header slot and content slot') }}</divider>
    <card>
      <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
      <!--<div slot="content" class="card-padding">-->
        <!--<p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>-->
        <!--<p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>-->
      <!--</div>-->
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
