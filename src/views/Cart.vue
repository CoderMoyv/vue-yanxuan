<template>
  <div>
    <div class="header">
      <div class="header-left">购物车</div>
      <div class="header-right">领券</div>
    </div>
    <div class="service-policy">
      <div class="service-policy-item">
        <img src="../assets/images/icon_circle.png" alt="" />
        <div>30天无忧退货</div>
      </div>
      <div class="service-policy-item">
        <img src="../assets/images/icon_circle.png" alt="" />
        <div>48小时快速退款</div>
      </div>
      <div class="service-policy-item">
        <img src="../assets/images/icon_circle.png" alt="" />
        <div>满99元免邮费</div>
      </div>
    </div>
    <div class="empty-box" v-show="cartList.length < 1">
      <img src="../assets/images/icon_empty_cart.png" alt="" />
      <div v-if="this.isLogin" class="empty-txt">去添加点什么吧</div>
      <router-link to="/userLogin" v-else
        ><div class="btn-login">登录</div>
      </router-link>
    </div>
    <div class="cart-list">
      <van-checkbox-group
        @change="checkboxChange"
        checked-color="#dd1a21"
        v-model="result"
        ref="checkboxGroup"
      >
        <div class="cart-item" v-for="(item, index) in cartList" :key="index">
          <van-checkbox :name="index"></van-checkbox>
          <img class="product-thumbnail" :src="item.product_thumbnail" alt="" />
          <div class="product-info">
            <div class="product-line1">
              <div class="product-name">
                {{ item.product_name }}
              </div>
              <div class="product-color">
                <span>
                  {{ item.product_color }}
                </span>
              </div>
            </div>
            <div class="product-line2">
              <div class="product-price">¥{{ item.product_price }}</div>
              <van-stepper v-model="item.product_count" />
            </div>
          </div>
        </div>
      </van-checkbox-group>
    </div>
    <div class="footer-box" v-if="cartList.length > 0">
      <div class="left-box">
        <div class="checkAll" @click="checkAll">
          <van-checkbox
            checked-color="#dd1a21"
            v-model="isAllChecked"
          ></van-checkbox>
          <span class="checkAll-txt">已选({{ checkedCount }})</span>
        </div>
        <div class="total">合计：¥{{ totalPrice }}</div>
      </div>
      <div
        :class="{ 'btn-buy': true, disabled: checkedArray.length < 1 }"
        @click="buy"
      >
        下单
      </div>
    </div>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      cartList: [],
      result: [],
      isAllChecked: false,
      checkedCount: 0,
      checkedArray: [],
    };
  },
  computed: {
    ...mapState(["isLogin", "userInfo"]),
    totalPrice() {
      var total = 0;
      for (let i = 0; i < this.checkedArray.length; i++) {
        total +=
          parseInt(this.cartList[this.checkedArray[i]].product_price) *
          parseInt(this.cartList[this.checkedArray[i]].product_count);
      }
      return total;
    },
  },
  methods: {
    checkAll() {
      this.isAllChecked = !this.isAllChecked;
      this.$refs.checkboxGroup.toggleAll(this.isAllChecked);
    },
    checkboxChange(e) {
      //console.log(e);
      this.checkedArray = e;
      this.checkedCount = e.length;
      if (e.length === this.cartList.length) {
        this.isAllChecked = true;
      } else {
        this.isAllChecked = false;
      }
    },
    buy() {
      if (this.checkedArray.length < 1) {
      } else {
        this.$toast({
          type: "success",
          message: "下单成功",
          duration: 1000,
        });
      }
    },
  },
  created() {
    if (this.isLogin) {
      this.axios
        .post("http://120.79.192.43:8900/getcart", {
          userphone: this.userInfo.phone,
        })
        .then((res) => {
          console.log(res.data);
          this.cartList = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
  mounted() {
    document.body.style.backgroundColor = "#f4f4f4";
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 45px;
  padding: 0 16px;
}
.header-left {
  font-size: 18px;
}
.header-right {
  font-size: 16px;
  color: #dd1a21;
}
.service-policy {
  display: flex;
  height: 40px;
  background-color: #eeeeee;
}
.service-policy-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.service-policy-item img {
  width: 6px;
}
.service-policy-item div {
  color: #666666;
  font-size: 12px;
  margin-left: 4px;
}
.empty-box {
  height: 150px;
  position: absolute;
  width: 100%;
  top: 50%;
  margin-top: -75px;
  text-align: center;
}
.empty-box img {
  width: 120px;
}
.empty-txt {
  font-size: 14px;
  color: #7f7f7f;
}
.btn-login {
  font-size: 14px;
  color: white;
  background-color: #dd1a21;
  margin: 16px 64px;
  text-align: center;
  height: 45px;
  line-height: 45px;
}
.cart-item {
  margin-top: 12px;
  padding: 0 16px;
  background-color: white;
  display: flex;
  align-items: center;
  height: 120px;
}
.product-thumbnail {
  width: 90px;
  height: 100px;
  margin-left: 10px;
  border-radius: 2px;
}
.product-name {
  font-size: 14px;
  color: #333;
}
.product-info {
  height: 100px;
  flex: 1;
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-color {
  display: flex;
  margin-top: 8px;
}
.product-color span {
  background-color: #fafafa;
  border-radius: 2px;
  padding: 2px 4px;
  font-size: 10px;
  color: #7f7f7f;
  border: 1px solid #efefef;
  box-sizing: border-box;
}
.product-price {
  color: #333;
  font-size: 15px;
}
.product-line1 {
  flex: 1;
}
.product-line2 {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.footer-box {
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 50px;
  display: flex;
  height: 60px;
  justify-content: space-between;
}
.btn-buy {
  width: 115px;
  height: 60px;
  font-size: 14px;
  color: white;
  background-color: #dd1a21;
  line-height: 60px;
  text-align: center;
}
.footer-box .disabled {
  background-color: #ccc;
}
.left-box {
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
}
.checkAll {
  font-size: 14px;
  color: #7f7f7f;
  display: flex;
  align-items: center;
}
.checkAll-txt {
  margin-left: 8px;
}
.total {
  font-size: 14px;
  color: #dd1a21;
}
</style>
