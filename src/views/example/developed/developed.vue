<template>
  <div class="developed">
    <img src="./developed.svg" alt="" srcset="">
    <div class="tootip">
      开发中，敬请期待…
    </div>
 </div>
</template>

<script setup lang='ts'>
  import { ref,reactive } from 'vue'

</script>
<style scoped>
.developed {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.developed .tootip{
  font-weight: bold; 
  color: #333333;
  line-height: 24px;
  text-align: center;
}

</style>