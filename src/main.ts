import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import ElementPlus from 'element-plus'          // element-plus
import 'element-plus/dist/index.css'            // element 样式
import './assets/styles/reset.css'              // 重置样式
import './assets/styles/main.css'               // 主样式文件
import './assets/fonts/iconfont.css'            // 图标字体
import './assets/fonts/iconfont.js'             // 图标字体(symbol引用)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
