import {
	defineStore
} from 'pinia'

import {
	ref
} from "vue"

export const useUserStore = defineStore('useUser', () => {
	// 用户信息
	const profile = ref()
	// 更新用户信息
	const setProfile = (val) => {
		profile.value = val
	}
	// 删除信息
	const clearProfile = () => {
		profile.value = null
	}
	return {
		profile,setProfile,clearProfile
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