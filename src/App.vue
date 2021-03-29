<template>
  <div id="app">
  </div>
</template>

<script>
import module from "@/assets/js/amap/init"

export default {
  data(){
    return {
      "Map":null
    }
  },
  mounted() {
    console.log(module)
    let AMap = module.$data.AMap;
      let map = new AMap.Map('app', {
        center: [113.638826,34.742979],
        layers: [//使用多个图层
          // new AMap.TileLayer.Satellite(),
          // new AMap.TileLayer.RoadNet()
        ],
        zooms: [4,1000],//设置地图级别范围
        zoom: 50
      });
      console.log(map)
  }
};

</script>
<style type="text/css">
/*使用高德地图必须设置负责不会显示*/
body,html,#app{
  width: 100%;
  height: 100%;
  margin: 0px
}
</style>