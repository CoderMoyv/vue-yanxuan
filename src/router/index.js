import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index";
import CateList from "../views/CateList.vue";
import Topic from "../views/Topic.vue";
import UserLogin from "../views/UserLogin.vue";
import Cart from "../views/Cart.vue";
import PhoneLogin from "../views/PhoneLogin.vue";
import UserCenter from "../views/UserCenter.vue";
import Search from "../views/Search.vue";
import Item from "../views/Item.vue";
import Detail from "../views/Detail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/cateList",
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
    path: "/userLogin",
    name: "UserLogin",
    component: UserLogin
  },
  {
    path: "/phoneLogin",
    name: "PhoneLogin",
    component: PhoneLogin
  },
  {
    path: "/userCenter",
    name: "UserCenter",
    component: UserCenter
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/item",
    name: "Item",
    component: Item,
  },
  {
    path: "/item/detail",
    name: "Detail",
    component: Detail,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
