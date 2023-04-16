<template>
  <!-- 左侧菜单 -->
  <div class="app-menu">
    <div class="menu-view" v-for="menu in meuns">
      <div class="menu-title app-font-size-12">{{ menu.name }}</div>
      <div
        class="menu-item"
        :class="currentKey === meunItem.key ? 'active' : 'unactive'"
        v-for="meunItem in menu.menus" @click="changeMenu(meunItem)">
        <i :class="`icon iconfont ${meunItem.icon}`"></i>
        <span>{{ meunItem.name }}</span>
      </div>
    </div>
 </div>
</template>

<script setup lang='ts'>
  import { ref,reactive,watch } from 'vue'
  import { meuns } from './menu-schema'
  import type { Menu } from './interface'
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()
  // 当前路由
  const currentKey = ref(route.meta.name)

  /**
   * @description 监听路由变化
   */
  watch(() => route.meta.name,(menu) => {
    currentKey.value = menu
  })

  /**
   * @description 选择菜单
   * @param menuItem
   */
   const changeMenu = (menuItem:Menu) => {
    router.push( {name: menuItem.key, replace: true,} )
    
   }

</script>
<style scoped>
.app-menu {
  width: 100%;
  height: 100%;
  background: rgb(249 250 251)
}
.app-menu .menu-view {
  padding: 40px 20px 0 20px;
}
.app-menu .menu-view .menu-title {
  margin-bottom: 20px;
}
.app-menu .menu-view .menu-item {
  line-height: 30px;
  padding-left: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}
.app-menu .menu-view .menu-item i {
  font-size: 14px;
  margin-right: 5px;
}
.app-menu .menu-view .menu-item.active {
  color: #fff;
  background: linear-gradient(to right,#2dd4bf,#31d39b);
}
.app-menu .menu-view .menu-item.unactive:hover {
  background: #e5e7eb;
}
</style>