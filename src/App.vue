<template>
  <div id="app">
    <router-view class="router-view" />
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from "./components/MainTabbar.vue";
export default {
  components: {
    MainTabbar
  }
};
</script>

<style scoped>
.router-view {
  margin-bottom: 50px;
}
</style>
