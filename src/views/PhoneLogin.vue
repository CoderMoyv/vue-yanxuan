<template>
  <div>
    <MainNavBar> </MainNavBar>
    <div class="logo-warp">
      <img src="../assets/images/icon_logo.png" alt="" />
    </div>
    <div class="input-warp">
      <input type="num" placeholder="请输入手机号" maxlength="11" />
    </div>
    <div class="input-warp">
      <input type="num" placeholder="请输入短信验证码" maxlength="6" />
      <button class="input-btn">获取验证码</button>
    </div>
    <div class="info-warp">
      <div class="text_gray">遇到问题?</div>
      <div>使用密码验证登录</div>
    </div>
    <div class="btn_login" @click="login()">登录</div>
    <div class="tos-warp">
      <van-checkbox v-model="tosChecked" shape="square" checked-color="#dd1a21" icon-size="16px"
        >我同意 <span class="text_link">《服务条款》</span> 和<span class="text_link">《网易隐私政策》</span> </van-checkbox
      >
    </div>
    <div class="order-warp">
        <div>其他登录方式</div>
        <img src="../assets/images/icon_arrow.png" alt="">
    </div>
  </div>
</template>

<script>
import MainNavBar from "../components/MainNavBar.vue";
export default {
  components: {
    MainNavBar,
  },
  methods:{
    login(){
      this.$store.commit('login');
       this.$router.push({path:'/userCenter'});
    }
  },
  data() {
    return {
      tosChecked: true,
    };
  },
};
</script>

<style scoped>
.logo-warp {
  margin-top: 80px;
  margin-bottom: 30px;
  text-align: center;
}
.logo-warp img {
  width: 130px;
}
.input-warp {
  margin: 12px 20px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-warp input {
  font-size: 14px;
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 16px 0;
}
.input-btn {
  font-size: 14px;
  background-color: white;
  border: 1px solid #d9d9d9;
  padding: 4px;
}
.info-warp {
  margin: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-warp > div {
  font-size: 14px;
}
.btn_login {
  margin: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  font-size: 14px;
  background-color: #dd1a21;
  color: white;
  border-radius: 4px;
}
.tos-warp {
  margin: 4px 20px;
  font-size: 12px;
}
.text_link{
    color: #007AFF;
}
.order-warp{
    margin-top: 16px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
}
.order-warp img{
    width: 8px;
    margin-left: 8px;
}
</style>
