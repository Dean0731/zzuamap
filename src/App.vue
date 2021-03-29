<template>
  <div id="app">
  </div>
</template>

<script>
import init from "./assets/js/amap/init";
export default {
  props:{
    "map":null
  },
  setup(){
    init("app")
  },
  methods:{
    changeCenter(){
      // var position = new AMap.LngLat(116, 39);  // 标准写法
      // // 简写 var position = [116, 39];
      // map.setCenter(position);
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