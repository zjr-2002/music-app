import request from '@/utils/request'
export const SongSheet = params => request({
  url:'/playlist/track/all',
  params
})