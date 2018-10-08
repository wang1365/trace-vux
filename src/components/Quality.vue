<template>
  <div>
    <divider>相关照片</divider>
    <div v-for="src in list" :key="src" style="background-color:yellow;text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" :offset="-100" class="ximg-demo" error-class="ximg-error" container="#vux_view_box_body" @on-success="success" @on-error="error"/>
    </div>
  </div>

</template>

<script>
import { XImg, Divider } from 'vux'

export default {
  name: 'Quality',
  components: {
    XImg, Divider
  },
  props: {
    traceInfo: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      list: [
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4233979331,3794889946&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3536908889,3761973065&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=652773625,138100026&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=556062581,3715064647&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3325982607,813720956&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2766866106,3032753104&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4236848956,429813555&fm=26&gp=0.jpg'
      ]
    }
  },
  methods: {
    success(src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error(src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  }
}
</script>

<style>
  .ximg-demo {
    width: 100%;
    height: auto;
  }
  .ximg-error {
    background-color: yellow;
  }
  .ximg-error:after {
    content: '加载失败';
    color: red;
  }
</style>
