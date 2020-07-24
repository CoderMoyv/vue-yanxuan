<template>
  <div class="bodyBox">
    <MainNavBar></MainNavBar>
    <div v-show="!popupParamSelectShow">
      <van-swipe @change="swipeOnChange">
        <van-swipe-item v-for="(item, index) in detailData.imgSrc" :key="index">
          <img :src="item" alt="" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ swipeCurrent + 1 }}/5</div>
        </template>
      </van-swipe>
      <div class="content">
        <div class="price">¥{{ detailData.price }}</div>
        <div class="svip-banner">
          <div class="svip-price">
            <div class="svip-discount">
              <span>专享95折</span>
            </div>
            <div class="svip-desc">
              Pro会员叠加优惠，到手价
              <span class="svip-discount-price">1044.05</span>
            </div>
            <img
              class="icon_question"
              src="../assets/images/icon_question_mark.png"
              alt=""
            />
          </div>
          <div class="svip-btn">
            开通
          </div>
        </div>
        <div class="base-info">
          <div class="info">
            <div class="name">{{ detailData.name }}</div>
            <div class="desc">推荐理由</div>
          </div>
          <div class="comment">
            <div class="comment-wrap">
              <div class="comment-num">97.9%</div>
              <div class="comment-txt">好评率</div>
            </div>
            <img
              class="icon_arrow"
              src="../assets/images/icon_arrow.png"
              alt=""
            />
          </div>
        </div>
        <div class="rcmd-banner">
          <div class="angle-top">
            <div class="angle-content"></div>
          </div>
          <div class="rcmd-list">
            <div
              class="rcmd-item"
              v-for="(item, index) in detailData.rcmd"
              :key="index"
            >
              <div class="rcmd-key">{{ index + 1 }}</div>
              <div class="rcmd-txt">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="v-cell-group">
        <div class="v-cell">
          <div class="v-cell-content">
            <div class="v-cell-title">
              邮费：
            </div>
            <div class="v-cell-txt">
              满99元免邮
            </div>
          </div>
          <img src="../assets/images/icon_arrow.png" alt="" />
        </div>
        <div class="v-cell">
          <div class="v-cell-content">
            <div class="v-cell-title">
              促销：
            </div>
            <div class="v-cell-txt">
              <span class="tag-global">全场换购</span> 低至1元超低价换购
            </div>
          </div>
          <img src="../assets/images/icon_arrow.png" alt="" />
        </div>
        <div class="v-cell">
          <div class="v-cell-content">
            <div class="v-cell-title">
              购物返：
            </div>
            <div class="v-cell-txt">
              最高返 <span style="color: rgb(221, 26, 33);"> 109积分 </span>
            </div>
          </div>
          <img src="../assets/images/icon_arrow.png" alt="" />
        </div>
      </div>
      <div class="v-cell-group">
        <div class="v-cell" @click="openPopupParamSelect">
          <div class="v-cell-content">
            <div class="v-cell-title">
              {{
                selectedColor == "请选择规格数量" ? selectedColor : "已选择："
              }}
            </div>
            <div class="v-cell-txt">
              {{
                selectedColor == "请选择规格数量"
                  ? ""
                  : selectedColor + "X" + selectedCount
              }}
            </div>
          </div>
          <img src="../assets/images/icon_arrow.png" alt="" />
        </div>
        <div class="v-cell" @click="openPopupAreaPicker">
          <div class="v-cell-content">
            <div class="v-cell-title">
              配送：
            </div>
            <div class="v-cell-txt ">
              <span class="text_gray" v-show="selectedArea.length < 1">
                请选择配送地址
              </span>
              <span v-for="(item, index) in selectedArea" :key="index">
                {{ item ? item.name : "" }}
              </span>
            </div>
          </div>
          <img src="../assets/images/icon_arrow.png" alt="" />
        </div>
        <div class="v-cell">
          <div class="v-cell-content">
            <div class="v-cell-title">
              服务：
            </div>
            <div class="v-cell-txt">
              <div
                class="service-item text_gray"
                v-for="(item, index) in detailData.service"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <img src="../assets/images/icon_arrow.png" alt="" />
        </div>
      </div>
      <div class="ad-banner">
        <van-swipe :autoplay="3000" indicator-color="#DD1A21">
          <van-swipe-item>
            <img src="../assets/images/bg_ad01.jpg" alt="" />
          </van-swipe-item>
          <van-swipe-item
            ><img src="../assets/images/bg_ad02.jpg" alt=""
          /></van-swipe-item>
        </van-swipe>
      </div>
      <div class="attr-box">
        <div class="attr-title">商品参数</div>
        <div class="attr-list">
          <div
            class="attr-item"
            v-for="(value, key) in detailData.attr"
            :key="key"
          >
            <div class="attr-key">{{ key }}</div>
            <div class="attr-value">{{ value }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="btn-box van-hairline--top">
      <div class="btn-kefu" v-show="!popupParamSelectShow">
        <img src="../assets/images/icon_kefu.png" alt="" />
      </div>
      <div
        class="btn-return"
        v-show="popupParamSelectShow"
        @click="closePopupParamSelect"
      >
        返回
      </div>
      <div class="btn-buy van-hairline--left" @click="buy">
        立即购买
      </div>
      <div class="btn-add-to-cart" @click="addToCart">
        加入购物车
      </div>
    </div>
    <!-- 选择规格数量弹窗 start -->
    <div class="popup-param-select" v-show="popupParamSelectShow">
      <div class="param-select-info">
        <img :src="detailData.thumbnail" alt="" />
        <div>
          <div class="param-select-price">价格：{{ detailData.price }}</div>
          <div class="param-select-sku">已选择：{{ selectedColor }}</div>
        </div>
      </div>
      <div class="param-select-format">
        <div class="format-title">
          颜色
        </div>
        <div class="format-list">
          <div
            :class="{ 'format-item': true, active: item == selectedColor }"
            @click="selectColor(item)"
            v-for="(item, index) in detailData.color"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="param-select-format">
        <div class="format-title">
          数量
        </div>
        <div class="format-list">
          <van-stepper
            v-model="selectedCount"
            integer
            :max="detailData.stock"
            input-width="60px"
            button-size="30px"
          />
        </div>
      </div>
    </div>
    <!-- 选择规格数量弹窗 end -->
    <!-- 选择配送地址弹窗 start -->
    <van-popup v-model="popupAreaPickerShow" position="bottom">
      <van-area
        title="配送至"
        :area-list="areaList"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        @confirm="overPopupAreaPicker"
      />
    </van-popup>
    <!-- 选择配送地址弹窗 end -->
  </div>
</template>

<script>
import MainNavBar from "../components/MainNavBar.vue";
import areaList from "../assets/js/arealist";
import { mapState } from "vuex";
export default {
  components: {
    MainNavBar,
  },
  data() {
    return {
      detailData: {},
      swipeCurrent: 0,
      popupParamSelectShow: false,
      selectedColor: "请选择规格数量",
      selectedCount: 1,
      popupAreaPickerShow: false,
      areaList: areaList,
      selectedArea: [],
      id: 1,
    };
  },
  computed: {
    ...mapState(["isLogin", "userInfo"]),
  },
  methods: {
    swipeOnChange(index) {
      this.swipeCurrent = index;
    },
    openPopupParamSelect() {
      this.popupParamSelectShow = true;
    },
    closePopupParamSelect() {
      this.popupParamSelectShow = false;
    },
    selectColor(item) {
      this.selectedColor = this.selectedColor == item ? "请选择规格数量" : item;
    },
    openPopupAreaPicker() {
      this.popupAreaPickerShow = true;
    },
    overPopupAreaPicker(res) {
      console.log(res);
      this.selectedArea = res;
      this.popupAreaPickerShow = false;
    },
    buy() {
      if (this.isLogin) {
        this.$toast({
          type: "success",
          message: "购买成功",
          duration: 1000,
        });
      } else {
        this.$router.push({ path: "/userLogin" });
      }
    },
    addToCart() {
      if (this.isLogin) {
        if (this.selectedColor == "请选择规格数量") {
          this.openPopupParamSelect();
        } else {
          this.axios
            .post("http://120.79.192.43:8900/addtocart", {
              userphone: this.userInfo.phone,
              product_id: this.id,
              product_color: this.selectedColor,
              product_count: this.selectedCount,
              product_price:this.detailData.price,
              product_thumbnail: this.detailData.thumbnail,
              product_name: this.detailData.name
            })
            .then((res) => {
              console.log(res);
              if (res.data.status === 1) {
                this.$toast({
                  type: "success",
                  message: "添加成功",
                  duration: 1000,
                });
              }
            })
            .catch((err) => {
              console.error(err);
            });
        }
      } else {
        this.$router.push({ path: "/userLogin" });
      }
    },
  },
  created() {
    if (this.$route.query.id) {
      this.id = this.$route.query.id + "";
    } else {
      this.$router.push({ path: "/item" });
      return;
    }
    //console.log(this.id);
    this.axios
      .post("http://120.79.192.43:8900/detail", { id: this.id })
      .then((res) => {
        this.detailData = res.data[0];
        //console.log(this.detailData);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  mounted() {
    document.body.style.backgroundColor = "#F4F4F4";
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
.custom-indicator {
  position: absolute;
  right: 16px;
  bottom: 16px;
  padding: 1px 6px;
  font-size: 10px;
  color: #333;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  transform: scale(0.9);
}
.van-swipe-item {
  height: 375px;
  display: flex;
  align-items: center;
  background-color: #fff;
}
.van-swipe-item img {
  width: 100%;
}
.content {
  padding: 16px;
  background-color: #fff;
}
.price {
  color: #dd1a21;
  font-weight: bold;
  font-size: 26px;
}
.svip-banner {
  margin: 6px 0 16px 0;
  background-image: url("../assets/images/bg_svip_banner.png");
  background-size: 100% 100%;
  height: 36px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.svip-price {
  display: flex;
  align-items: center;
  flex: 1;
}
.svip-discount {
  width: 60px;
  background-image: linear-gradient(123deg, #f1c698 0, #c3945b 100%);
  color: #333;
  height: 36px;
  display: flex;
  align-items: center;
  -webkit-clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
  clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
  box-sizing: border-box;
}
.svip-discount > span {
  font-size: 10px;
  transform: scale(0.8);
  font-weight: bold;
}
.svip-desc {
  flex: 1;
  margin-left: 4px;
  font-size: 10px;
  color: #fff1d2;
  transform: scale(0.9);
  transform-origin: left;
}
.svip-discount-price {
  font-weight: 700;
  color: #f3ca84;
}
.icon_question {
  margin-left: 2px;
  width: 14px;
}
.svip-btn {
  color: #333;
  background-image: linear-gradient(140deg, #ffe3c4 0, #ce7f29 100%);
  border-radius: 50px;
  padding: 1px 4px;
  font-size: 10px;
  margin-right: 12px;
}
.base-info {
  display: flex;
}
.info {
  flex: 1;
}
.name {
  color: #333;
  font-weight: 700;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.desc {
  margin-top: 4px;
  font-size: 12px;
  color: #888888;
}
.comment {
  display: flex;
  align-items: center;
}
.comment-num {
  color: #dd1a21;
  font-weight: 700;
  font-size: 17px;
}
.comment-txt {
  margin-top: 4px;
  font-size: 12px;
  color: #888888;
}
.icon_arrow {
  width: 7px;
  margin-left: 6px;
}
.rcmd-banner {
  margin-top: 8px;
  background: #fafafa;
  border: 1px solid #e6e6e6;
  padding: 8px;
  border-radius: 4px;
  position: relative;
}
.angle-top {
  top: -8px;
  left: 16px;
  border-bottom: 8px solid #e6e6e6;
  position: absolute;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.angle-content {
  position: absolute;
  left: -7.5px;
  top: 1px;
  border-bottom: 8px solid #fafafa;
  width: 0;
  height: 0;
  border-left: 7.5px solid transparent;
  border-right: 7.5px solid transparent;
}
.rcmd-item {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}
.rcmd-item:last-child {
  margin: 0;
}
.rcmd-key {
  font-size: 10px;
  border: 0.1px solid #dd1a21;
  border-radius: 50%;
  color: #dd1a21;
  font-weight: 700;
  width: 12px;
  height: 12px;
  line-height: 12px;
  text-align: center;
  box-sizing: border-box;
}
.rcmd-txt {
  font-size: 10px;
  margin-left: 5px;
}
.v-cell-group {
  margin-top: 16px;
  background-color: white;
  padding-left: 16px;
}
.v-cell {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  color: #333;
  border-bottom: 0.1px solid #d9d9d979;
  align-items: center;
}
.v-cell:last-child {
  border: 0;
}
.v-cell-content {
  flex: 1;
  display: flex;
}
.v-cell > img {
  width: 8px;
  margin-right: 16px;
}
.tag-global {
  background-image: linear-gradient(270deg, #ff8659 0, #fe2c30 100%);
  color: #fff;
  border-radius: 50px;
  padding: 1px 5px;
  font-size: 8px;
  display: inline-block;
  transform: scale(0.75);
}
.v-cell-txt {
  flex: 1;
}
.service-item {
  font-size: 14px;
  display: inline-block;
  position: relative;
  padding-left: 8px;
  margin-right: 16px;
  margin-bottom: 2px;
}
.service-item::after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  background: #dd1a21;
  border-radius: 100%;
  left: 0;
  top: 8px;
}
.ad-banner {
  margin: 16px 0;
}
.ad-banner .van-swipe-item {
  display: flex;
  align-items: center;
  height: 100px;
}
.ad-banner .van-swipe-item img {
  width: 100%;
}
.attr-box {
  padding: 16px;
  background-color: white;
}
.attr-title {
  color: #333;
  font-size: 14px;
}
.attr-list {
  margin-top: 16px;
}
.attr-item:first-child {
  border-top: 0.1px dashed #919191;
}
.attr-item {
  padding: 8px 0;
  display: flex;
  font-size: 12px;
  border-bottom: 0.1px dashed #919191;
}
.attr-key {
  width: 80px;
  color: #999;
}
.attr-value {
  flex: 1;
  color: #333;
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
.btn-kefu {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-return {
  flex: 1;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.btn-kefu > img {
  width: 30px;
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
.popup-param-select {
  position: fixed;
  top: 0;
  padding: 66px 16px;
  width: 100%;
  height: 100%;
  background-color: white;
  box-sizing: border-box;
}
.param-select-info {
  display: flex;
  align-items: flex-end;
}
.param-select-info img {
  width: 100px;
  margin-right: 8px;
}
.param-select-price {
  color: #dd1a21;
  font-size: 14px;
}
.param-select-sku {
  font-size: 14px;
  color: #333;
}
.param-select-format {
  margin-top: 16px;
}
.format-title {
  font-size: 14px;
}
.format-list {
  margin-top: 8px;
}
.format-item {
  display: inline-block;
  border: 0.1px solid #7f7f7f;
  color: #333;
  font-size: 14px;
  padding: 8px;
  margin-right: 12px;
}
.format-list .active {
  border: 0.1px solid #dd1a21;
  color: #dd1a21;
}
</style>
