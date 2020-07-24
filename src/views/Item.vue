<template>
  <div class="bodyBox">
    <MainNavBar></MainNavBar>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in itemData.banner" :key="index">
        <img v-lazy="item" />
      </van-swipe-item>
    </van-swipe>
    <div class="list">
      <div class="list-name">口碑好物</div>
      <div class="list-desc">口碑好物</div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getData"
      >
        <div class="goods-list">
          <div
            class="goods-item"
            v-for="(item, index) in goodsList"
            :key="index"
          >
            <router-link :to="{ path: '/item/detail', query: { id: item.id } }">
              <div class="goods-img">
                <img v-lazy="item.imgSrc" alt="" />
                <div class="goods-desc">
                  {{ item.desc }}
                </div>
              </div>
              <div class="goods-name">
                {{ item.name }}
              </div>
              <div class="goods-price">¥{{ item.price }}</div>
              <div class="goods-tags">
                <div
                  class="goods-tag"
                  v-for="(itemTag, indexTag) in item.tag"
                  :key="indexTag"
                >
                  {{ itemTag }}
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </van-list>
    </div>
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
      itemData: [],
      loading: false,
      finished: false,
      goodsList: [],
    };
  },
  created() {
    this.axios
      .get("/api/item.json")
      .then((res) => {
        this.itemData = res.data.data;
        this.goodsList = res.data.data.item;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  mounted() {
    document.body.style.backgroundColor = "#eee";
  },
  methods: {
    getData() {
      setTimeout(() => {
        for (let i = 0; i < 8; i++) {
          this.goodsList.push(this.goodsList[i]);
        }
        this.loading = false;
        if (this.goodsList.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.bodyBox {
  padding-top: 50px;
}
.router-view {
  margin-bottom: 0;
}
.van-swipe-item {
  height: 150px;
  display: flex;
  align-items: center;
}
.van-swipe-item img {
  width: 100%;
}
.list {
  background-color: white;
  margin-top: 8px;
  /* padding: 10px; */
}
.list-name {
  padding-top: 10px;
  text-align: center;
  font-size: 16px;
}
.list-desc {
  margin-top: 8px;
  text-align: center;
  font-size: 12px;
  color: #999;
}
.goods-list {
  margin: 8px 5px 0 5px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-row-gap: 10px;
}
.goods-item {
  padding: 5px;
  box-sizing: border-box;
}
.goods-img {
  border-radius: 2px;
  overflow: hidden;
}
.goods-img > img {
  width: 100%;
  display: block;
}
.goods-desc {
  font-size: 12px;
  background-color: #f1ece2;
  color: #9f8a60;
  padding: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-name {
  margin-top: 8px;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.goods-price {
  margin: 4px 0;
  font-size: 16px;
  color: #dd1a21;
}
.goods-tags {
  display: flex;
}
.goods-tag {
  transform: scale(0.8);
  border: 1px solid #dd1a21;
  color: #dd1a21;
  font-size: 10px;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 1px 4px;
  transform-origin: left;
}
</style>
