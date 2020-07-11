<template>
  <div :style="{ height: height }">
    <div class="cate-header-box van-hairline--bottom" >
      <div class="cate-search-box">
        <van-icon name="search" />
        <div>搜索商品, 共33504款好物</div>
      </div>
    </div>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="推荐专区" />
      <van-sidebar-item title="新品专区" />
      <van-sidebar-item title="居家生活" />
      <van-sidebar-item title="服饰鞋包" />
      <van-sidebar-item title="美食酒水" />
      <van-sidebar-item title="个护清洁" />
      <van-sidebar-item title="母婴亲子" />
      <van-sidebar-item title="运动旅行" />
      <van-sidebar-item title="数码家电" />
      <van-sidebar-item title="严选全球" />
    </van-sidebar>
    <div class="cateContainer">
      <img
        class="cateContainer-banner"
        src="../assets/images/banner_recommend.png"
        alt=""
      />
      <div class="cateList-title">口碑好货</div>
      <div class="cateList">
        <div class="cateItem">
          <img src="../assets/images/icon_recommend_01.png" alt="" />
          <div>员工精选</div>
        </div>
        <div class="cateItem">
          <img src="../assets/images/icon_recommend_01.png" alt="" />
          <div>员工精选</div>
        </div>
        <div class="cateItem">
          <img src="../assets/images/icon_recommend_01.png" alt="" />
          <div>员工精选</div>
        </div>
        <div class="cateItem">
          <img src="../assets/images/icon_recommend_01.png" alt="" />
          <div>员工精选</div>
        </div>
        <div class="cateItem">
          <img src="../assets/images/icon_recommend_01.png" alt="" />
          <div>员工精选</div>
        </div>
        <div class="cateItem">
          <img src="../assets/images/icon_recommend_01.png" alt="" />
          <div>员工精选</div>
        </div>
        <div class="cateItem">
          <img src="../assets/images/icon_recommend_01.png" alt="" />
          <div>员工精选</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      activeKey: 0,
      sidebar_height: "",
    };
  },
  created() {
    this.height = window.innerHeight;
  },
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
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}
.cateItem {
  text-align: center;
}
.cateItem > img {
  width: 100%;
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
