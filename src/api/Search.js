import request from '@/utils/request'

export const HotSearch = ()=>request({
  url:'/search/hot'
})
export const SearchResult = params =>request({
  url:'/cloudsearch',
  params
})