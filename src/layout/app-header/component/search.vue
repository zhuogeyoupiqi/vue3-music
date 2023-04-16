<template>
  <el-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    :show-arrow="false"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-input
      class="w-50 m-2"
      size="small"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
    </template>
  </el-popover>
</template>

<script setup lang='ts'>
  import { Search } from '@element-plus/icons-vue'
  import { ref,reactive } from 'vue'

</script>
<style scoped>

</style>