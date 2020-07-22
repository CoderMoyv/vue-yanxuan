<template>
  <div class="body-box">
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      lazy-render:true
      indicator-color="white"
    >
      <van-swipe-item
        ><img src="https://moyv.top/yanxuan/recommend/banner1.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="https://moyv.top/yanxuan/recommend/banner2.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="https://moyv.top/yanxuan/recommend/banner3.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="https://moyv.top/yanxuan/recommend/banner4.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="https://moyv.top/yanxuan/recommend/banner5.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="https://moyv.top/yanxuan/recommend/banner6.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="https://moyv.top/yanxuan/recommend/banner7.jpg" alt=""
      /></van-swipe-item>
    </van-swipe>

    <div class="info-box">
      <div class="info-item">
        <img src="../assets/images/icon_163.png" alt="" />
        网易自营品牌
      </div>
      <div class="info-item">
        <img src="../assets/images/icon_ensure.png" alt="" />
        30天无忧退货
      </div>
      <div class="info-item">
        <img src="../assets/images/icon_money.png" alt="" />
        48小时快速退款
      </div>
    </div>
    <!--菜单 -->
    <div class="menu-box">
      <router-link to="/item">
      <div class="menu-item">
        <img src="../assets/images/icon_new.png" alt="" />
        <div>新品首发</div>
      </div>
      </router-link>
      <div class="menu-item">
        <img src="../assets/images/icon_live.png" alt="" />
        <div>居家生活</div>
      </div>
      <div class="menu-item">
        <img src="../assets/images/icon_clothes.png" alt="" />
        <div>服饰鞋包</div>
      </div>
      <div class="menu-item">
        <img src="../assets/images/icon_food.png" alt="" />
        <div>美食酒水</div>
      </div>
      <div class="menu-item">
        <img src="../assets/images/icon_clean.png" alt="" />
        <div>个护清洁</div>
      </div>
      <div class="menu-item">
        <img src="../assets/images/icon_mother_and_baby.png" alt="" />
        <div>母婴亲子</div>
      </div>
      <div class="menu-item">
        <img src="../assets/images/icon_travel.png" alt="" />
        <div>运动旅行</div>
      </div>
      <div class="menu-item">
        <img src="../assets/images/icon_digital.png" alt="" />
        <div>数码家电</div>
      </div>
      <div class="menu-item">
        <img src="../assets/images/icon_global.png" alt="" />
        <div>全球特色</div>
      </div>
      <div class="menu-item">
        <img src="../assets/images/icon_seckill.gif" alt="" />
        <div>好货抄底</div>
      </div>
    </div>
    <!--新人 -->
    <div class="new-user-box">
      <img src="../assets/images/banner_new_user.gif" alt="" />
    </div>
    <!--新人专享礼 -->
    <div class="new-user-gift-box">
      <div class="new-user-gift-title">
        — 新人专享礼 —
      </div>
      <div class="new-user-gift-content">
        <div class="new-user-gift-left">
          <div>新人专享礼包</div>
          <div class="img-warp">
            <img src="../assets/images/icon_new_user_gift.png" alt="" />
          </div>
        </div>
        <div class="new-user-gift-right">
          <div class="new-user-gift-right-module1">
            <div class="module-left">
              <div class="module-title">福利社</div>
              <div class="module-subtitle">今日特价</div>
            </div>
            <div class="module-right">
              <div class="discount">
                <div class="discount_line1">¥60</div>
                <div class="discount_line2">¥130</div>
              </div>
              <img src="../assets/images/icon_mask.png" alt="" />
            </div>
          </div>
          <div class="new-user-gift-right-module2">
            <div class="module-left">
              <div class="module-title">新人拼团</div>
              <div class="module-subtitle">1元起包邮</div>
            </div>
            <div class="module-right">
              <div class="discount">
                <div class="discount_line1">¥1</div>
                <div class="discount_line2">¥13.9</div>
              </div>
              <img src="../assets/images/icon_bottle.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--类目热销榜 -->
    <div class="card">
      <div class="card-title-box">
        <div class="card-title-left">
          类目热销榜
        </div>
        <div class="card-title-right"></div>
      </div>
      <div class="card-content">
        <div class="hot-sell-line1">
          <div
            class="hot-sell-line1-item"
            style="background-color: #f9f3e4;
  margin-right: 4px;"
          >
            <div>热销榜</div>
            <img src="../assets/images/icon_cat_food.png" alt="" />
          </div>
          <div class="hot-sell-line1-item" style="background-color: #ebeff6;">
            <div>好评榜</div>
            <img src="../assets/images/icon_paper.png" alt="" />
          </div>
        </div>
        <div class="hot-sell-line2">
          <div
            class="hot-sell-line2-item"
            v-for="(item, index) in hotSellData"
            :key="index"
          >
            <div>{{ item.title }}</div>
            <img v-lazy="item.imgSrc" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!--限时购 -->
    <div class="card">
      <div class="card-title-box">
        <div class="card-title-left">
          <div>限时购</div>
          <van-count-down :time="time">
            <template v-slot="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <div class="card-title-right">
          更多
          <img src="../assets/images/icon_arrow.png" alt="" />
        </div>
      </div>
      <div class="card-content">
        <div class="flash-sale-list">
          <div
            class="flash-sale-item"
            v-for="(item, index) in flashSaleData"
            :key="index"
          >
            <div class="flash-sale-item-img">
              <img v-lazy="item.imgSrc" alt="" />
            </div>
            <div class="flash-sale-item-price">
              <div class="flash-sale-item-price1">
                {{item.actualPrice}}
              </div>
              <div class="flash-sale-item-price2">
                 {{item.retailPrice}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      hotSellData: [],
      flashSaleData: [],
    };
  },
  created() {
    this.axios
      .get("/api/hot-sell.json")
      .then((res) => {
        this.hotSellData = res.data.data;
      })
      .catch((err) => {
        console.error("hotSellData获取失败", err);
      });

    this.axios
      .get("/api/flash-sale.json")
      .then((res) => {
        this.flashSaleData = res.data.data;
      })
      .catch((err) => {
        console.error("flashSaleData获取失败", err);
      });
  },
};
</script>

