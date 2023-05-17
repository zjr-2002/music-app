<template>
  <div>
    <p class="title">推荐歌单</p>
    <div>
      <van-row gutter="2" type="flex" justify="space-around">
        <van-col span="8" v-for="item in recommendMusic" :key="item.id" @click="onSongSheet(item.id,item.name)">
          <van-image
            width="100%"
            height="3.4rem"
            :src='item.picUrl'
          /><p class="song_name">{{item.name}}</p>
        </van-col>
      </van-row>
    </div>

    <p class="title">热门歌曲</p>
    <div>
        <song
          v-for="item in newMusic" :key="item.id"
          :id='item.id'
          :songName="item.name"
          :author="item.song.artists[0].name"
        ></song>
    </div>
    
  </div>
</template>

<script>
import Song from '@/components/Song'
import {recommendMusicAPI,newMusicAPI} from '@/api'
export default {
  data(){
    return{
      recommendMusic:[], //推荐歌曲
      newMusic:[] //新音乐
    }
  },
  async created() {
     const res = await recommendMusicAPI({limit:6})
     this.recommendMusic = res.data.result
     const newMusic = await newMusicAPI({limit:20})
     this.newMusic =newMusic.data.result
  },
  methods: {
    onSongSheet(id,name){
      this.$router.push({
        path:'/SongSheet',
        query:{id:id,name:name}
      })
    }
  },
  components:{
    Song
  }
};
</script>

<style scoped>
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}

  .search-icon {
    font-size: 21px;
    line-height: inherit;
  }

</style>