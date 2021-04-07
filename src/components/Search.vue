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
      </el-col>
    </el-col>
  </el-row>
</template>
<script>
import SearchList from "./SearchList";
import SearchComplete from "./SearchComplete";
export default {
  name: "Search",
  components: {SearchList,SearchComplete},
  data() {
    return {
      input: "",
      showSearchList:false,
      showSearchComplete:false,
    }
  },
  methods:{
    search(){
      if(this.showSearchComplete==true){
        this.showSearchComplete=false
      }
      this.showSearchList = true;
      this.$refs.searchList.search()
    },
    async complete(){
      if(this.showSearchList==true){
        this.showSearchList=false;
      }
      this.showSearchComplete = true;
      this.$refs.searchComplete.search(this.input)
    }
  }
}
</script>

<style scoped>
  #search{
    /*border: 1px red solid;*/
    height: 4.31%;
    position: fixed;
    z-index: 9999;
    /*padding:5px;*/
    vertical-align: center;
    margin: 0.5% 0.5% 0.5% 1%;
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
</style>
