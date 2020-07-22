<template>
  <div>
    <van-sticky>
      <div class="header-box">
        <img class="logo" src="../assets/images/logo.png" alt="" />
        <div class="search-box" @click="goSearch()">
          <van-icon name="search" />
          <div>搜索商品, 共33504款好物</div>
        </div>
         <router-link to="/userLogin"><button class="btn-login" v-if="!this.$store.state.isLogin">登录</button></router-link>
      </div>
    </van-sticky>
    <van-sticky offset-top="42px" z-index="120">
      <div class="v-tab-arrow">
        <van-icon
          @click="openMenu()"
          name="arrow-down"
          size="0.5rem"
          color="#333"
        />
      </div>
    </van-sticky>
    <van-sticky offset-top="42px" z-index="9999">
      <div class="v-tab-menu" v-show="tabMenu_isShow">
        <div class="v-tab-menu-title">
          <div>全部频道</div>
          <van-icon
            @click="closeMenu()"
            name="arrow-up"
            size="0.5rem"
            color="#333"
          />
        </div>
        <div class="v-tab-menu-list">
          <div
            :class="{ active: tabIndex === index, 'v-tab-menu-item': true }"
            v-for="(item, index) in tabArray"
            :key="index"
            @click="chooseItem(index)"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </van-sticky>
    <van-tabs
      sticky
      offset-top="42px"
      color="#dd1a21"
      title-active-color="#dd1a21"
      line-height="2px"
      title-inactive-color="#333333"
      v-model="tabIndex"
    >
      <van-tab
        class="v-tab"
        :title="item"
        v-for="(item, index) in tabArray"
        :key="index"
      >
        <Recommend v-if="item === '推荐'"></Recommend>
        <div v-else>{{ item }}</div>
      </van-tab>
    </van-tabs>

    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import Recommend from "../components/Recommend.vue";
import { mapState } from "vuex";
export default {
  components: {
    Recommend,
  },
  data() {
    return {
      tabIndex: 0,
      tabMenu_isShow: false,
    };
  },
  computed: {
    ...mapState(["tabArray"]),
  },
  methods: {
    openMenu() {
      this.tabMenu_isShow = true;
    },
    closeMenu() {
      this.tabMenu_isShow = false;
    },
    chooseItem(index) {
      this.tabIndex = index;
      this.tabMenu_isShow = false;
    },
    goSearch(){
      this.$router.push('/search')
    }
  },
};
</script>

<style scoped>
a{
  display: flex;
  align-items: center;
}
.logo {
  width: 70px;
}
.header-box {
  display: flex;
  align-items: center;
  padding: 8px 14px;
  box-sizing: border-box;
  height: 42px;
  background-color: white;
}
.search-box {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666666;
  padding: 6px 16px;
  background-color: #ededed;
  border-radius: 5px;
  flex: 1;
  margin: 0 8px;
  justify-content: center;
}
.search-box div {
  margin-left: 4px;
}
.btn-login {
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid #dd1a21;
  color: #dd1a21;
  background-color: white;
}

.v-tab {
  font-size: 20px;
}

.v-tab-arrow {
  position: absolute;
  width: 15%;
  height: 44px;
  background-color: white;
  right: 0;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding-right: 16px;
  align-items: center;
  z-index: 120;
}
.v-tab-menu {
  width: 100%;
  position: absolute;
  background-color: white;
  z-index: 9999;
  box-sizing: border-box;
  padding-bottom: 8px;
}
.v-tab-menu-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 14px;
}
.v-tab-menu-title > div {
  font-size: 14px;
  color: #333;
}
.v-tab-menu-list {
  padding: 8px 14px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-row-gap: 16px;
  grid-column-gap: 16px;
}
.v-tab-menu-item {
  box-sizing: border-box;
  background: #fafafa;
  border: 1px solid #ccc;
  font-size: 12px;
  padding: 4px 0;
  text-align: center;
  color: #333;
}
.v-tab-menu-list > .active {
  border: 1px solid #dd1a21;
  color: #dd1a21;
}
</style>
