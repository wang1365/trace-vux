<template>
  <div class="container">
    <divider>商品产地：山东省寿光市文家街道桑家村</divider>
    <!--<TraceMap :height="height" :longitude="longitude" :latitude="latitude"/>-->
    <div id="tracemap" ref="allmap"/>
  </div>

</template>

<script>
import { Swiper, Divider } from 'vux'
import BMap from 'BMap'

export default {
  name: 'Origin',
  components: {
    Swiper,
    Divider,
    BMap
  },
  data() {
    return {
      map: null
    }
  },
  mounted() {
    // this.ready()
    this.$nextTick(this.ready())
  },
  methods: {
    ready() {
      const map = new BMap.Map('tracemap')
      this.map = map
      const point = new BMap.Point(118.717328, 36.917346)
      map.setCurrentCity('潍坊')
      map.centerAndZoom(point, 14)
      map.addControl(new BMap.MapTypeControl())
      map.enableScrollWheelZoom(true)
      map.enableDoubleClickZoom(true)
      const marker = new BMap.Marker(point)
      map.addOverlay(marker)

      var label = new BMap.Label('产地：山东省寿光市文家街道桑家村', { 'offset': new BMap.Size(-30, -20) })
      marker.setLabel(label)
      map.addOverlay(marker)
      label.setStyle({
        borderColor: '#808080',
        color: '#333',
        cursor: 'pointer'
      })
    }
  }
}
</script>

<style scoped  lang="less">
  /*@import '~vux/src/styles/1px.less';*/
  #tracemap {
    height: 250px;
    width: 100%;
  }
</style>
