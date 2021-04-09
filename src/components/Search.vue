<template>
    <el-col :span="5" id="search">
        <el-input
            v-model="input"
            prefix-icon="el-icon-map-location"
            placeholder="请输入城市名"
            @keypress.enter.native="search"
            @input="complete">
          <el-button slot="append"
              icon="el-icon-search"
              @click="search">
          </el-button>
        </el-input>
      <el-menu class="el-menu-demo" mode="horizontal">

        <el-menu-item v-for="(name,index) in data" v-bind:key="index" style="padding:0px 0px 0px 5% ;">
            <i class="el-icon-school"></i>
            <span @click="handleSelect(index+1)">{{name}}</span>
        </el-menu-item>
      </el-menu>
        <el-collapse-transition>
          <SearchList :input="input" :city="city" v-show="showResult" ref="searchList"></SearchList>
        </el-collapse-transition>
        <el-collapse-transition>
          <SearchComplete ref="searchComplete" v-show="showComplete"></SearchComplete>
        </el-collapse-transition>
      <transition v-if="showTitle" name="el-fade-in-linear">
          <el-col class="title" v-if="showResult==false" @click.native="hide">展开搜索结果</el-col>
      </transition>
    </el-col>
</template>
<script>
import SearchList from "./SearchList";
import SearchComplete from "./SearchComplete";
import {FOUR_SCHOOL_Location} from "../config/config";
import {handler, searchCity} from "../function/search";
import {locationStrToPxPy} from "../store/store";
import {successMessage, warnMessage} from "../util/messageUtil";
export default {
  name: "Search",
  components: {SearchList,SearchComplete},
  data() {
    return {
      input: "",
      city:null,
      showComplete:false,
      showResult:false,
      showTitle:false,
      data:['新校区','南校区','北校区','医学院'],
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
      this.showComplete=false
      searchCity(this.input,this).then(res=>{
       handler(res,()=>{
         this.$store.state.Map.setCenter(locationStrToPxPy(res.data.districts[0].center))
         this.$message(successMessage("切换到"+res.data.districts[0].name))
         this.city = res.data.districts[0].adcode;
       },this.search2,this)
      })

    },
    search2(){
      this.$refs.searchList.search().then(res=>{
        handler(res,()=>{
          this.$refs.searchList.places = res.data.pois
          // this.$refs.searchList.total = Number(res.data.count)>this.$refs.searchList.page_size*100?this.$refs.searchList.page_size*100:Number(res.data.count)
          this.$refs.searchList.page_count = Number(res.data.count)<this.$refs.searchList.page_size?1:parseInt(Number(res.data.count)/this.$refs.searchList.page_size);
          this.showResult = true;
          this.showTitle = true
        },()=>{this.$message(warnMessage('未查询到结果'))},this)
      })
    },
    complete(){
      this.showComplete = true
      this.showResult = false
      this.showTitle = false
      this.$refs.searchComplete.search(this.input)
    },
    handleSelect(index){
      this.$store.state.Location(FOUR_SCHOOL_Location[index],this)
    }
  }
}
</script>

<style>
  #search{
    height: 4.31%;
    position: fixed;
    z-index: 9999;
    top:1%;
    left: 1%;
  }
  .title{
    position: relative;
    z-index: 9999;
    padding: 5px;
    color: cornflowerblue;
    text-align: center;
    background-color: #ffffff;
  }
</style>
