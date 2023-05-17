//统一入口
import { recommendMusic,newMusic } from "@/api/Home"
import {HotSearch,SearchResult} from '@/api/Search'
import {getSongById,getLyricById} from '@/api/Play'
import {Comment} from "@/api/Comment"
import {SongSheet} from "@/api/SongSheet"

export const recommendMusicAPI = recommendMusic //音乐推荐
export const newMusicAPI = newMusic    //最新音乐

export const HotSearchAPI = HotSearch  //热门搜索
export const SearchResultAPI = SearchResult  //搜索结果

export const getSongByIdAPI = getSongById //歌曲详情
export const getLyricByIdAPI = getLyricById //歌词

export const CommentAPL = Comment //评论

export const SongSheetAPI = SongSheet //歌单的歌曲

















