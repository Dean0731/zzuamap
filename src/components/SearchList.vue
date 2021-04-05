<template>
    <el-main id="searchList">
        <el-menu
            v-for="(place,index) in places"
            v-bind:key="index">
          <el-menu-item index="index">
            <el-row slot="title">{{place.address}}</el-row>
          </el-menu-item>
        </el-menu>
        <el-pagination
            background
            :page-size="page_size"
            :hide-on-single-page="value"
            @current-change="getPlacesList"
            layout="prev, pager, next"
            :total="total">
        </el-pagination>
    </el-main>


</template>
<script>
import {search} from "../function/search";

export default {
  name: "SearchList",
  data(){
    return {
      places:[],
      total:0,
      input:'',
      value:true,
      page_size:20
    }
  },
  created() {
    this.input = this.$route.query.keyword
    this.getPlacesList(1)
  },
  methods:{
    getPlacesList(pageNumber){
      search(pageNumber,this)
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
  width: 21%;
  max-height: 80%;
  top:60px;
  position: fixed;
  z-index: 9999;
  padding:5px 20px 0px 20px;
  vertical-align: center;
  margin-left:20px;
  background-color: #ffffff;
}
.el-menu-item{
  display: table-cell;
  vertical-align: middle;
  line-height: 1.2;
  white-space: pre-line;
}
</style>