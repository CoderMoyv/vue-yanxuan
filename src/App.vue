<template>
  <div id="app">
    <router-view class="router-view" />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    if (this.$cookies.isKey("userInfo")) {
      var userInfo = this.$cookies.get("userInfo");
      this.$store.commit("setLoginInfo", userInfo);
      this.$store.commit("login");
    } else {
    }
  },
};
</script>

<style>
.router-view {
  margin-bottom: 50px;
}
.van-tabs__nav--line {
  width: 85%;
  height: 40px;
}
.text_gray {
  color: #7f7f7f;
}
</style>
