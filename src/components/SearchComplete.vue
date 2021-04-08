<template>
  <el-collapse-transition>
  <el-col :span="5" id="searchList">
    <el-menu
        v-for="(place,index) in places"
        v-bind:key="index">
      <el-menu-item index="index"
                    @keypress.enter.native="location(place)"
                    @click.native="location(place)">
        <i class="fa fa-map-marker" style="margin-right: 2%"></i>
        <span slot="title" >{{place.name}}</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-collapse-transition>
</template>
<script>
import {autoComplete} from "../plugins/plugins";

export default {
  name: "Complete",
  data(){
    return {
      places:[],
      input:"",
      autoComplete:this.AMap,
    }
  },
  watch(){
    autoComplete(){
      this.input = this.$route.params.keyword
      this.autoComplete = new this.AMap.AutoComplete({
        // city:"郑州",
        citylimit:false,
      });
      this.$log.debug("autocomplete init success")
    }
  },
  methods:{
    search(keyword){
      this.autoComplete.search(keyword,(status,result)=>{
        if(status=="complete"){
          this.places = result.tips;
        }
      })
    },
    location(place){
      this.$message(place.name)
    },
  }
}
</script>

<style scoped>
#searchList{
  position: fixed;
  z-index: 9999;
  vertical-align: center;
  background-color: #ffffff;
}
.el-menu-item{
  color: #C0C4CC;
  height: 10%!important;
  line-height: 2.0;
}
</style>
