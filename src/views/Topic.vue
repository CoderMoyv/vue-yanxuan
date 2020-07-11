<template>
  <div style="background-color:#eee;">
    <MainNavBar isLogo="true"></MainNavBar>
    <div class="topic-header-box">
      <div class="topic-title">
        <img src="../assets/images/icon_topic_txt.png" alt="" />
        <p>严选好物 用心生活</p>
      </div>
    </div>
    <div class="card-box">
      <div class="card">
        <div class="scrollview">
          <div class="card-item" v-for="item in list" v-bind:key="item">
            <div>
              <img
                class="card-item-img"
                src="../assets/images/icon_topic_round_01.gif"
                alt=""
              />
              <div class="card-item-title">9.9超值</div>
              <div class="card-item-subtitle">爆品定价直降</div>
            </div>

            <div>
              <img
                class="card-item-img"
                src="../assets/images/icon_topic_round_01.gif"
                alt=""
              />
              <div class="card-item-title">9.9超值</div>
              <div class="card-item-subtitle">爆品定价直降</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-progress">
        <van-progress :percentage="30" color="#DD1A21" pivot-text="" />
      </div>
    </div>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="wrappers">
        <div class="wrappers-left">
          <div class="look-card" v-for="item in list2" :key="item">
            <img src="../assets/images/pic_wrappers_01.jpg" alt="" />
            <div class="look-title ">
              雨季除湿大作战
            </div>
            <div class="look-detail">
              <img src="../assets/images/icon_xuan.jpg" alt="" />
              <div class="username">选购指南</div>
              <div class="look-visits">
                <img src="../assets/images/icon_visits.png" alt="" />
                <p>5182</p>
              </div>
            </div>
          </div>
        </div>
        <div class="wrappers-right">
          <div v-for="item in list2" :key="item">
            <div class="look-card" v-for="item in list2" :key="item">
              <img src="../assets/images/pic_wrappers_02.jpg" alt="" />
            <div class="look-title ">
              喝了这杯酸梅汤，再也不想喝奶茶了
            </div>
            <div class="look-detail">
              <img src="../assets/images/icon_user01.jpg" alt="" />
              <div class="username">网易味央：小周</div>
              <div class="look-visits">
                <img src="../assets/images/icon_visits.png" alt="" />
                <p>2604</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import MainNavBar from "../components/MainNavBar.vue";
export default {
  components: {
    MainNavBar,
  },
  data() {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7],
      list2: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list2.push(this.list2.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list2.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.topic-header-box {
  margin-top: 50px;
  padding-top: 32px;
  background-image: url("../assets/images/bg_topic_header.png");
  width: 100%;
  background-size: 100% 100%;
  height: 280px;
  z-index: -1;
}
.topic-title {
  display: flex;
  margin: 0 0 16px 8px;
}
.topic-title > img {
  width: 72px;
}
.topic-title > p {
  color: white;
  font-size: 16px;
  margin: 0;
  align-self: flex-end;
  margin-bottom: 6px;
}
.card-box {
  position: absolute;
  top: 124px;
  width: 100%;
}
.card {
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  margin: 0 8px;
  padding: 16px 0;
  overflow: hidden;
  overflow-x: auto;
}
.scrollview {
  width: 200%;
}
.card-item {
  width: 12.5%;
  display: inline-block;
}
.card-item > div {
  margin-bottom: 16px;
}
.card-item div {
  text-align: center;
}
.card-item-img {
  width: 60px;
}
.card-item-title {
  font-size: 14px;
  font-weight: bold;
}
.card-item-subtitle {
  font-size: 10px;
  color: #999999;
}
.card-progress {
  margin-top: -16px;
  display: flex;
  justify-content: center;
}
.van-progress {
  width: 200px;
}
.van-list {
  margin: 50px 0 50px 0;
  padding: 0 8px;
}
.wrappers {
  display: flex;
}
.wrappers-left {
  width: 50%;
  padding-right: 4px;
  box-sizing: border-box;
}
.look-card {
  background: white;
  border-radius: 8px;
  padding-bottom: 8px;
  overflow: hidden;
  margin-bottom: 8px;
}
.wrappers-right {
  width: 50%;
  padding-left: 4px;
  box-sizing: border-box;
}
.look-card img {
  width: 100%;
}
.look-title {
  font-size: 14px;
  margin: 0 8px;
  word-wrap: break-word;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.look-detail {
  display: flex;
  align-items: center;
  margin: 4px 8px;
}
.look-detail img {
  width: 22px;
  border-radius: 50%;
}
.username {
  font-size: 12px;
  color: #7f7f7f;
  margin-left: 4px;
  margin-right: auto;
}
.look-visits{
    display: flex;
    align-items: center;
}
.look-visits img {
  width: 18px;
}
.look-visits p{
    font-size: 12px;
    color: #7f7f7f;
}
</style>
