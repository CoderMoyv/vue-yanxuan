<template>
  <div>
    <MainNavBar></MainNavBar>
    
    <div class="btn-box van-hairline--top">
      <div class="btn-return" @click="goBack">
        返回
      </div>
      <div class="btn-buy van-hairline--left">
        立即购买
      </div>
      <div class="btn-add-to-cart">
        加入购物车
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
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.bodyBox {
  padding-top: 50px;
  padding-bottom: 50px;
}
.router-view {
  margin-bottom: 0;
}

.btn-box {
  height: 50px;
  display: flex;
  bottom: 0;
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 120;
}
.btn-return {
  flex: 1;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.btn-buy {
  flex: 2;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.btn-add-to-cart {
  flex: 2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: #dd1a21;
}
</style>
