<template>
  <div>
    <div class="navbar-box van-hairline--bottom">
      <div class="navbar-left">
        <router-link to="/">
          <img src="../assets/images/icon_home.png" alt="" />
        </router-link>
      </div>
      <div class="navbar-center">
        <p v-if="isTxt">值得买</p>
        <img
          class="logo"
          v-if="!isTxt"
          src="../assets/images/logo.png"
          alt=""
        />
      </div>
      <div class="navbar-right">
        <router-link to="/search"><img src="../assets/images/icon_search.png" alt="" /> </router-link>
        <router-link to="/cart"><img src="../assets/images/icon_cart.png" alt="" /> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isTxt", "txt"],
};
</script>

<style scoped>
.navbar-box {
  background-color: white;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding: 0 12px;
  align-items: center;
  z-index: 9999;
}
.navbar-left {
  width: 80px;
}
.navbar-center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-right {
  width: 80px;
  text-align: right;
}
.navbar-left img,
.navbar-right img {
  width: 24px;
}
.navbar-right  img {
  margin-left: 16px;
}
.logo {
  width: 80px;
}
.navbar-center p {
  font-size: 18px;
  margin: 0;
}
</style>
