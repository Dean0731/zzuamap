<template>
  <el-main id="app">
    <Search></Search>
    <router-view></router-view>
    <el-row id="map"></el-row>
  </el-main>
</template>
<script>
import {init} from './config/init'
import Search from "./components/Search";
export default {
  components: {Search},
  mounted() {
    init("app",this)
  },
};

</script>
<style type="text/css">
/*使用高德地图必须设置负责不会显示*/
body,html,#app{
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
