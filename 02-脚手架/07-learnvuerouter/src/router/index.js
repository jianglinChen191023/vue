// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')

const Profile = () => import('../components/Profile')

// 1. 通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2. 创建VueRouter对象
// 路由配置
const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    // 路由的嵌套使用
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        meta: {
          title: '首页1'
        },
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    // beforeEnter: (to, from, next) => {
      // console.log('about beforeEnter');
      // next()
    // },
    meta: {
      title: '关于'
    },
    path: '/about',
    component: About
  },
  {
    meta: {
      title: '用户'
    },
    path: '/user/:id',
    component: User
  },
  {
    meta: {
      title: '档案'
    },
    path: '/profile',
    component: Profile
  }
]

// 路由对象
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  // 修改默认路由的样式名称
  linkActiveClass: 'active'
})

// 前置钩子
// 全局导航守卫
router.beforeEach((to, from, next) => {

  // route = 路由组件对象
  // to: 要跳转到的路由对象
  // from: 之前的路由对象
  // console.log(to);
  // console.log(from);

  // to.meta.title: 如果有该路由对象有子路由并且默认重定向到子路由, 那么获取到的是就是这个子路由对象标题
  // from.meta.title: 如果之前的路由对象有子路由, 同上, 获取到的是该路由对象的默认子路由对象的标题
  // document.title = to.meta.title;
  // console.log('to.meta.title: ' + to.meta.title);
  // console.log('from.meta.title: ' + from.meta.title);

  // 我们要的是所有路由中主路由的标题
  document.title = to.matched[0].meta.title;
  // console.log('to.matched[0].meta.title: ' + to.matched[0].meta.title);

  // 刚进入是不存在之前的路由, 那么会报错, 所以添加其判断
  // console.log(from.matched.length);
  if (from.matched.length > 0) {
    // console.log(from.matched[0]);
    // console.log(from.matched[0].meta.title);
    // console.log('from.matched[0].meta.title: ' + from.matched[0].meta.title);
  }

  // 判断是否登录

  //
  next();
})

// 后置钩子(hook)
router.afterEach((to, from) => {

})


// 将 router 对象传入到Vue实例

// 导出路由
export default router;




















