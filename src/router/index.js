/* Routes */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/Products.vue")
  },
  {
    path: "/admin/product-add",
    name: "admin-product-add",
    component: () => import("../views/admin/ProductAdd.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
