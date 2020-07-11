<template>
  <div>
    <div class="header-box">
      <img class="logo" src="../assets/images/logo.png" alt="" />
      <div class="search-box">
        <van-icon name="search" />
        <div>搜索商品, 共33504款好物</div>
      </div>
      <button class="btn-login">登录</button>
    </div>
    <van-tabs
      sticky
      color="#dd1a21"
      title-active-color="#dd1a21"
      line-height="2px"
      title-inactive-color="#333333"
    >
      <van-tab class="v-tab" :title="'推荐'">
        <Recommend></Recommend>
      </van-tab>
      <van-tab class="v-tab" :title="'居家生活'">
        推荐
      </van-tab>
      <van-tab class="v-tab" :title="'服饰鞋包'">
        推荐
      </van-tab>
      <van-tab class="v-tab" :title="'美食酒水'">
        推荐
      </van-tab>
      <van-tab class="v-tab" :title="'个护清洁'">
        推荐
      </van-tab>
      <van-tab class="v-tab" :title="'母婴亲子'">
        推荐
      </van-tab>
    </van-tabs>
  </div>
</template>

<script >
import Recommend from "../components/Recommend.vue";
export default {
  components: {
    Recommend
  }
};
</script>

<style scoped>
.logo {
  width: 70px;
}
.header-box {
  display: flex;
  align-items: center;
  margin: 8px 14px;
}
.search-box {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666666;
  padding: 6px 16px;
  background-color: #ededed;
  border-radius: 5px;
  flex: 1;
  margin: 0 8px;
  justify-content: center;
}
.search-box div {
  margin-left: 4px;
}
.btn-login {
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid #dd1a21;
  color: #dd1a21;
  background-color: white;
}

.v-tab {
  font-size: 20px;
}
.van-sticky {
  z-index: 9999;
}
</style>
