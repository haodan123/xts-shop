<template>
	<scroll-view scroll-y="true" class="viewport" enable-back-to-top="">
		<!-- 个人资料 -->
		<view class="profile" :style="{paddingTop:safeAreaInsets.top+'px'}">
			<!-- 已登录 -->
			<view class="overview" v-if="userStore.profile">
				<navigator url="/pagesMemer/profile/profile" hover-class="none">
					<image class="avatar" mode="aspectFill"
						:src="userStore.profile.avatar"></image>
				</navigator>
				<view class="meta">
					<view class="nickname">
						{{userStore.profile.nickname|| userStore.profile.account}}
					</view>
					<navigator class="extra" url="/pagesMember/profile/profile" hover-class="none">
						<text class="update">更新头像名称</text>
					</navigator>
				</view>
			</view>
			<!-- 未登录 -->
			<view class="overview" v-else>
				<navigator url="/pages/login/login">
					<image class="avatar gray" mode="aspectFill"
						src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-06/db628d42-88a7-46e7-abb8-659448c33081.png">
					</image>
				</navigator>
				<view class="meta">
					<navigator class="nickname" url="/pages/login/login" hover-class="none">
						未登录
					</navigator>
					<view class="extra">
						<text>点击登录账号</text>
					</view>
				</view>
			</view>
			<navigator url="/pagesMember/settings/settings" class="settings" hover-class="none">
				设置
			</navigator>
		</view>

		<!-- 我的订单 -->
		<view class="orders">
			<view class="title">

				<text>我的订单</text>
				<navigator class="navigator" :url="`/pagesOrder/list/list?type=${0}`" hover-class="none">
					查看全部订单 <text class="icon-right"></text>
				</navigator>

			</view>
			<view class="section">
				<!-- 订单 -->
				<navigator v-for="item in orderTypes" :key="item.type" :class="item.icon" class="navigator"
					:url="`/pagesOrder/list/list?type=${item.type}`" hover-class="nonde">
					{{item.text}}
				</navigator>
				<!-- 客服 -->
				<button class="contact icon-handset" open-type="contact">售后</button>
			</view>
		</view>
		<!-- 猜你喜欢 -->
		<view class="guess">
			<XtxGuess ref="guessRef"></XtxGuess>
		</view>

	</scroll-view>
</template>

<script setup>
	import {
		useGuessList
	} from '../../composables';
	import {
		onReachBottom
	} from '@dcloudio/uni-app'
	import XtxGuess from '@/components/XtxGuess.vue';
	import {
		ref
	} from "vue";
import { useUserStore } from '../../stores';
	// 获取屏幕边界到安全区域距离
	const {
		safeAreaInsets
	} = uni.getSystemInfoSync()
	// 订单选项
	const orderTypes = [{
			type: 1,
			text: '待付款',
			icon: 'icon-currency'
		},
		{
			type: 2,
			text: '待发货',
			icon: 'icon-gift'
		},
		{
			type: 3,
			text: '待收货',
			icon: 'icon-check'
		},
		{
			type: 4,
			text: '待评价',
			icon: 'icon-comment'
		},
	]
	// 猜你喜欢 start
	const {
		guessRef,
		onScrolltolower
	} = useGuessList()
	// 触底加载
	onReachBottom(() => {
		console.log(111);
		onScrolltolower()
	})
	//猜你喜欢end
	
	// 个人信息start
	const userStore= useUserStore()
	console.log(userStore.profile);
	// 个人信息end
</script>

<style scoped lang="scss">
	page {
		height: 100%;
		overflow: hidden;
		background-color: #f7f7f8;
	}

	.viewport {
		height: 100%;
		background-color: #f7f7f8;
		background-repeat: no-repeat;
		background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/center_bg.png);
		background-size: 100% auto;
	}

	// 用户信息
	.profile {
		margin-top: 20rpx;
		position: relative;

		.overview {
			display: flex;
			height: 120rpx;
			padding: 0 36rpx;
			color: #fff;
		}

		.avatar {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			background-color: #eee;
		}

		.gray {
			filter: grayscale(100%);
		}

		.meta {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			line-height: 30rpx;
			padding: 16rpx 0;
			margin-left: 20rpx;
		}

		.nickname {
			max-width: 350rpx;
			margin-bottom: 16rpx;
			font-size: 30rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;

		}

		.extra {
			display: flex;
			font-size: 20rpx;
		}

		.tips {
			font-size: 22rpx;
		}

		.update {
			padding: 3rpx 10rpx 1rpx;
			color: rgba(255, 255, 255, 0.8);
			border: 1rpx solid rgba(255, 255, 255, 0.8);
			margin-right: 10rpx;
			border-radius: 30rpx;
		}

		.settings {
			position: absolute;
			bottom: 0;
			right: 40rpx;
			font-size: 30rpx;
			color: #fff;
		}
	}

	// 我的订单
	.orders {
		position: relative;
		z-index: 99;
		padding: 30rpx;
		margin: 50rpx 20rpx 0;
		background-color: #fff;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);

		.title {
			height: 40rpx;
			line-height: 40rpx;
			font-size: 28rpx;
			color: #1e1e1e;
			display: flex;
			justify-content: space-between;

			.navigator {
				font-size: 24rpx;
				color: #939393;
			}
		}

		.section {
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: 40rpx 0 10rpx;

			.navigator,
			.contact {
				// flex: 1;
				text-align: center;
				font-size: 24rpx;
				color: #333;

				&::before {
					display: block;
					font-size: 60rpx;
					color: #ff9545;
				}

			}

			.contact {
				padding: 0;
				margin: 0;
				border: none;
				background-color: transparent;
				line-height: inherit;

				&::after {
					border: none;
				}
			}
		}
	}

	/* 猜你喜欢 */
	.guess {
		background-color: #f7f7f8;
		margin-top: 20rpx;
	}
</style>