<template>
  <div id="app">
    <Search @getSubInput="getSubInput($event)"></Search>
    <div id="map"></div>
  </div>
</template>
<script>
import {init,initMap} from './assets/js/amap/init'
import Search from "./components/Search";
import {search} from "./assets/js/amap/tool";
import {autoComplete} from "./assets/js/amap/config";
export default {
  components: {Search},
  data(){
    return {
      AMap:null,
      AMapUI:null,
      Map:null,
      Autocomplete:null,
    }
  },
  created() {
    // 创建AMap,AMapUI,
    init(this)
  },
  watch:{
    AMap(){
      // 实例化基础Map
      this.Map = initMap("app",this.AMap)
      this.$log.debug("Map init success")
      if(this.Autocomplete == null){
        this.Autocomplete = autoComplete(this.AMap,this.Map)
        this.$log.debug("autocomplete load end!")
      }
    },
    AMapUI(){

    },
    Map(){
    }
  },
  methods:{
    getSubInput(data){
      search(data,this)
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
