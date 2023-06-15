import { http } from '@/utils/http'

/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url, data) => {
  return http({
    method: 'GET',
    url,
    data,
  })
}