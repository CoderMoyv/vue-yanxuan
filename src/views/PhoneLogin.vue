<template>
  <div>
    <MainNavBar> </MainNavBar>
    <div class="logo-warp">
      <img src="../assets/images/icon_logo.png" alt="" />
    </div>
    <div class="input-warp">
      <input
        type="num"
        v-model="phone"
        placeholder="请输入手机号"
        maxlength="11"
      />
    </div>
    <div class="input-warp" v-show="isCode">
      <input
        type="num"
        v-model="code"
        placeholder="请输入短信验证码"
        maxlength="6"
      />
      <button class="input-btn">获取验证码</button>
    </div>
    <div class="input-warp" v-show="!isCode">
      <input
        type="password"
        v-model="pwd"
        placeholder="请输入密码"
        maxlength="16"
      />
    </div>
    <div class="error-info" v-show="errorInfoIndex != -1">
      {{ errorInfoArray[errorInfoIndex] }}
    </div>
    <div class="info-warp">
      <div class="text_gray">遇到问题?</div>
      <div @click="changeType">
        {{ isCode ? "使用密码验证登录" : "短信快捷登录" }}
      </div>
    </div>
    <div class="btn_login" @click="login()">登录</div>
    <div class="tos-warp">
      <van-checkbox
        v-model="tosChecked"
        shape="square"
        checked-color="#dd1a21"
        icon-size="16px"
      >
        我同意<span class="text_link">《服务条款》</span> 和<span
          class="text_link"
          >《网易隐私政策》</span
        >
      </van-checkbox>
    </div>
    <div class="order-warp">
      <div>其他登录方式</div>
      <img src="../assets/images/icon_arrow.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainNavBar from "../components/MainNavBar.vue";
export default {
  components: {
    MainNavBar,
  },
  data() {
    return {
      tosChecked: true,
      isCode: true,
      phone: "",
      pwd: "",
      code: "",
      errorInfoArray: [
        "请输入手机号",
        "请输入密码",
        "请输入短信验证码",
        "手机号格式错误",
        "账号或密码错误",
        "您需要同意相关条款才能使用",
      ],
      errorInfoIndex: -1,
    };
  },
  computed: {
    ...mapState(["isLogin"]),
  },
  methods: {
    login() {
      if (this.phone === "") {
        this.errorInfoIndex = 0;
        return;
      } else if (this.pwd === "" && this.code === "") {
        if (this.isCode) {
          this.errorInfoIndex = 2;
        } else {
          this.errorInfoIndex = 1;
        }
        return;
      } else if (!this.tosChecked) {
        this.errorInfoIndex = 5;
        return;
      } else {
        this.errorInfoIndex = -1;
        this.axios
          .post("http://120.79.192.43:8900/login", {
            phone: this.phone,
            pwd: this.pwd,
          })
          .then((res) => {
            console.log(res);
            if (res.data[0].status === "账号或密码错误") {
              this.errorInfoIndex = 4;
              return;
            } else {
              this.errorInfoIndex = -1;
              this.$toast({
                type: "success",
                message: "登录成功",
                duration: 1000,
              });
              this.$cookies.set("userInfo", res.data[0], "1d");
              this.$store.commit("setLoginInfo", res.data[0]);
              setTimeout(() => {
                this.$store.commit("login");
                this.$router.push({ path: "/userCenter" });
              }, 500);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    changeType() {
      this.isCode = !this.isCode;
    },
  },
  created() {
    if (this.isLogin) {
      this.$router.push({ path: "/userCenter" });
    } else {
    }
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
.text_link {
  color: #007aff;
}
.order-warp {
  margin-top: 16px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
}
.order-warp img {
  width: 8px;
  margin-left: 8px;
}
.error-info {
  font-size: 12px;
  color: #dd1a21;
  margin-left: 20px;
}
</style>
