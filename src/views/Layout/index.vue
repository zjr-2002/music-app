<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed />

    <div class="main">
      <!-- 二级路由-挂载点 keep-alive缓存-->
      <keep-alive> 
        <router-view></router-view>
      </keep-alive>
    </div>
    
    <!-- 底部 -->
    <van-tabbar v-model='active'>
      <van-tabbar-item replace to="/layout/home" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/layout/search" icon="search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:this.$route.meta.active,
      activeTitle: this.$route.meta.title, // "默认"顶部导航要显示的标题 (默认获取当前路由对象里的meta中title值)
    };
  },
  // 路由切换 - 侦听$route对象改变
  watch: {
    $route() {
      this.activeTitle = this.$route.meta.title; // 提取切换后路由信息对象里的title显示
    },
  },
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>