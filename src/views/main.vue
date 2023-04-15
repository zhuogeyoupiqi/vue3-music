<template>
  <div class="main common-layout">
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside width="225px">
        <app-menu></app-menu>
      </el-aside>
      <el-container>
        <!-- 头部导航 -->
        <el-header>
          <app-header></app-header>
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang='ts'>
  import { RouterView } from 'vue-router';
  import appMenu from '@/layout/app-menu/app-menu.vue'
  import appHeader from '@/layout/app-header/app-header.vue'
  import { ref,reactive } from 'vue'

</script>
<style scoped>
.common-layout {
  position: relative;
  height: 100%;
}
.common-layout .el-container {
  height: 100%;
}
</style>