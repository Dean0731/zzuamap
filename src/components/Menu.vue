<template>
  <el-col :span="7" id="menu">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">卫星</el-menu-item>
      <el-menu-item @click="viewModeChange" index="2">3D</el-menu-item>
      <el-submenu index="3">
        <template slot="title">路况</template>
        <el-menu-item><el-checkbox v-model="showpath1">路况</el-checkbox></el-menu-item>
        <el-menu-item><el-checkbox v-model="showpath2">路网</el-checkbox></el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">测量</template>
        <el-menu-item index="3-1">距离</el-menu-item>
        <el-menu-item index="3-2">面积</el-menu-item>
        <el-menu-item index="3-3">关闭</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">显示</template>
        <el-menu-item><el-checkbox v-model="building">建筑物</el-checkbox></el-menu-item>
        <el-menu-item><el-checkbox v-model="bg">区域面</el-checkbox></el-menu-item>
        <el-menu-item><el-checkbox v-model="point">标注</el-checkbox></el-menu-item>
        <el-menu-item><el-checkbox v-model="road">道路</el-checkbox></el-menu-item>
      </el-submenu>
      <el-menu-item index="6" disabled><a href="https://blog.dean0731.top" target="_blank">其他3</a></el-menu-item>
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

      building:false,
      bg:false,
      point:true,
      road:true,

      showpath1:false,
      showpath2:false,
    }
  },
  watch:{
    // 隐藏显示建筑物'bg', 'road', 'point' ,building
    bg(){
      this.setMapFeatures("bg",this.bg)
    },
    point(){
      this.setMapFeatures("point",this.point)
    },
    road(){
      this.setMapFeatures("road",this.road)
    },
    building(){
      this.$store.state.Map.getLayers().forEach(layer=>{
        if(layer.CLASS_NAME=='AMap.Buildings'){
          if(this.building){
            layer.show()
          }else{
            layer.hide()
          }
        }
      })
    },
    // 隐藏显示路况信息
    showpath1(){
      let temp =  this.$store.state.MapType._config
      temp.showRoad= temp.showRoad==true?false:true
      mapType(this,temp)
    },
    showpath2(){
      let temp =  this.$store.state.MapType._config
      temp.showTraffic= temp.showTraffic==true?false:true
      mapType(this,temp)
    },
  },
  methods:{
    setMapFeatures(str,flag){
      let features = this.$store.state.Map.getFeatures()
      let newFeatures = []
      if(flag){
        newFeatures = features.concat(str)
      }else{
        features.forEach(feature=>{
          if(feature!=str){
            newFeatures.push(feature)
          }
        })
      }
      this.$store.state.Map.setFeatures(newFeatures);
    },
    viewModeChange(){
      this.$store.state.Map.setPitch(60,true,2);
      this.$store.state.Map.setRotation(-35,true,2);
    },
    handleSelect(index){
        if(index=="1"){
          let temp =  this.$store.state.MapType._config
          temp.defaultType = temp.defaultType==1?0:1
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
  left: 65%;
}

</style>
