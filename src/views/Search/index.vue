<template>
  <div>
  <!-- 搜索 -->
    <van-search
      class="van-cell"
      v-model="searchValue"
      placeholder="搜索"
      shape="round"
    />

    <!-- 热门搜索 -->
    <div class="search_wrap" v-if="SearchResult.length === 0">
      <p class="hot_title">热门搜索</p>
      <ul class="hot_name_wrap">
        <li
          class="hot_item"
          v-for="(item, index) in HotSearch"
          :key="index"
          @click="input_hot_name(item.first)"
        >
          {{ item.first }}
        </li>
      </ul>

      <!-- 历史搜索
      <p class="hot_title">历史搜索</p>
      <van-cell >
        <template #right-icon>
          <van-icon name="cross" />
        </template>
      </van-cell> -->
    </div>

    <!-- 最佳匹配 -->
    <div class="search_wrap" v-else>
      <!-- <p class="hot_title">最佳匹配</p>
      <van-cell
        :title="item.name"
        :label="item.ar[0].name + '  ' + item.name"
        v-for="(item, index) in SearchResult"
        :key="index"
      >
        <template #right-icon>
          <van-icon name="play-circle-o" class="search-icon" />
        </template>
      </van-cell> -->
      <Song 
        v-for="(item, index) in SearchResult"
        :songName="item.name"
        :author="item.ar[0].name"
        :id="item.id"
      ></Song>
    </div>
  </div>
</template>

<script>
import Song from '@/components/Song'
import { HotSearchAPI, SearchResultAPI } from "@/api";
export default {
  data() {
    return {
      searchValue: "",
      HotSearch: [],
      SearchResult: [],
      timer: null,
    };
  },
  methods: {
    // 推荐秒搜，清除定时器
    async input_hot_name(key) {
      this.searchValue = key;
      const SearchResult = await SearchResultAPI({
        type: 1,
        keywords: key,
      });
      this.SearchResult = SearchResult.data.result.songs;
      clearTimeout(this.timer);
    },
  },
  async created() {
    // 热搜
    const HotSearch = await HotSearchAPI();
    this.HotSearch = HotSearch.data.result.hots;
  },
  watch: {
    // 监视搜索框发送网络请求和搜索防抖
    searchValue(n) {
      clearTimeout(this.timer);
      if (n.length === 0) return (this.SearchResult = []);
      this.timer = setTimeout(async () => {
        const SearchResult = await SearchResultAPI({
          type: 1,
          keywords: n,
        });
        this.SearchResult = SearchResult.data.result.songs;
      }, 1000);
    },
  },
  components:{
    Song
  }
};
</script>

<style scoped>
/deep/ .van-field__control {
  font-size: 15px !important;
}

.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
.search-icon {
  font-size: 21px;
  line-height: inherit;
}
</style>