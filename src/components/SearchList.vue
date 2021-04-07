<template>
  <el-collapse-transition>
      <el-col id="searchList" :span="5">
          <el-row
              v-for="(place,index) in places"
              v-bind:key="index"
              @keypress.enter.native="location(place)"
              @click.native="location(place)">
              <el-col :span="4">
                <el-image src="/favicon.ico"></el-image>
              </el-col>
              <el-col :span="20">{{place.address}}</el-col>
          </el-row>
        <el-pagination
            :page-size="page_size"
            :hide-on-single-page="value"
            :current-page.sync="current_page"
            @current-change="getPlacesList"
            layout="prev, pager, next"
            :total="total">
        </el-pagination>
      </el-col>
  </el-collapse-transition>
</template>
<script>
import {search} from "../function/search";

export default {
  name: "SearchList",
  props:['input'],
  data(){
    return {
      places:[],
      total:0,
      current_page:1,
      // input:'',
      value:true,
      page_size:8
    }
  },
  methods:{
    search(){
      this.current_page=1
      this.getPlacesList(1)
    },
    getPlacesList(pageNumber){
      search(pageNumber,this.input,this)
    },
    location(place){
      this.$message(place.address)
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar { /*滚动条整体样式*/
  width: 6px !important;; /*高宽分别对应横竖滚动条的尺寸*/
  height: 6px !important;;
  background: #ffffff !important;;
  cursor: pointer !important;

}

::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
  border-radius: 5px !important;
  -webkit-box-shadow: inset 0 0 5px rgba(240, 240, 240, .5) !important;;
  background: rgba(63, 98, 131, 0.8) !important;;
  cursor: pointer !important;
}

::-webkit-scrollbar-track { /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(240, 240, 240, .5) !important;;
  border-radius: 0 !important;;
  background: rgba(240, 240, 240, 0.5) !important;;
  cursor: pointer !important;
}

#searchList{
  max-height: 80%;
  position: fixed;
  z-index: 9999;
  vertical-align: center;
  background-color: #ffffff;
  overflow-y: scroll;
}
.el-row{
  margin: 0 4% 0 4%;
  vertical-align: middle;
  height: 100px;
}
.el-row:hover{
  background-color: #D2E8F5;
  cursor: pointer;
}
</style>