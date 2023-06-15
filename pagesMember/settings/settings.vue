<template>
	<view class="viewport">

		<!-- 收货地址 -->
		<view class="list" v-if="userStore.profile">
			<navigator url="/pagesMember/address/address" hover-class="none" class="item arrow">
				我的收货地址
			</navigator>
		</view>
		<!-- 列表 -->
		<view class="list">
			<button hover-class="none" class="item arrow" open-type="openSetting">授权管理</button>
			<button hover-class="none" class="item arrow" open-type="feedback">问题反馈</button>
			<button hover-class="none" class="item arrow" open-type="contact">联系我们</button>
		</view>
		<!-- 列表2 -->
		<view class="list">
			<navigator hover-class="none" class="item arrow" url=" ">关于小兔鲜儿</navigator>
		</view>
		<!-- 操作按钮 退出登录 -->
		<view class="action" v-if="userStore.profile">
			<view class="button" @click="logout">退出登录</view>
		</view>
	</view>
</template>

<script setup>
	import {
		useUserStore
	} from '../../stores';
	const userStore = useUserStore()

	// 退出登录
	const logout = () => {
		uni.showModal({
			content: '是否退出登录？',
			success(res) {
				if (res.confirm) {
					// 清理用户信息
					userStore.clearProfile()
					// 返回上一页
					uni.navigateBack()
				}
			}
		})
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #f4f4f4;
	}

	.viewport {
		padding: 20rpx;

		background-color: #f4f4f4;
		height: 100%;
	}

	.list {
		padding: 0 20rpx;
		background-color: #fff;
		margin-bottom: 20rpx;
		border-radius: 10rpx;

		.item {
			line-height: 90rpx;
			padding-left: 10rpx;
			font-size: 30rpx;
			color: #333;
			border-top: 1rpx solid #ddd;
			position: relative;
			text-align: left;
			border-radius: 0;
			background-color: #fff;

			&::after {
				width: auto;
				height: auto;
				left: auto;
				border: none;
			}

			&:first-child {
				border: none;
			}

			&::after {
				right: 5rpx;
			}


		}

		.arrow::after {
			content: '\e6c2';
			position: absolute;
			top: 50%;
			color: #ccc;
			font-family: 'erabbit' !important;
			font-size: 32rpx;
			transform: translateY(-50%);
		}
	}

	/* 操作按钮 */
	.action {
		text-align: center;
		line-height: 90rpx;
		margin-top: 40rpx;
		font-size: 32rpx;
		color: #333;

		.button {
			background-color: #fff;
			margin-bottom: 20rpx;
			border-radius: 10rpx;
		}
	}
</style>