import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = [{
    path: "/journal",
    // redirect: "/journal",
    name: "journal",
    component: () => import("@/views/zzrweb/journal")
  },
  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "多级菜单",
      icon: "el-icon-news"
    },
    children: [{
        path: "menu1",
        component: () =>
          import("@/views/nested/menu1/index"), // Parent router-view
        name: "Menu1",
        meta: {
          title: "Menu1"
        },
        children: [{
            path: "menu1-1",
            component: () =>
              import("@/views/nested/menu1/menu1-1/index"),
            name: "Menu1-1",
            meta: {
              title: "Menu1-1"
            }
          },
          {
            path: "menu1-2",
            component: () =>
              import("@/views/nested/menu1/menu1-2/index"),
            name: "Menu1-2",
            meta: {
              title: "Menu1-2"
            },
            children: [{
                path: "menu1-2-1",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-1/index"),
                name: "Menu1-2-1",
                meta: {
                  title: "Menu1-2-1"
                }
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-2/index"),
                name: "Menu1-2-2",
                meta: {
                  title: "Menu1-2-2"
                }
              }
            ]
          },
          {
            path: "menu1-3",
            component: () =>
              import("@/views/nested/menu1/menu1-3/index"),
            name: "Menu1-3",
            meta: {
              title: "Menu1-3"
            }
          }
        ]

      },
      {
        path: "menu2",
        component: () =>
          import("@/views/nested/menu2/index"),
        meta: {
          title: "menu2"
        }
      }
    ]
  }
];
