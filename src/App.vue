<template>
  <div id="app">
  </div>
</template>
<script>
import {init,initMap} from './assets/js/amap/init'
console.log(initMap,init)
export default {
  data(){
    return {
      AMap:null,
      AMapUI:null,
      Map:null
    }
  },
  created() {
    // init(this)
  },
  watch:{
    AMap(){
      console.log(this.data)
        // initMap("app",this.AMap)
    }
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
