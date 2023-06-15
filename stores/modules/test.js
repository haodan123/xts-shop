import { defineStore } from 'pinia'

import { ref } from "vue"

export const useTestStore = defineStore('useTest', () => {

	const hello = ref('你好')
	return { hello }
}, {
	// 网页端配置
	// persist: true,
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