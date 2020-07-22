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
    <div class="empty-box">
      <img src="../assets/images/icon_empty_cart.png" alt="" />
      <div>去添加点什么吧</div>
    </div>
     <MainTabbar></MainTabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted(){
    document.body.style.backgroundColor="#f4f4f4";
  }
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
.empty-box div {
  font-size: 14px;
  color: #7f7f7f;
}
</style>
