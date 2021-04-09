<template>
  <el-main id="app">
    <Search></Search>
    <Menu></Menu>
    <el-row id="map"></el-row>
  </el-main>
</template>
<script>
import {init} from './config/init'
import Search from "./components/Search";
import Menu from "./components/Menu";
export default {
  components: {Search,Menu},
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
  margin: 0;
  padding: 0;
  background-color: white;
}

</style>
