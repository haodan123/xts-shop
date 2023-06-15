import {
	defineStore
} from 'pinia'

import {
	ref
} from "vue"

export const useAddressStore = defineStore('useAddressStore', () => {
	// 选中的地址信息
	const selectedAddress = ref()
	// 修改选中的地址信息
	const changeSelectedAddress = (e) => {
		selectedAddress.value = e
	}
	return {
		changeSelectedAddress,
		selectedAddress
	}

}, {
	// 小程序端配置
	persist: {
		storage: {
			getItem(key) {
				return uni.getStorageSync(key)
			},
			setItem(key, value) {
				uni.setStorageSync(key, value)
			},
		},
	},
})