<template>
  <el-main id="search">
    <el-input id ="input_id" v-model="input" placeholder="请输入内容"></el-input>
  </el-main>

</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
  #search{
    width: 20%;
    position: fixed;
    z-index: 9999;
    left: 15px;
    top:15px;
  }
</style>