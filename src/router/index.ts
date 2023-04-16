import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main',
      meta: { name: '/' }
    },
    {
      path: '/main',
      meta: { name: "main", display: "主页面" },
      component: () => import('@/views/main.vue'),
      children: [
        {
          path: 'recommend',
          name: 'recommend',
          meta: { name: 'recommend', display: '推荐' },
          component: () => import('@/views/recommend/recommend.vue')
        },
        {
          path: 'music_hall',
          name: 'music_hall',
          meta: { name: 'music_hall', display: '音乐馆' },
          component: () => import('@/views/example/developed/developed.vue')
          // component: () => import('@/views/music_hall/music_hall.vue')
        },
        {
          path: 'video',
          name: 'video',
          meta: { name: 'video', display: '视频' },
          component: () => import('@/views/example/developed/developed.vue')
          // component: () => import('@/views/video/video.vue')
        },
        {
          path: 'radio',
          name: 'radio',
          meta: { name: 'radio', display: '电台' },
          component: () => import('@/views/example/developed/developed.vue')
          // component: () => import('@/views/radio/radio.vue')
        }
      ]
    }
  ]
})

export default router
