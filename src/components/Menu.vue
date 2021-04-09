<template>
  <el-col :span="6" id="menu">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">卫星</el-menu-item>
      <el-submenu index="2">
        <template slot="title">路况</template>
        <el-menu-item index="2-1">路况</el-menu-item>
        <el-menu-item index="2-2">路网</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">测量</template>
        <el-menu-item index="3-1">距离</el-menu-item>
        <el-menu-item index="3-2">面积</el-menu-item>
        <el-menu-item index="3-3">关闭</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" disabled><a href="https://www.ele.me" target="_blank">其他1</a></el-menu-item>
      <el-menu-item index="5" disabled><a href="https://www.ele.me" target="_blank">其他2</a></el-menu-item>
      <el-menu-item index="6" disabled><a href="https://www.ele.me" target="_blank">其他3</a></el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
import mapType from "../plugins/mapType";
import {measureArea, rule} from "../function/mouse";

export default {
  name: "Menu",
  data(){
    return {
      mouseTool:null,
    }
  },
  methods:{
    handleSelect(index){
      let temp =  this.$store.state.MapType._config
        if(index=="1"){
          temp.defaultType = temp.defaultType==1?0:1
          mapType(this,temp)
        }else if(index=="2-1"){
          temp.showRoad= temp.showRoad==true?false:true
          mapType(this,temp)
        }else if(index=="2-2"){
          temp.showTraffic= temp.showTraffic==true?false:true
          mapType(this,temp)
        }else if(index=="3-1"){
          rule(this)
        }else if(index=="3-2"){
          measureArea(this)
        }else if(index=="3-3"){
          if(this.mouseTool!=null){
            this.mouseTool.close(true)
          }
        }
    }
  }
}
</script>

<style scoped>
#menu{
  height: 4.31%;
  position: fixed;
  z-index: 9999;
  top:1%;
  left: 70%;
}

</style>
