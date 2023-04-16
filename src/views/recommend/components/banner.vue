<template>
  <div class="banner">
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in banners" :key="item.bannerId">
        <div class="grid-content ep-bg-purple">
          <img :src="item.pic" class="banner-image" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
  import { ref,reactive,onMounted,toRefs } from 'vue'
  import { getBanner } from '@/lib/request/recommend'


  interface banner {
    pic: string,
    bannerId: number
  }
  const state = reactive({
    banners: null as any   // 类型断言
  })

  let { banners } = toRefs(state)
  onMounted(() => {
    getBanner().then(data => {
      banners.value = data.banners.splice(0,4)
    })
  })


  

</script>
<style scoped>
.banner .el-row {
  margin-top: 20px;
  margin-bottom: 20px;
}
.banner .el-row:last-child {
  margin-bottom: 0;
}
.banner .el-col {
  border-radius: 4px;
}

.banner .grid-content {
  border-radius: 4px;
  min-height: 100px;
  background-color: #ccc;
}
.banner .grid-content img {
  width: 100%;
}
</style>