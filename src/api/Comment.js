import request from "@/utils/request"

export const Comment = params =>request({
  url:'/comment/music',
  params
})