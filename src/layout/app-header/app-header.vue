<template>
  <!-- 头部导航 -->
  <div class="app-header">
    <div class="left">
      <span class="icon iconfont icon-left icon-music-zuojiantou"></span>
      <span class="icon iconfont icon-right icon-music-youjiantou"></span>
      <!-- 搜索 -->
      <div class="search">
        <search></search>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup lang='ts'>
  import search from './component/search.vue'
  import { ref,reactive } from 'vue'

</script>
<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 58px;
  /* background: rgb(249 250 251) */
}
.app-header .left,.app-header .right {
  display: flex;
  align-items: center;
}
.app-header .left .icon {
  padding: 10px;
  cursor: pointer;
}
.app-header .left .icon:hover {
  color: rgb(52 211 153);
}
.app-header .search {
  margin-left: 20px;
}
</style>