<style scoped>
.body-box {
  background-color: #f5f5f5;
  margin-bottom: 30px;
}
.van-swipe-item {
  height: 150px;
  display: flex;
  align-items: center;
}
.van-swipe-item img {
  width: 100%;
}
.info-box {
  display: flex;
  padding: 10px 0;
  background-color: white;
}
.info-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #333;
}
.info-item img {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
.menu-box {
  background-color: white;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-row-gap: 10px;
}
.menu-item {
  text-align: center;
}
.menu-item img {
  width: 50px;
  height: 50px;
}
.menu-item div {
  color: rgb(51, 51, 51);
  font-size: 12px;
}
.new-user-box {
  background-color: white;
}
.new-user-box img {
  margin: 10px 0;
  width: 100%;
}
.new-user-gift-box {
  background-color: white;
  padding: 0 16px 16px 16px;
  margin-bottom: 16px;
}
.new-user-gift-content {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.new-user-gift-title {
  text-align: center;
  font-size: 16px;
}
.new-user-gift-left {
  height: 220px;
  flex: 1;
  background-color: #f9e9cf;
  box-sizing: border-box;
  padding: 16px;
  margin-right: 2px;
}
.new-user-gift-left div {
  font-size: 16px;
}
.img-warp {
  text-align: center;
}
.new-user-gift-left img {
  width: 80%;
  margin-top: 20px;
}
.new-user-gift-right {
  flex: 1;
}
.new-user-gift-right-module1 {
  height: 109px;
  background-color: #fbe2d3;
  margin-bottom: 2px;
  display: flex;
}
.new-user-gift-right-module2 {
  height: 109px;
  background-color: #ffecc2;
  display: flex;
}
.module-left {
  flex: 1;
  padding: 16px 0 0 16px;
}
.module-title {
  font-size: 16px;
}
.module-subtitle {
  font-size: 12px;
  color: #7f7f7f;
}
.module-right {
  flex: 1;
}
.module-right img {
  width: 60px;
  position: relative;
  right: 10px;
  bottom: 20px;
}
.discount {
  box-sizing: border-box;
  padding-top: 6px;
  text-align: center;
  width: 40px;
  height: 40px;
  background-color: #f59524;
  border-radius: 50%;
  color: white;
  opacity: 0.8;
  z-index: 2;
  position: relative;
  margin: 10px 0 0 10px;
}
.discount_line1 {
  font-size: 12px;
}
.discount_line2 {
  font-size: 2px;
  text-decoration: line-through;
}
.card {
  padding: 16px;
  background-color: white;
  margin-bottom: 16px;
}
.card-title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-title-left {
  font-size: 16px;
  display: flex;
  align-items: center;
}
.card-title-left > div {
  margin-right: 8px;
}
.card-title-right {
  font-size: 14px;
  display: flex;
  align-items: center;
}
.card-title-right > img {
  width: 7px;
  margin-left: 8px;
}
.hot-sell-line1 {
  margin-top: 16px;
  display: flex;
}
.hot-sell-line1-item {
  flex: 1;
  height: 100px;
  display: flex;
}
.hot-sell-line1-item > div {
  flex: 1;
  padding: 20px;
  font-size: 14px;
}
.hot-sell-line1-item > img {
  padding-top: 10px;
  flex: 1;
  width: 80px;
  height: 80px;
}
.hot-sell-line2 {
  margin-top: 4px;
  display: grid;
  grid-template-columns: repeat(4, 24.1%);
  grid-row-gap: 4px;
  grid-column-gap: 4px;
}
.hot-sell-line2-item {
  background-color: #f5f5f5;
  text-align: center;
  padding: 6px 0;
}
.hot-sell-line2-item > div {
  font-size: 12px;
}
.hot-sell-line2-item > img {
  width: 60px;
}
/* 倒计时start */
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #333;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #333;
  border-radius: 3px;
}
/* 倒计时end */
.flash-sale-list {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 32%);
  grid-row-gap: 8px;
  grid-column-gap: 8px;
}
.flash-sale-item-img {
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flash-sale-item-img img {
  width: 120px;
}
.flash-sale-item-price {
  margin-top: 8px;
  display: flex;
  align-items: center;
}
.flash-sale-item-price1 {
  color: #dd1a21;
  font-size: 15px;
  margin-right: 8px;
}
.flash-sale-item-price2 {
  color: #7f7f7f;
  text-decoration: line-through;
  font-size: 10px;
}
</style>
