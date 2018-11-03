<template>
  <div class="container">
    <divider>{{ title }}</divider>
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
  props: {
    traceInfo: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      map: null
    }
  },
  computed: {
    title() {
      return '商品产地：' + (this.traceInfo ? this.traceInfo.tenant.name : '寿光蔬菜高科技示范园')
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
      const lon = this.traceInfo ? this.traceInfo.tenant.lon : 118.826487
      const lat = this.traceInfo ? this.traceInfo.tenant.lat : 36.865415
      const tenantName = this.traceInfo ? this.traceInfo.tenant.name : '寿光蔬菜高科技示范园'

      const point = new BMap.Point(lon, lat)
      map.setCurrentCity('潍坊')
      map.centerAndZoom(point, 14)
      map.addControl(new BMap.MapTypeControl())
      map.enableScrollWheelZoom(true)
      map.enableDoubleClickZoom(true)
      const marker = new BMap.Marker(point)
      map.addOverlay(marker)

      var label = new BMap.Label(`产地: ${tenantName}`, { 'offset': new BMap.Size(-30, -20) })
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
    height: 100% - 20px;
    width: 100%;
    position: absolute;
  }
</style>
