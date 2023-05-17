<template>
  <div>
    <van-nav-bar
      title="评价"
      left-arrow
      @click-left="onClickLeft"
    />

      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

        

        <van-list
            v-model="loading"
            @load="onLoad"
            :finished="finished"
            finished-text="没有更多了"
        >


          <div id="main" 
            v-for="(item,index) in commentList"
          >
            <div class="img"><img :src="item.user.avatarUrl"/></div>
            <div class="right">
                <div>
                  <div>{{item.user.nickname}}</div>
                  <div class="date">{{item.timeStr}}</div>
                  <div>{{item.content}}</div>
                </div>
            </div>
            <div class="like">
              <span class="like">{{item.likedCount}}</span>
              <van-icon name="like-o" />
            </div>
          </div> 



        </van-list>

      </van-pull-refresh>
  </div>
</template>

<script>
import {CommentAPL} from "@/api"
import { Toast } from 'vant'

export default {
  data() {
    return {
      isLoading: false, //刷新状态
      commentList:[], //评论数据
      id: this.$route.query.id, //上一页传的id
      loading: false,//加载状态
      limit:20,
      offset:0,
      loading: false,
      finished: false,
      page:0//页数
    }
  },
// 初始
  created() {
    this.page = 0
    this.CommentRes()
    this.isLoading = false;
    },


  methods: {
    //返回
    onClickLeft(){
     this.$router.back()
    },

    // 获取评论数据
    async CommentRes(){
      const commentList = await CommentAPL({
        id:this.id,
        limit:this.limit,
        offset:this.offset
      });
      commentList.data.comments.forEach(e => {
        this.commentList.push(e)
      });
      this.loading = false
    },
    //下拉刷新
    onRefresh() {
      this.page = 0
      setTimeout(() => {
        this.commentList = []
        this.CommentRes()
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },

    // 加载更多
    async onLoad() {
      this.page++
      setTimeout(() => {
        this.CommentRes()
        Toast({
          message: "页码"+this.page,
          position: 'bottom',
        });
      }, 100);
      
    },

  },
};
</script>

<style scoped>
html{
  font-size: 10px;
}
.commentList{
  width: 100%;
  border-bottom: 1px #dddddd solid;
}
.commentList-img{
  float: left;
}
#main{
  font-size: 0.5rem;
  display: flex;
  flex-direction: row;
  width: 98%;
  margin-bottom: 10px;
  justify-content: space-between;
}
#main .img{
  flex: 0 0 35px;
}
#main .img img{
  width: 30px;
  height: 30px;
  border-radius: 50%;
} 
#main .right{
  display: flex;
  flex-direction: row;
}
#main .right {
  width: 100%;
}
#main .like{
  flex: 0 0 50px;
  line-height: 50px;
  text-align: end;
}

</style>