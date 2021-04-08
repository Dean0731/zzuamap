<template>
  <el-row >
    <el-col :span="5" id="search">
      <el-col :span="20">
        <el-input
            id = "input_id"
            v-model="input"
            prefix-icon="el-icon-map-location"
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
        <el-collapse-transition>
          <SearchList :input="input" v-show="showResult" ref="searchList"></SearchList>
        </el-collapse-transition>
        <el-collapse-transition>
          <SearchComplete :input="input" v-show="showComplete" ref="searchComplete"></SearchComplete>
        </el-collapse-transition>
      </el-col>

    <el-collapse-transition>
      <el-col v-if="showTitle">
        <el-col class="title" v-if="showResult==false" @click.native="hide">展开搜索结果</el-col>
      </el-col>
    </el-collapse-transition>
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
      input: "",
      showComplete:false,
      showResult:false,
      showTitle:false,
    }
  },
  computed:{
    getMap(){
      return this.$store.state.Map
    }
  },
  watch:{
    getMap(){
      this.$store.state.Map.on("click",this.click)
    }
  },
  methods:{
    hide(){
      this.showResult = true;
    },
    click(){
      this.showResult=false
      this.showComplete=false
    },
    search(){
      this.$refs.searchList.search().then(res=>{
        if(res.data.status==1){
          if(res.data.count!=0){
            this.$refs.searchList.places = res.data.pois
            this.$refs.searchList.total = Number(res.data.count)>this.$refs.searchList.page_size*100?this.$refs.searchList.page_size*100:Number(res.data.count)
            this.showComplete=false
            this.showResult = true;
            this.showTitle = true
          }else{
            this.$message(warnMessage('未查询到结果'))
          }
        }else {
          this.$message(errorMessage(res.data.info))
        }
      })
    },
    complete(){
      this.showComplete = true
      this.showTitle = false
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
  .title{
    position: relative;
    z-index: 9999;
    background-color: white;
    /*font-size: 20px;*/
    height: 30px;
    padding-top: 5px;
    color: cornflowerblue;
    text-align: center
  }
</style>
