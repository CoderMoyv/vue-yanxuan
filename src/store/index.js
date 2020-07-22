import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabArray: [
      "推荐",
      "居家生活",
      "服饰鞋包",
      "美食酒水",
      "个护清洁",
      "母婴亲子",
      "运动旅行",
      "数码家电",
      "严选全球",
    ],
    isLogin:false
  },
  mutations: {
    loginOut(state){
      state.isLogin = false
    },
    login(state){
      state.isLogin = true
    }
  },
  actions: {},
  modules: {}
});
