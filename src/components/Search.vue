<template>
  <el-main id="search">
    <el-main style="padding: 10px;background-color: white">
      <el-input
          id = "input_id"
          v-model="input"
          placeholder="请输入城市名"
          @focus="removePois"
      >
        <!--          @keypress.enter.native="search()"-->
        <el-button
            slot="append" icon="el-icon-search"
            @click="search()"
            style="background-color: white;font-size: 28px;margin-right:-25px;">
        </el-button>
        <el-button
            slot="prepend" icon="el-icon-map-location"
            style="background-color: white;font-size: 28px;margin-left: -25px">
        </el-button>
      </el-input>
      <el-row v-for='(value) in pois' :key='value.index' style="background-color: white;padding: 5px 0px 5px 30px">
        <template v-if="value.photos[0] !== undefined ">
          <el-row style="height: 70px;background-color: white;width: 100%">
            <el-col :span="10">
              <el-image :src="value.photos[0].url" style="height: 70px;width: 70px"/>
            </el-col>
            <el-col :span="10">
              {{value.address}}
            </el-col>
          </el-row>
        </template>
        <template v-else>
          <el-row style="width:100%;height: 70px;background-color: white;">
            {{value.address}}
          </el-row>
        </template>
        <!--      <div style="width:100%;font-size: 15px">-->
        <!--        {{value.address}}-->
        <!--        <hr/>-->
        <!--      </div>-->
      </el-row>
    </el-main>
    <div id="complete">

    </div>


  </el-main>
</template>
<script>
import Vue from 'vue'
import {search} from "../assets/js/function/search";
import {autoComplete} from "../assets/js/plugins/plugins";
export default {
  name: "Search",
  props:{
    vue:{
      type: Vue,
      default:null
    }
  },
  data() {
    return {
      LabelsLayer:null,
      input: "",
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      pois:null
    }
  },
  methods:{
    search:async function (){
      search(this.vue,this)
    },
    init(){
      autoComplete(this.vue,this)
    },
    removePois(){
      this.pois = null;
    }
  }
}
</script>

<style scoped>
  #search{
    width: 23%;
    position: fixed;
    z-index: 9999;
  }
  #search>>>.el-input__inner{
    border: none;
    height: 30px;
    font-size: 17px;
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
