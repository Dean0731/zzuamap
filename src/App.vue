<template>
  <div id="app">
    <Search v-bind:vue="vue" ref="search"></Search>
    <div id="map"></div>
  </div>
</template>
<script>
import {init, initMap, initPlugins} from './assets/js/init/init'
import Search from "./components/Search";
export default {
  components: {Search},
  data(){
    return {
      AMap:null,
      AMapUI:null,
      Map:null,
      vue:this
    }
  },
  created() {
    // 创建AMap,AMapUI,
    init(this)
  },
  watch:{
    AMap(){
      // 实例化基础Map
      initMap("app",this)
      // 为map加载插件
      initPlugins(this)
      // 初始化Search
      this.$refs.search.init()
    },

  },
  methods:{

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
