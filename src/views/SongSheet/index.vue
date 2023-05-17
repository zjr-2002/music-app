<template>
  <div>
    <van-nav-bar
      :title="this.$route.query.name"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 请求歌单的歌曲 -->
    <song 
      v-for="item in songs"
      :songName='item.al.name'
      :author='item.ar[0].name'
      :id='item.id'
    />

  </div>
</template>

<script>
import Song from '@/components/Song'
import {SongSheetAPI} from "@/api"
export default {
  name:'SongSheet',
  async created() {
    const res = await SongSheetAPI({id:this.$route.query.id})
    this.songs = res.data.songs
  },
  data() {
    return {
      songs:[]
    }
  },
  components:{Song},
  methods:{
    //返回
    onClickLeft(){
      this.$router.back() 
    },
  },
}
</script>

<style>

</style>