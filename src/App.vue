<template>
  <div id="app">
  </div>
</template>

<script>
import AMap from "./assets/js/amap/init";
import {onBeforeMount} from 'vue'
export default {
  setup(){
    onBeforeMount(()=>{
      console.log(AMap)
      AMap.then(res=>{
        console.log(res)
      })
        // AMapLoader().then((AMap)=>{
        //   let map = new AMap.Map("app", {
        //     center: [113.638826,34.742979],
        //     layers: [//使用多个图层
        //       new AMap.TileLayer.Satellite(),
        //       // new AMap.TileLayer.RoadNet()
        //     ],
        //     zooms: [4,1000],//设置地图级别范围
        //     zoom: 10
        //   });
        //
        //   map.on('complete', function(){
        //     // 地图图块加载完成后触发
        //     console.log("map complate!");
        //   });
        //   ref(null).map = map;
        //   console.info("new map success:"+map)
        //   return ref(map)
        // }).catch(e => {
        //   console.log(e);
        // })
    })
  },
  methods:{
    getMap(){
      console.log(this.$data)
    }
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