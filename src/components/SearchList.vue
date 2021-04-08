<template>
  <el-collapse-transition>
      <el-col id="searchList" :span="5">
        <el-col :span="24">
          <el-row
              v-for="(place,index) in places"
              v-bind:key="index">
              <el-col :span="18"
                      @keypress.enter.native="location(place)"
                      @click.native="location(place)">
                <el-col :span="24">{{index+1}} {{place.name}}</el-col>
                <el-col :span="24" v-if="place.address!=''">
                  <span style="font-size: 10px;color: #C0C4CC;">
                    {{place.address}}
                  </span>
                  <el-col v-if="place.tel!=''">
                    <span style="font-size: 10px;color: #C0C4CC;">
                    电话:{{place.tel}}
                  </span>
                  </el-col>
                </el-col>
              </el-col>
              <el-col :span="6">
                <el-image :src="place.photos[0].url"
                          v-if="place.photos.length!=0"
                          :preview-src-list="urlList(place)"
                          lazy style="width: 80px;height: 80px"
                ></el-image>
              </el-col>
          </el-row>
        </el-col>
        <el-col :span="24">
          <el-pagination
              style="text-align: center"
              :page-size="page_size"
              :pager-count="5"
              :hide-on-single-page="value"
              :current-page.sync="current_page"
              @current-change="getPlacesList"
              layout="prev, pager, next"
              :total="total">
          </el-pagination>
        </el-col>
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
      page_size:20,
      select:0
    }
  },
  methods:{
    search(){
      this.current_page=1
      return search(1,this.input,this)
    },
    getPlacesList(pageNumber){
      search(pageNumber,this.input,this).then(res=>{
        this.places = res.data.pois
        this.total = Number(res.data.count)>this.page_size*100?this.page_size*100:Number(res.data.count)
      })
    },
    location(place){
      this.$store.state.Location(place,this)
    },
    urlList(place){
      return place.photos.map(photo=>{
        return photo.url;
      })
    },
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
  padding:  2% 0 2% 0;
  vertical-align: middle;
  height: 100px;
}
.el-row:hover{
  background-color: #D2E8F5;
  cursor: pointer;
}
</style>
