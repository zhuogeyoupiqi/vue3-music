<template>
  <div class="personalized">
    <h1>你的专属歌单</h1>
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="3"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="3"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="3"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
 </div>
</template>

<script setup lang='ts'>
  import { ref,reactive } from 'vue'

</script>
<style scoped>
.personalized {
  width: 100%;
  margin-top: 30px;
}
.personalized .el-row {
  margin-top: 20px;
  margin-bottom: 20px;
}
.personalized .el-row:last-child {
  margin-bottom: 0;
}
.personalized .el-col {
  border-radius: 4px;
}

.personalized .grid-content {
  border-radius: 4px;
  min-height: 100px;
  background-color: #ccc;
}
</style>