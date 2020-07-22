<template>
  <div>
    <van-tabbar
      class="v-tabbar"
      route
      active-color="#DD1A21"
      inactive-color="#666"
    >
      <van-tabbar-item replace to="/">
        <span>首页</span>
        <template #icon="props">
          <div :class="props.active ? icon.index_active : icon.index"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/cateList">
        <span>分类</span>
        <template #icon="props">
          <div :class="props.active ? icon.sort_active : icon.sort"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/topic">
        <span>值得买</span>
        <template #icon="props">
          <div :class="props.active ? icon.topic_active : icon.topic"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/cart">
        <span>购物车</span>
        <template #icon="props">
          <div :class="props.active ? icon.cart_active : icon.cart"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace :to="{path:this.$store.state.isLogin?'/userCenter':'/userLogin'}">
        <span>个人</span>
        <template #icon="props">
          <div :class="props.active ? icon.user_active : icon.user"></div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: {
        index: "v-icon v-icon-index",
        index_active: "v-icon v-icon-index-active",
        sort: "v-icon v-icon-sort",
        sort_active: "v-icon v-icon-sort-active",
        topic: "v-icon v-icon-topic",
        topic_active: "v-icon v-icon-topic-active",
        cart: "v-icon v-icon-cart",
        cart_active: "v-icon v-icon-cart-active",
        user: "v-icon v-icon-user",
        user_active: "v-icon v-icon-user-active",
      },
    };
  },
};
</script>

<style scoped>
.v-tabbar {
  z-index: 99999;
  height: 50px;
  width: 100%;
}
.v-icon {
  width: 20px;
  height: 20px;
  background-image: url("../assets/images/tabbar.png");
  background-size: 20px;
  background-repeat: no-repeat;
}
.v-icon-index {
  background-position: 0 -125px;
}
.v-icon-index-active {
  background-position: 0 -100px;
}
.v-icon-sort {
  background-position: 0 -75px;
}
.v-icon-sort-active {
  background-position: 0 -50px;
}
.v-icon-topic {
  background-position: 0 -175px;
}
.v-icon-topic-active {
  background-position: 0 -150px;
}
.v-icon-cart {
  background-position: 0 -25px;
}
.v-icon-cart-active {
  background-position: 0 0px;
}
.v-icon-user {
  background-position: 0 -225px;
}
.v-icon-user-active {
  background-position: 0 -200px;
}
</style>
