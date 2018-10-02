<template>
  <div>
    山东省寿光市文家街道桑家村
    <!--<TraceMap :height="height" :longitude="longitude" :latitude="latitude"/>-->
    <div id="tracemap" ref="allmap"/>
  </div>

</template>

<script>
import { Swiper } from 'vux'
import BMap from 'BMap'

export default {
  name: 'Origin',
  components: {
    Swiper,
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
      const point = new BMap.Point(132.1569, 43.87192)
      map.setCurrentCity('潍坊')
      map.centerAndZoom(point, 10)
      map.addControl(new BMap.MapTypeControl())
      map.enableScrollWheelZoom(true)
      map.enableDoubleClickZoom(true)
      const marker = new BMap.Marker(point)
      map.addOverlay(marker)
    }

  }
}
</script>

<style scoped>
  #tracemap {
    height: 300px;
    width: 100%;
  }
</style>
