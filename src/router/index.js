import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: '/funComponent',
    name: 'funComponent',
    component: () => import("../views/FunComponent")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    children: [
      {
        path: 'list',
        component: () => import(/* webpackChunkName: "about" */"../components/List.vue")
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */"../views/User.vue"),
    meta: {
      isShow: 'true'
    },
    children: [
      {
        path: "child1",
        name: 'child1',
        component: () => import(/* webpackChunkName: "child1" */"../components/Child1.vue"),
        meta: {
          isShow: false
        }
      }
    ]
  }

];

const router = new VueRouter({
  mode: 'history',
  routes,
});
/* router.beforeEach(async (to, from) => {
  if (to.name === 'home') {
    // debugger
    return { name: 'user' }
  }
}) */

export default router;
