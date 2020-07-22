<template>
  <div
    style="
  background-color: white;"
  >
    <div class="header-box">
      <div class="input-box">
        <van-icon name="search" />
        <input type="text" placeholder="9.9元超值专区" />
      </div>
      <div class="btn-cancel" @click="goBack()">取消</div>
    </div>
    <div class="hot-box">
      <div class="hot-title">热门搜索</div>
      <div class="hot-list">
        <div
          v-for="(item, index) in hotArray"
          :key="index"
          :class="{ 'hot-item': true, highlight: item.isHighlight }"
        >
          {{ item.txt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotArray: [
        { txt: "新人首单0元购", isHighlight: true },
        { txt: "717吃吃节", isHighlight: true },
        { txt: "凉席", isHighlight: false },
        { txt: "口罩专区", isHighlight: true },
        { txt: "拖把", isHighlight: false },
        { txt: "雨伞", isHighlight: true },
        { txt: "手机壳", isHighlight: false },
        { txt: "防霉除湿", isHighlight: true },
        { txt: "耳机", isHighlight: false },
        { txt: "乳胶枕", isHighlight: false },
        { txt: "四件套", isHighlight: false },
        { txt: "咖啡", isHighlight: false },
      ],
    };
  },
  methods: {
    goBack() {
      if (this.$route.query.goindex === "true") {
        this.$router.push("/");
      } else {
        this.$router.back(-1);
      }
    },
  },
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color: #f4f4f4");
  },
  beforeDestroy() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color: #fff");
  },
};
</script>

<style scoped>
.header-box {
  width: 100%;
  box-sizing: border-box;
  padding: 8px 16px;
  display: flex;
  align-items: center;
}
.input-box {
  flex: 1px;
  display: flex;
  font-size: 16px;
  background-color: #f4f4f4;
  justify-content: left;
  padding: 4px 8px;
  align-items: center;
}
.input-box input {
  width: 100%;
  border: 0;
  background-color: #f4f4f4;
  margin-left: 8px;
  font-size: 14px;
}
.btn-cancel {
  font-size: 14px;
  margin-left: 16px;
}
.hot-box {
  margin: 16px 8px;
  box-sizing: border-box;
  padding-bottom: 16px;
}
.hot-title {
  font-size: 14px;
  color: #999;
  margin-left: 8px;
}
.hot-list > .highlight {
  color: #dd1a21;
  border: 1px solid #dd1a21;
}
.hot-item {
  margin: 4px 8px;
  display: inline-block;
  font-size: 12px;
  color: #333;
  border: 1px solid #999;
  padding: 2px 6px;
}
</style>
