import {
	http
} from '@/utils/http'

/**
 * 加入购物车
 * @param data 请求体参数
 */
export const postMemberCartAPI = (data) => {
	return http({
		method: 'POST',
		url: '/member/cart',
		data,
	})
}


/**
 * 获取购物车列表
 */
export const getMemberCartAPI = () => {
	return http({
		method: 'GET',
		url: '/member/cart',
	})
}

/**
 * 删除/清空购物车单品
 * @param data 请求体参数 ids SKUID 集合
 */
export const deleteMemberCartAPI = (data) => {
	return http({
		method: 'DELETE',
		url: '/member/cart',
		data,
	})
}

/**
 * 修改购物车单品
 * @param skuId SKUID
 * @param data selected 选中状态 count 商品数量
 */
export const putMemberCartBySkuIdAPI = (
	skuId,
	data,
) => {
	return http({
		method: 'PUT',
		url: `/member/cart/${skuId}`,
		data,
	})
}

/**
 * 购物车全选/取消全选
 * @param data selected 是否选中
 */
export const putMemberCartSelectedAPI = (data) => {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data,
  })
}