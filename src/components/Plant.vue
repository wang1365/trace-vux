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
  </div>

</template>

<script>
import { Swiper, Divider } from 'vux'

export default {
  name: 'Plant',
  components: {
    Swiper, Divider
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
