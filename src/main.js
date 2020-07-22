import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible/index.js";
import MainTabbar from "./components/MainTabbar.vue";
import axios from "axios";
import VueTouch from "vue-touch";
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
  Progress,
  List,
  Cell,
  DropdownMenu,
  DropdownItem,
  Lazyload,
  Form,
  Checkbox,
  CheckboxGroup,
  Stepper,
  Area,
  Popup  
} from "vant";

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
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
  .use(List)
  .use(Cell)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Lazyload)
  .use(Form)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Stepper)
  .use(Area)
  .use(Popup);
Vue.use(VueTouch, { name: "v-touch" });
Vue.component("MainTabbar", MainTabbar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
