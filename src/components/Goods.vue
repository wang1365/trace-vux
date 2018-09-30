<template>
  <div>
    aaaaaaaaaaaaaa
    <swiper :list="demo01_list" v-model="demo01_index" @on-index-change="onIndexChange"/>
  </div>

</template>

<script>
import { Swiper } from 'vux'
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
    Swiper
  },
  data() {
    return {
      demo01_list: baseList
    }
  },
  methods: {
    onIndexChange(e) {
      console.log('goods swiper:', e)
    }
  }
}
</script>
