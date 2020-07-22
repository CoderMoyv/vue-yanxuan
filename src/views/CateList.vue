<template>
  <div :style="{ height: height }">
    <div class="cate-header-box van-hairline--bottom">
      <div class="cate-search-box" @click="goSearch()">
        <van-icon name="search" />
        <div>搜索商品, 共33504款好物</div>
      </div>
    </div>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        replace
        :to="{ path: '/cateList', query: { id: index } }"
        v-for="(item, index) in tabArray"
        :key="index"
        :title="item"
      />
    </van-sidebar>
    <!-- 右边cate容器 开始-->
    <div class="cateContainer" v-show="tabArray[activeKey] === '推荐'">
      <!-- banner -->
      <img class="cateContainer-banner" :src="cateData.bannerImgSrc" alt="" />
      <!-- 列表 循环-->
      <div v-for="(item, index) in cateData.list" :key="index">
        <div class="cateList-title">{{ item.itemTitle }}</div>
        <div class="cateList">
          <div
            class="cateItem"
            v-for="(itemSon, indexSon) in item.itemArray"
            :key="indexSon"
          >
            <img :src="itemSon.imgSrc" alt="" />
            <div>{{ itemSon.title }}</div>
          </div>
        </div>
      </div>
      <!-- 循环结束 -->
    </div>
    <!-- 右边cate容器 结束 -->
    <div class="cateContainer" v-show="tabArray[activeKey] !== '推荐'">
      {{ tabArray[activeKey] }}
    </div>
    <!-- 底部导航栏 -->
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeKey: 0,
      sidebar_height: "",
      cateData: {},
    };
  },
  computed: {
    ...mapState(["tabArray"]),
  },
  methods: {
    getData() {
      if (this.activeKey == 0) {
        this.axios
          .get("/api/catelist-0.json")
          .then((res) => {
            this.cateData = res.data.data;
          })
          .catch((err) => {
            console.error("cateData获取失败", err);
          });
      }
    },
    goSearch(){
      this.$router.push('/search')
    }
  },
  created() {
    
    this.height = window.innerHeight;
    this.activeKey = this.$route.query.id!==undefined ? this.$route.query.id : 0;
    this.getData()
  },
  updated() {
    this.getData()
  },
  mounted(){
    document.body.style.backgroundColor="#fff";
  }
};
</script>

<style scoped>
.cate-header-box {
  position: fixed;
  box-sizing: border-box;
  padding: 8px 16px;
  width: 100%;
  height: 50px;
  top: 0;
  background-color: white;
}
.cate-search-box {
  width: 100%;
  padding: 6px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666666;
  background-color: #ededed;
  border-radius: 5px;
  justify-content: center;
}
.cate-search-box > div {
  margin-left: 4px;
}
.van-sidebar {
  height: 80%;
  position: fixed;
  top: 50px;
  width: 88px;
}
.van-sidebar-item--select::before {
  background-color: #ab2b2b;
  height: 24px;
  width: 3px;
}
.van-sidebar-item {
  background-color: white;
}
.van-sidebar-item--select {
  color: #ab2b2b;
}
.cateContainer {
  margin-left: 88px;
  margin-top: 50px;
  padding: 16px;
}
.cateContainer-banner {
  width: 100%;
}
.cateList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}
.cateItem {
  text-align: center;
}
.cateItem > img {
  width: 100%;
  height: 70px;
}
.cateItem > div {
  font-size: 12px;
}
.cateList-title {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 6px;
}
</style>
