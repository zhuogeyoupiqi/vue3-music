<template>
  <!-- 推荐 -->
  <div class="recommend">
    <h1 class="title">推荐</h1>
    <banner></banner>
    <personalized></personalized>
 </div>
</template>

<script setup lang='ts'>
  import banner from './components/banner.vue'
  import personalized from './components/personalized.vue'
  import { ref,reactive } from 'vue'

</script>
<style scoped>
.recommend {
  width: 100%;
}
.recommend .title {
  font-size: 25px;
  font-weight: bold;
}
</style>