<template>
  <el-col :span="5" id="search">
      <el-input
          id = "input_id"
          v-model="input"
          placeholder="请输入城市名"
          @keypress.enter.native="search"
          @input="complete">
        <el-button
            slot="append" icon="el-icon-search"
            @click="search"
            style="background-color: white;font-size: 28px;margin-right:-25px;">
        </el-button>
        <el-button
            slot="prepend" icon="el-icon-map-location"
            style="background-color: white;font-size: 28px;margin-left: -25px">
        </el-button>
      </el-input>
  </el-col>

</template>
<script>
import {URL_SEARCH_COMPLETE, URL_SEARCH_LIST} from "../routers/router";
export default {
  name: "Search",
  data() {
    return {
      LabelsLayer:null,
      input: "",
      pois:null
    }
  },
  methods:{
    search:async function (){
      // search(this)
      this.$router.push({path: URL_SEARCH_LIST, query: {keyword:this.input}})
    },
    complete(){
      this.$router.push({path: URL_SEARCH_COMPLETE, query: {keyword:this.input}})
    }
  }
}
</script>

<style scoped>
  #search{
    height: 55px;
    position: fixed;
    z-index: 9999;
    padding:5px;
    vertical-align: center;
    margin: 10px 0px 0px 20px;
    background-color: #ffffff;
  }
  #search>>>.el-input__inner{
    border: none;
    padding-left: 10px;
  }
  #complete{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    box-sizing: border-box;
    color: #606266;
    font-size: 50px;
    line-height: 40px;
    outline: 0;
    padding: 0 10%;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
</style>
