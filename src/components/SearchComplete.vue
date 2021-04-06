<template>
  <el-col :span="5" id="searchList">
    <el-menu
        v-for="(place,index) in places"
        v-bind:key="index">
      <el-menu-item index="index">
        <span slot="title">{{place.name}}</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>
<script>
export default {
  name: "Complete",
  data(){
    return {
      places:[],
      input:"",
      autoComplete:null,
    }
  },
  created() {
    this.input = this.$route.query.keyword
    this.autoComplete = new this.AMap.AutoComplete({
      // city:"郑州",
      citylimit:false,
    });
    this.autoComplete.search(this.input,(status,result)=>{
      if(status=="complete"){
        this.places = result.tips;
      }
    })
  },
}
</script>

<style scoped>
#searchList{
  top:60px;
  position: fixed;
  z-index: 9999;
  vertical-align: center;
  margin-left:20px;
  background-color: #ffffff;
}
</style>