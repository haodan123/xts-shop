import {
	http
} from '@/utils/http'

/**
 * 获取订单详情
 * @param id 订单id
 */
export const getMemberOrderByIdAPI = (id) => {
  return http({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}
/**
 * 填写订单-获取预付订单
 */
export const getMemberOrderPreAPI = () => {
  return http({
    method: 'GET',
    url: '/member/order/pre',
  })
}

/**
 * 填写订单-获取立即购买订单
 *@data : {
  skuId: string
  count: string
  addressId?: string
}
 */
export const getMemberOrderPreNowAPI = (data) => {
  return http({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

/**
 * 提交订单
 * @param data 请求参数
 */
export const postMemberOrderAPI = (data) => {
  return http ({
    method: 'POST',
    url: '/member/order',
    data,
  })
}
/**
 * 填写订单-再次购买
 * @param id 订单id
 */
export const getMemberOrderRepurchaseByIdAPI = (id) => {
  return http({
    method: 'GET',
    url: `/member/order/repurchase/${id}`,
  })
}

/**
 * 获取订单列表
 * @param data orderState 订单状态
 */
export const getMemberOrderAPI = (data) => {
  return http({
    method: 'GET',
    url: `/member/order`,
    data,
  })
}