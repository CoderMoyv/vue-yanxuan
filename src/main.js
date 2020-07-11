import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible/index.js";

import {
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Col,
  Row,
  CountDown,
  Sidebar,
  SidebarItem,
  Sticky,
  Progress ,
  List ,
  Cell
} from "vant";

Vue.config.productionTip = false;

Vue.use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(Swipe)
  .use(SwipeItem)
  .use(Col)
  .use(Row)
  .use(CountDown)
  .use(Sidebar)
  .use(SidebarItem)
  .use(Sticky)
  .use(Progress)
  .use(List )
  .use(Cell);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
