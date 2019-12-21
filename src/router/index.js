import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Index = () => import('views/index/Index')
const Resume = () => import('views/resume/Resume')
const Work = () => import('views/work/Work')
const Profile = () => import('views/profile/Profile')

// 安装插件
Vue.use(VueRouter)

// 创建router
const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/resume',
    component: Resume
  },
  {
    path: '/work',
    component: Work
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  // 模式
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router