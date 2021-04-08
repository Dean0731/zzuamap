<template>
  <el-row>
    <el-col :span="5" id="search">
      <el-col :span="4" class="ico">
        <i class="el-icon-map-location"></i>
      </el-col>
      <el-col :span="16">
        <el-input
            id = "input_id"
            v-model="input"
            placeholder="请输入城市名"
            @keypress.enter.native="search"
            @input="complete">
        </el-input>
      </el-col>
      <el-col :span="4" class="ico">
        <span
            class="el-icon-search"
            @click="search">
        </span>
      </el-col>
      <el-col>
<!--        <router-view ref="view"></router-view>-->
        <SearchList :input="input" v-show="showSearchList" ref="searchList"></SearchList>
        <SearchComplete :input="input" v-show="showSearchComplete" ref="searchComplete"></SearchComplete>
        <el-col id="title" :span="5" style="font-size: 20px;color: cornflowerblue;text-align: center" v-if="showSearchList==true" @click.native="hide">{{data}}</el-col>
      </el-col>
    </el-col>
  </el-row>
</template>
<script>
import SearchList from "./SearchList";
import SearchComplete from "./SearchComplete";
import {errorMessage, warnMessage} from "../util/messageUtil";
export default {
  name: "Search",
  components: {SearchList,SearchComplete},
  data() {
    return {
      data:"显示结果",
      input: "",
      showSearchList:false,
      showSearchComplete:false,
    }
  },
  methods:{
    hide(){
      if(this.data=="隐藏结果"){
        this.data ="显示结果";
      }else{
        this.showSearchList = false;
        this.data = "隐藏结果";
      }
    },
    search(){
      this.$refs.searchList.search().then(res=>{
        if(res.data.status==1){
          if(res.data.count!=0){
            this.$refs.searchList.places = res.data.pois
            this.$refs.searchList.total = Number(res.data.count)>this.$refs.searchList.page_size*100?this.$refs.searchList.page_size*100:Number(res.data.count)
            if(this.showSearchComplete==true){
              this.showSearchComplete=false
            }
            this.showSearchList = true;
          }else{
            this.$message(warnMessage('未查询到结果'))
          }
        }else {
          this.$message(errorMessage(res.data.info))
        }
      })
    },
    complete(){
      if(this.showSearchList==true){
        this.showSearchList=false;
      }
      this.showSearchComplete = true;
      this.$refs.searchComplete.search(this.input)
    }
  }
}
</script>

<style>
  #search{
    /*border: 1px red solid;*/
    height: 4.31%;
    position: fixed;
    z-index: 9999;
    /*padding:5px;*/
    vertical-align: center;
    margin: 0.5% 0.5% 0px 1%;
    background-color: #ffffff;
  }
  #search>>>.el-input__inner{
    border: none;
    /*padding-left: 10px;*/
  }
  .ico{
    text-align: center;font-size:30px;
    cursor: pointer;
  }
  #title{
    position: relative;
    z-index: 9999;
  }
</style>
