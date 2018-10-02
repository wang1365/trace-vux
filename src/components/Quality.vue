<template>
  <div>
    <div v-for="src in list" :key="src" style="background-color:yellow;text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" :offset="-100" class="ximg-demo" error-class="ximg-error" container="#vux_view_box_body" @on-success="success" @on-error="error"/>
    </div>
  </div>

</template>

<script>
import { XImg } from 'vux'

export default {
  name: 'Quality',
  components: {
    XImg
  },
  data() {
    return {
      list: [
        'https://o5omsejde.qnssl.com/demo/test1.jpg',
        'https://o5omsejde.qnssl.com/demo/test2.jpg',
        'https://o5omsejde.qnssl.com/demo/test4.jpg',
        'https://o5omsejde.qnssl.com/demo/test5.jpg',
        'https://o5omsejde.qnssl.com/demo/test6.jpg',
        'https://o5omsejde.qnssl.com/demo/test7.jpg',
        'https://o5omsejde.qnssl.com/demo/test8.jpg'
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
