<template>
  <el-main id="search">
    <el-main style="padding: 10px;background-color: white">
      <el-input
          id = "input_id"
          v-model="input"
          placeholder="请输入城市名"
          @input="toParent"
      >
        <el-button
            slot="append" icon="el-icon-search"
            style="background-color: white;font-size: 28px;margin-right:-25px;">
        </el-button>
        <el-button
            slot="prepend" icon="el-icon-map-location"
            style="background-color: white;font-size: 28px;margin-left: -25px">
        </el-button>
      </el-input>
    </el-main>
    <div id="complete"></div>
  </el-main>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      input: "",
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods:{
    toParent:function (){
      this.$emit("getSubInput",this.input)
    }
  }
}
</script>

<style scoped>
  #search{
    width: 25%;
    position: fixed;
    z-index: 9999;
    left: 15px;
    top:15px;
  }
  #search>>>.el-input__inner{
    border: none;
    height: 50px;
    font-size: 20px;
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