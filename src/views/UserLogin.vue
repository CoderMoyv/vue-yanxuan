<template>
  <div>
    <MainNavBar></MainNavBar>
    <div class="logo-warp">
      <img src="../assets/images/icon_logo.png" alt="" />
    </div>
    <router-link to="/phoneLogin">
      <div class="btn btn_phone">
        <div class="icon icon_phone"></div>
        <p>手机号快捷登录</p>
      </div>
    </router-link>
    <div class="btn btn_email">
      <div class="icon icon_email"></div>
      <p>邮箱帐号登录</p>
    </div>

    <div class="third-wrap">
      <div class="wrap-item">
        <img src="../assets/images/icons_wechat.png" alt="" />
        <p>微信</p>
      </div>
      <div class="wrap-item">
        <img src="../assets/images/icons_qq.png" alt="" />
        <p>QQ</p>
      </div>
      <div class="wrap-item">
        <img src="../assets/images/icons_weibo.png" alt="" />
        <p>微博</p>
      </div>
    </div>
  </div>
</template>

<script>
import MainNavBar from "../components/MainNavBar.vue";
export default {
  components: {
    MainNavBar,
  },
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color: #f4f4f4");
  },
  beforeDestroy() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color: #fff");
  },
};
</script>

<style scoped>
.logo-warp {
  margin-top: 50px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-warp img {
  width: 130px;
}
.btn {
  margin: 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  transform: scale(1);
}
.btn div {
  width: 20px;
  height: 20px;
}
.btn p {
  font-size: 14px;
  margin: 0 8px;
}
.btn_phone {
  background-color: #dd1a21;
  color: white;
}
.btn_phone:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.1);
}
.btn_phone:active:before {
  content: "";
}
.btn_email {
  background-color: null;
  color: #dd1a21;
  border: 1px solid #dd1a21;
  box-sizing: border-box;
}
.btn_email::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #dd1a21;
  opacity: 0.1;
}
.btn_email:active::before {
  content: "";
}
.icon {
  background-image: url("../assets/images/icons_login.png");
  background-size: 20px;
  background-repeat: no-repeat;
}
.icon_phone {
  background-position-y: -25px;
}
.icon_email {
  background-position-y: 0;
}
.third-wrap {
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  display: flex;
  bottom: 82px;
}
.wrap-item {
  width: 90px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-right: 1px solid #979797;
}
.wrap-item:last-child {
  border: 0;
}
.wrap-item img {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.wrap-item p {
  font-size: 14px;
  color: #7f7f7f;
}
</style>
