<template>
  <el-collapse-transition>
    <el-col :span="5" id="searchList">
      <el-menu>
        <el-menu-item
                      v-for="(place,index) in places"
                      v-bind:key="index"
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
export default {
  name: "Complete",
  data(){
    return {
      places:[],
    }
  },
  methods:{
    search(keyword){
      this.$store.state.AutoComplete.search(keyword,(status,result)=>{
        if(status=="complete"){
          this.places = result.tips;
        }
      })
    },
    location(place) {
      this.$store.state.Location(place,this)
    }
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
