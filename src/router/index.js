import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let needAuth = false

const router = new Router({
  routes: [
    // 测试路由
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld'),
      meta: {
        auth: needAuth,
        title: 'HelloWorld'
      }
    },
    // 登录页面
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/login/login'),
      meta: {
        auth: needAuth,
        title: '登录'
      }
    },
    // 修改密码
    {
      path: '/modify',
      name: 'modify',
      component: () => import('@/components/modify/modify'),
      meta: {
        auth: needAuth,
        title: '修改密码'
      }
    },
    // 注册页面
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('@/components/signUp/signUp'),
      meta: {
        auth: needAuth,
        title: '注册新用户'
      }
    },
    // 我的首页
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/home/home'),
      meta: {
        auth: needAuth,
        title: '首页'
      }
    },
    // 我的矿机
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/components/mine/mine'),
      meta: {
        auth: needAuth,
        title: '我的矿机'
      }
    },
    // 我的团队
    {
      path: '/team',
      name: 'team',
      component: () => import('@/components/team/team'),
      meta: {
        auth: needAuth,
        title: '我的团队'
      }
    },
    // 交易平台
    {
      path: '/trade',
      name: 'trade',
      component: () => import('@/components/trade/trade'),
      meta: {
        auth: needAuth,
        title: '交易平台'
      }
    },
    // 会员中心
    {
      path: '/vipcenter',
      name: 'vipcenter',
      component: () => import('@/components/vipcenter/vipcenter'),
      meta: {
        auth: needAuth,
        title: '会员中心'
      }
    }
  ]
})

router.afterEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
