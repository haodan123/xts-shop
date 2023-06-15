<template>
	
	<view class="viewport" v-if="profile">
		<!-- 导航栏 -->
		<view class="navbar" :style="{paddingTop: safeAreaInsets.top+'px'}">
			<navigator open-type="navigateBack" class="back icon-left"></navigator>
			<view class="title">个人信息</view>
		</view>
		<!--头像 -->
		<view class="avatar" v-if="profile">
			<view class="avatar-content">
				<image  :src="profile.avatar" mode="aspectFill" class="image"></image>
				<text class="text" @click="onAvatarChange">点击修改头像</text>
			</view>
		</view>
		<!-- 表单 -->
		<view class="form">
			<!-- 表单内容 -->
			<view class="form-content">
				<view class="form-item">
					<text class="label">账号</text>
					<text class="account">{{profile?.account}}</text>
				</view>
				<view class="form-item">
					<text class="label">昵称</text>
					<input type="text" class="input" v-model="profile.nickname" placeholder="请填写名称">
				</view>
				<view class="form-item">
					<text class="label">性别</text>
					<radio-group @change="onGenderChange">
						<label class="radio">
							<radio class="#27ba9b" value="男" :checked="profile?.gender === '男'" />男
						</label>
						<label>
							<radio class="#27ba9b" value="女" :checked="profile?.gender === '女'" />女
						</label>
					</radio-group>
				</view>
				<view class="form-item">
					<text class="label">生日</text>
					<picker @change="onBirthdayChange" :value="profile?.birthday" mode="date" class="picker" start="1900-01-01"
						:end="new Date()" value="2000-01-01">
						<view v-if="profile?.birthday">{{profile?.birthday}}</view>
						<view class="placeholder" v-else>
							请选择日期
						</view>
					</picker>
				</view>
				<view class="form-item">
					<text class="label">城市</text>
					<picker @change="onFullLocationChange" mode="region" class="picker"
						:value="profile?.fullLocation?.split(' ')">
						<view v-if="profile?.fullLocation">{{profile?.fullLocation}}</view>
						<view class="placeholder" v-else>
							请选择城市
						</view>
					</picker>
				</view>
				<view class="form-item">
					<text class="label">职业</text>
					<input type="text" class="input" v-model="profile.profession" placeholder="请填写职业">
				</view>
			</view>
			<!-- 提交按钮 -->
			<button class="form-button" @click="onSubmit">保 存</button>

		</view>
	</view>
</template>

<script setup>

	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		getMemberProfileAPI,
		putMemberProfileAPI
	} from '@/services/user';
	import {
		ref
	} from "vue";
	import {
		useUserStore
	} from '../../stores';
	// 获取屏幕边界到安全区域距离
	const {
		safeAreaInsets
	} = uni.getSystemInfoSync()
	// 个人信息
	const profile = ref()
	const getUserProfile = async () => {
		const res = await getMemberProfileAPI()
		profile.value = res.result
	}
	onLoad(() => {
		getUserProfile()
	})
	const userStore = useUserStore()

	// 修改性别
	const onGenderChange = (e) => {
		// console.log(e.detail.value);
		profile.value.gender = e.detail.value
	}
	// 修改生日
	const onBirthdayChange = (ev) => {
		profile.value.birthday = ev.detail.value
	}
	// 修改城市
	let fullLocationCode = ['', '', '']
	const onFullLocationChange = (ev) => {
		// console.log(e);
		// 修改前端界面
		profile.value.fullLocation = ev.detail.value.join(' ')
		// 提交后端更新
		fullLocationCode = ev.detail.code
	}

	// 修改头像
	const onAvatarChange = async () => {
		// 调用拍照/选择图片
		uni.chooseMedia({
			// 文件个数
			count: 1,
			// 文件类型
			mediaType: ['image'],
			success: (res) => {
				// 本地路径
				const {
					tempFilePath
				} = res.tempFiles[0]
				// 文件上传
				uni.uploadFile({
					url: '/member/profile/avatar',
					name: 'file', // 后端数据字段名  
					filePath: tempFilePath, // 新头像  
					success: (res) => {
						// 判断状态码是否上传成功
						if (res.statusCode === 200) {
							// 提取头像
							const {
								avatar
							} = JSON.parse(res.data).result
							// 当前页面更新头像
							profile.value.avatar = avatar
							// 更新 Store 头像
							userStore.profile.avatar = avatar
							uni.showToast({
								icon: 'success',
								title: '更新成功'
							})
						} else {
							uni.showToast({
								icon: 'error',
								title: '出现错误'
							})
						}
					},
				})
			},
		})

	}

	// 点击保存提交表单
	const onSubmit = async () => {
		const {
			nickname,
			gender,
			birthday,
			profession
		} = profile.value
		const res = await putMemberProfileAPI({
			nickname,
			gender,
			birthday,
			profession,
			provinceCode: fullLocationCode[0],
			cityCode: fullLocationCode[1],
			countyCode: fullLocationCode[2],
		})
		userStore.profile.nickname = res.result.nickname
		uni.showToast({
			icon: 'success',
			title: '保存成功'
		})
		setTimeout(() => {
			uni.navigateBack()
		}, 400)
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #f4f4f4;
		min-height: 100vh;
	}

	.viewport {
		display: flex;
		flex-direction: column;
		background-color: #f4f4f4;
		min-height: 100vh;
		height: 100%;
		background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
		background-size: auto 420rpx;
		background-repeat: no-repeat;
	}

	// 导航栏
	.navbar {
		position: relative;

		.title {
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			font-weight: 500;
			color: #fff;
		}

		.back {
			position: absolute;
			height: 40px;
			width: 40px;
			left: 0;
			font-size: 20px;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.avatar {
		text-align: center;
		width: 100%;
		height: 260rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.image {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			background-color: #eee;
		}

		.text {
			display: block;
			padding-top: 20rpx;
			line-height: 1;
			font-size: 26rpx;
			color: #fff;
		}
	}

	// 表单
	.form {
		background-color: #f4f4f4;

		&-content {
			margin: 20rpx 20rpx 0;
			padding: 0 20rpx;
			border-radius: 10rpx;
			background-color: #fff;
		}

		&-item {
			display: flex;
			height: 46rpx;
			line-height: 46rpx;
			padding: 25rpx 10rpx;
			background-color: #fff;
			font-size: 28rpx;
			border-bottom: 1rpx solid #ddd;

			&:last-child {
				border: none;
			}
		}


		.label {
			width: 180rpx;
			color: #333;
		}

		.account {
			color: #666;
		}

		.input {
			flex: 1;
			display: block;
			height: 46rpx;
		}

		.radio {
			margin-right: 20rpx;
		}

		.picker {
			flex: 1;
		}

		.placeholder {
			color: #808080;
		}

		&-button {
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			margin: 30rpx 20rpx;
			color: #fff;
			border-radius: 80rpx;
			font-size: 30rpx;
			background-color: #27ba9b;
		}
	}
</style>