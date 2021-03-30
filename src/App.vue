<template>
  <div id="app">
  </div>
</template>
<script>
import init from './assets/js/amap/init'
import loader from "./assets/js/amap/amap";
import {onBeforeMount, } from "vue";
export default {
  setup(){
    onBeforeMount(()=>{
      let map = init("app")
      loader.then((AMap)=>{
        AMap.plugin(['AMap.ToolBar','AMap.MapType'],function(){//异步加载插件
          var toolbar = new AMap.ToolBar()
          var mapType = new AMap.MapType()
          map.then(map=>{
            map.addControl(toolbar)
            map.addControl(mapType)
          })
        });
      })
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
