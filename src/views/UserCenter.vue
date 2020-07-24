<template>
  <div style="background-color: #eee">
    <div class="header-box">
      <div class="header-left">
        <img
          class="user-avatar"
          src="../assets/images/icon_default_avatar.png"
          alt=""
        />
        <div>
          <p class="username">{{userInfo.username}}</p>
          <p class="user-type">{{userInfo.type}}</p>
        </div>
      </div>
      <div class="header-right">
        <van-icon
          class="link-qrcode"
          size="0.55rem"
          name="gift-card-o"
          color="#dd1a21"
        />
        <div class="super-vip">
          <div class="icon icon-super-vip"></div>
          <div>
            <div class="super-vip-line1">Pro会员</div>
            <div class="super-vip-line2">
              <div class="super-vip-line2-txt">立即试用</div>
              <img src="../assets/images/icon_vip_arrow.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-asset-warp">
      <div class="asset-title">
        我的资产
      </div>
      <div class="asset-list">
        <div class="asset-item">
          <div class="asset-count">¥0</div>
          <div class="asset-name">回馈金</div>
        </div>
        <div class="asset-item">
          <div class="asset-count">2</div>
          <div class="asset-name">红包</div>
        </div>
        <div class="asset-item">
          <div class="asset-count">2</div>
          <div class="asset-name">优惠券</div>
        </div>
        <div class="asset-item">
          <div class="asset-count">¥0</div>
          <div class="asset-name">津贴</div>
        </div>
        <div class="asset-item">
          <div class="asset-count">0</div>
          <div class="asset-name">礼品卡</div>
        </div>
      </div>
    </div>
    <div class="user-menu">
      <div class="user-menu-item">
        <div class="icon-u icon-user-list"></div>
        <p>我的订单</p>
      </div>
      <div class="user-menu-item">
        <div class="icon-u icon-user-pin"></div>
        <p>周六一起拼</p>
      </div>
      <div class="user-menu-item">
        <div class="icon-u icon-user-aftersale"></div>
        <p>售后服务</p>
      </div>
      <div class="user-menu-item">
        <div class="icon-u icon-user-lead"></div>
        <p>邀请返利</p>
      </div>
      <div class="user-menu-item">
        <div class="icon-u icon-user-preemption"></div>
        <p>优先购</p>
      </div>
      <div class="user-menu-item">
        <div class="icon-u icon-user-points"></div>
        <p>积分中心</p>
      </div>
      <div class="user-menu-item">
        <div class="icon-u icon-user-vipclub"></div>
        <p>会员俱乐部</p>
      </div>
      <div class="user-menu-item">
        <div class="icon-u icon-user-address"></div>
        <p>地址管理</p>
      </div>
      <div class="user-menu-item">
        <div class="icon-u icon-user-security"></div>
        <p>帐号安全</p>
      </div>
      <div class="user-menu-item">
        <div class="icon-u icon-user-help"></div>
        <p>帮助与客服</p>
      </div>
      <div class="user-menu-item">
        <div class="icon-u icon-user-feedback"></div>
        <p>意见反馈</p>
      </div>
      <div class="user-menu-item"></div>
    </div>
    <div class="btn-login-out" @click="loginOut()">退出登录</div>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  created(){
    if(this.isLogin){

    }else{
      this.$router.push({path:"/userLogin"})
    }
  },
  methods: {
    loginOut() {
      this.$store.commit("loginOut");
      this.$cookies.remove("userInfo");
      this.$router.push({ path: "/userLogin" });
    },
  },
  computed: {
    ...mapState(["userInfo","isLogin"]),
  },
  mounted() {
    document.body.style.backgroundColor = "#eee";
  },
};
</script>

<style scoped>
p {
  margin: 0;
}
.header-box {
  width: 100%;
  display: flex;
  height: 135px;
  background-image: url("../assets/images/bg_user_header.png");
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 100%;
}
.header-left {
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 16px;
  background-color: null;
}
.user-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 16px;
}
.username {
  width: 160px;
  color: white;
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.user-type {
  font-size: 14px;
  color: white;
}
.header-right {
  text-align: right;
  overflow: hidden;
}
.link-qrcode {
  margin: 30px 20px 0 0;
}

.super-vip {
  margin-left: 8px;
  margin-top: 10px;
  margin-right: -10px;
  width: 110px;
  height: 46px;
  border-radius: 50px 0 0 50px;
  background-image: linear-gradient(180deg, #574e44 0, #0e0e0e 100%);
  /* background-color: white; */
  display: flex;
  align-items: center;
  animation: shake 1s linear 3;
  box-sizing: border-box;
}

@keyframes shake {
  50%,
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(4px);
  }
  100% {
    transform: translateX(-4px);
  }
}

.icon {
  background-image: url("../assets/images/icons_user_center.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.icon-super-vip {
  background-position-y: -32px;
  width: 28px;
  height: 28px;
  margin: 0 4px;
}
.super-vip-line1 {
  font-size: 14px;
  font-weight: bold;
  color: #f9e0c0;
}
.super-vip-line2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.super-vip-line2-txt {
  font-size: 10px;
  color: #f9e0c0;
  transform: scale(0.8);
  box-sizing: border-box;
}
.super-vip-line2 img {
  width: 10px;
}
.my-asset-warp {
  background-color: white;
}
.asset-title {
  font-size: 14px;
  margin-left: 20px;
  padding: 20px 0;
  border-bottom: 0.5px solid #ebedf0;
}
.asset-list {
  display: flex;
}
.asset-item {
  margin: 20px 0;
  flex: 1;
  text-align: center;
}
.asset-count {
  font-size: 16px;
  font-weight: bold;
}
.asset-name {
  margin-top: 4px;
  font-size: 12px;
  color: #333;
}
.user-menu {
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1px;
  grid-column-gap: 1px;
}
.user-menu-item {
  padding: 16px 0;
  text-align: center;
  background-color: white;
}
.user-menu-item p {
  font-size: 12px;
  color: #333;
}
.icon-u {
  background-image: url("../assets/images/icons_user_center.png");
  background-repeat: no-repeat;
  background-size: 135%;
  background-position-x: 3px;
  width: 32px;
  height: 32px;
  display: inline-block;
}
.icon-user-list {
  background-position-y: -475px;
}
.icon-user-pin {
  background-position-y: -535px;
}
.icon-user-aftersale {
  background-position-y: -230px;
}
.icon-user-lead {
  background-position-y: -442px;
}
.icon-user-preemption {
  background-position-y: -594px;
}
.icon-user-points {
  background-position-y: -564px;
}
.icon-user-vipclub {
  background-position-y: -504px;
}
.icon-user-address {
  background-position-y: -200px;
}
.icon-user-security {
  background-position-y: -658px;
}
.icon-user-help {
  background-position-y: -352px;
}
.icon-user-feedback {
  background-position-y: -292px;
}

.btn-login-out {
  margin-top: 20px;
  background-color: white;
  font-size: 14px;
  color: #333;
  text-align: center;
  padding: 16px 0;
  border-bottom: 0.5px solid #ebedf0;
  box-sizing: border-box;
}
</style>
