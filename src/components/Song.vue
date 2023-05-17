<template>
  <van-cell
    :title="songName"
    :label="author + '  ' + songName"
    center
    @click="comment"
  >
    <template #right-icon>
      <van-icon name="play-circle-o" class="search-icon" @touchstart="playFn" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props:[
    'songName',// 歌名
    'author',// 作者
    'id'
  ],
  methods: {
    playFn(){
      this.$router.push({
        path:'/play',
        query:{
          id:this.id,
        }
      })
    },
  comment(){
    this.$router.push({
      path:'/comment',
      query:{
        id:this.id
      }
    })
  }
  },
};
</script>

<style >
</style>