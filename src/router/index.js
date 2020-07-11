import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index";
import CateList from "../views/CateList.vue";
import Topic from "../views/Topic.vue";
import User from "../views/User.vue";
import Cart from "../views/Cart.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/catList",
    name: "CateList",
    component: CateList
  },
  {
    path: "/topic",
    name: "Topic",
    component: Topic
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/user",
    name: "User",
    component: User
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
