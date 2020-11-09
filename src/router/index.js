import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// export default new Router({
//   routes: [
//     // {
//     //   path: '/',
//     //   name: 'HelloWorld',
//     //   component: HelloWorld
//     // },
//     {
//       path: '/',
//       name: 'zzrtable',
//       component: () => import("@/zzrweb/zzrtable"),
//       // 嵌套路由
//       children: [{
//         // 这里不设置值，是把main作为默认页面
//         path: '/zhuye', 
//         name: 'zhuye',
//         component: () => import("@/zzrweb/zhuye")
//       },{
//         path: '/user',
//         name: 'uese',
//         component: () => import("@/zzrweb/uese")
//       }]
//     }
//   ]
// })

export const commontRouterMap = [{
    path: "/login",
    name: "login",
    hidden: true, //不在slider显示
    component: () => import("@/views/zzrweb/login")
  },
  {
    path: "/",
    // redirect: "/home",
    name: "Home",
    component: () => import("@/views/zzrweb/Home")
  },
  {
    path: "/journal",
    name: "journal",
    hidden: true, //不在slider显示
    component: () => import("@/views/zzrweb/journal")
    // 嵌套路由
    // children: [{
    //   // 这里不设置值，是把main作为默认页面
    //   path: '/journal/videoQues',
    //   name: 'videoQues',
    //   component: () => import("@/views/zzrweb/videoQues")
    // }, {
    //   path: '/login/user',
    //   name: 'uese',
    //   component: () => import("@/views/zzrweb/uese")
    // }]
  },
  {
    path: "/videoQues",
    name: "videoQues",
    hidden: true, //不在slider显示
    component: () => import("@/views/zzrweb/videoQues")
  },
  {
    path: "/markeditor",
    name: "markeditor",
    hidden: true, //不在slider显示
    component: () => import("@/components/MarkEdioter")
  },
  {
    path: "/richeditor",
    name: "richeditor",
    hidden: true, //不在slider显示
    component: () => import("@/components/RichEditor")
  },
  {
    path: "/zzrarticle",
    name: "zzrarticle",
    hidden: true, //不在slider显示
    component: () => import("@/views/zzrweb/Zzrarticle")
  },
  {
    path: "/zzrmessage",
    name: "zzrmessage",
    hidden: true, //不在slider显示
    component: () => import("@/views/zzrweb/ZzrMessage")
  },
  {
    path: "/usercenter",
    name: "usercenter",
    hidden: true, //不在slider显示
    component: () => import("@/views/zzrweb/userCenter")
  },
  {
    path: "/zzrregist",
    name: "zzrregist",
    hidden: true, //不在slider显示
    component: () => import("@/views/zzrweb/Zzrregist")
  }
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: commontRouterMap
})
