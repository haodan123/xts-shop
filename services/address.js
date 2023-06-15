import { http } from '@/utils/http'


/**
 * 获取收货地址详情
 * @param id 地址id(路径参数)
 */
export const getMemberAddressByIdAPI = (id) => {
  return http({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

/**
 * 修改收货地址
 * @param id 地址id(路径参数)
 * @param data 表单数据(请求体参数)
 */
export const putMemberAddressByIdAPI = (id, data) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

/**
 * 添加收货地址
 * @param data 请求参数
 */
export const postMemberAddressAPI = (data) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

/**
 * 获取收货地址列表
 */
export const getMemberAddressAPI = () => {
  return http({
    method: 'GET',
    url: '/member/address',
  })
}

/**
 * 删除收货地址
 * @param id 地址id(路径参数)
 */
export const deleteMemberAddressByIdAPI = (id) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}