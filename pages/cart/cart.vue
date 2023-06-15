<template>
	<scroll-view scroll-y="true" class="scroll-view">
		<!-- 已登录 显示购物车 -->
		<template v-if="userStore.profile">
			<!-- 购物车列表  有数据 -->
			<view class="cart-list" v-if="cartList.length>0">
				<!-- 优惠提示 -->
				<view class="tips">
					<text class="label">满减</text>
					<text class="desc">满1件,即先手9折优惠</text>
				</view>
				<!-- 滑动操作分区 -->
				<uni-swipe-action>
					<!-- 滑动操作项 -->
					<uni-swipe-action-item class="cart-swipe" v-for="item in cartList" :key="item.id">
						<!-- 商品信息 -->
						<view class="goods">
							<!-- 选中状态 -->
							<text @click="onChangeSelected(item)" class="checkbox" :class="{checked:item.selected}"></text>
							<navigator class="navigator" :url="`/pages/goods/goods?id=${item.id}`" hover-class="none">
								<image :src="item.picture" class="picture" mode=""></image>
								<view class="meta">
									<view class="name ellipsis">{{item.name}}</view>
									<view class="attrsText ellipsis">{{item.attrsText}}</view>
									<view class="price">{{item.nowPrice}}</view>
								</view>
							</navigator>
							<!-- 商品数量 -->
							<view class="count">
								<vkDataInputNumberBox v-model="item.count" :min="1" :max="item.stock" :index="item.skuId"
									@change="onChangeCount" />
							</view>
						</view>
						<!-- 右侧删除按钮 -->
						<template #right>
							<view class="cart-swipe-right">
								<button @click="onDeleteCart(item.skuId)" class="button delete-button">删除</button>
							</view>
						</template>
					</uni-swipe-action-item>
				</uni-swipe-action>
			</view>
			<!-- 购物车没东西 -->
			<view class="cart-blank" v-else>
				<image src="/static/images/car.png" class="image" mode=""></image>
				<text>购物车还是空的,快来挑选好货吧</text>
				<navigator url="/pages/index/index" hover-class="none">
					<button class="button">去首页看看</button>
				</navigator>
			</view>

			<!-- 吸底工具栏 -->
			<view class="toolbar">
				<text class="all" @click="onChangeSelectedAll" :class="{checked:isSelectedAll}">全选</text>
				<text class="text">合计</text>
				<text class="amount">{{selectedCartListMoney}}</text>
				<view class="button-group">
					<view @click="gotoPayment" class="button payment-button" :class="{disabled:selectedCartListCount.value===0}">
						去结算({{selectedCartListCount}})</view>
				</view>
			</view>
		</template>
		<!-- 未登录 显示去登录 -->
		<view class="login-blank" v-else>
			<text class="text">登录后可查看购物车中的商品</text>
			<navigator url="/pages/login/login" hover-class="none">
				<button class="button">去登录</button>
			</navigator>
		</view>
		<!-- 猜你喜欢 -->
		<XtxGuess ref="guessRef"></XtxGuess>
		<!-- 底部占位空盒子 -->
		<view class="toolbar-height"></view>
	</scroll-view>
</template>

<script setup>
	import vkDataInputNumberBox from "../../uni_modules/vk-data-goods-sku-popup/components/vk-data-input-number-box/vk-data-input-number-box.vue"
	import {
		onShow,
		onReachBottom
	} from '@dcloudio/uni-app'
	import XtxGuess from "@/components/XtxGuess.vue"
	import {
		useGuessList
	} from "../../composables";
	import {
		useUserStore
	} from '../../stores';
	import {
		getMemberCartAPI,
		deleteMemberCartAPI,
		putMemberCartBySkuIdAPI,
		putMemberCartSelectedAPI
	} from '../../services/cart';
	import {
		computed,
		ref
	} from "vue";

	//猜你喜欢 start
	const {
		guessRef,
		onScrolltolower
	} = useGuessList()

	const userStore = useUserStore()

	onReachBottom(() => {
		onScrolltolower()
	})
	// 猜你喜欢end

	// 获取列表
	const cartList = ref([])
	const getCartData = async () => {

		const res = await getMemberCartAPI()
		cartList.value = res.result
	}

	// 删除购物车
	const onDeleteCart = async (skuId) => {
		uni.showModal({
			content: '你确定要删除这个商品吗',
			success: async (res) => {
				if (res.confirm) {
					// 删除商品
					await deleteMemberCartAPI({
						ids: [skuId]
					})
					// 重新获取列表
					getCartData()
				}
			}
		})
	}

	// 修改数量
	const onChangeCount = async (e) => {
		// console.log(e);
		await putMemberCartBySkuIdAPI(e.index, {
			count: e.value
		})
	}

	// 选中商品
	const onChangeSelected = async (e) => {
		e.selected = !e.selected
		await putMemberCartBySkuIdAPI(e.skuId, {
			selected: e.selected
		})

	}

	// 计算全选状态
	const isSelectedAll = computed(() => {
		return cartList.value.length && cartList.value.every(v => v.selected)
	})

	// 计算选中的列表
	const selectedCartList = computed(() => {
		return cartList.value.filter((item) => item.selected)
	})

	// 计算选中的件数
	const selectedCartListCount = computed(() => {
		return selectedCartList.value.reduce((sum, item) => sum += item.count, 0)
	})

	// 计算选中的列表总金额
	const selectedCartListMoney = computed(() => {
		return selectedCartList.value.reduce((sum, item) => {
			return sum + item.count * item.nowPrice
		}, 0).toFixed(2)
	})

	// 去结算
	const gotoPayment = () => {
		if (selectedCartListCount.value === 0) {
			return uni.showToast({
				title: '请选中商品',
				icon: 'none'
			})
		}
		// 去结算
		uni.navigateTo({
			url: '/pagesOrder/create/create'
		})
	}

	// 修改全选状态
	const onChangeSelectedAll = async () => {
		// 取反
		const _isSelectedAll = !isSelectedAll.value
		// 循环吧所有的状态都改变
		cartList.value.forEach(item => {
			item.selected = _isSelectedAll
		})
		// 后台更新
		await putMemberCartSelectedAPI({
			selected: _isSelectedAll
		})

	}

	onShow(() => {
		if (userStore.profile) {
			getCartData()
		}
	})
</script>

<style scoped lang="scss">
	:host {
		height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: #f7f7f8;
		overflow: hidden;
	}

	// 滚动容器
	.scroll-view {
		flex: 1;
		background-color: #f7f7f8;
		// padding-bottom: 100rpx;
	}

	// 购物车列表
	.cart-list {
		padding: 0 20rpx;

		// 优惠提示
		.tips {
			display: flex;
			align-items: center;
			line-height: 1;
			margin: 30rpx 10rpx;
			font-size: 26rpx;
			color: #666;

			.label {
				color: #fff;
				padding: 7rpx 15rpx 5rpx;
				border-radius: 4rpx;
				font-size: 24rpx;
				background-color: #87ba9b;
				margin-right: 10rpx;
			}
		}

		// 购物车商品
		.goods {
			display: flex;
			padding: 20rpx 20rpx 20rpx 80rpx;
			border-radius: 10rpx;
			// background-color: #000;
			background-color: #fff;
			position: relative;

			.navigator {
				display: flex;
			}

			.checkbox {
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 80rpx;
				height: 100%;

				&::before {
					content: '\e6cd';
					font-family: 'erabbit' !important;
					font-size: 40rpx;
					color: #444;
				}

				&.checked::before {
					content: '\e6cc';
					color: #27ba9b;
				}
			}

			.picture {
				width: 170rpx;
				height: 170rpx;
			}

			.meta {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 20rpx;
			}

			.name {
				height: 72rpx;
				font-size: 26rpx;
				color: #444;
			}

			.attrsText {
				line-height: 1.8;
				padding: 0 15rpx;
				font-size: 24rpx;
				align-self: start;
				border-radius: 4rpx;
				color: #888;
				background-color: #f7f7f8;
			}

			.price {
				line-height: 1;
				font-size: 26rpx;
				color: #444;
				margin-bottom: 2rpx;
				color: #cf4444;

				&::before {
					content: '￥';
					font-size: 80%;
				}
			}

			// 商品数量
			.count {
				position: absolute;
				bottom: 20rpx;
				right: 5rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 220rpx;
				height: 48rpx;

				.text {
					height: 100%;
					padding: 0 20rpx;
					font-size: 32rpx;
					color: #444;
				}

				.input {
					height: 100%;
					text-align: center;
					border-radius: 4rpx;
					font-size: 24rpx;
					background-color: #f6f6f6;
				}
			}
		}

		.cart-swipe {
			display: block;
			margin: 20rpx 0;
		}

		.cart-swipe-right {
			display: flex;
			height: 100%;

			.button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 80rpx;
				padding: 6px;
				line-height: 1.5;
				color: #fff;
				font-size: 26rpx;
				border-radius: 0;
			}

			.delete-button {
				background-color: #cf4444;
			}
		}
	}

	//空状态
	.cart-blank,
	.login-blank {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 60vh;
		gap: 10rpx;

		.image {
			width: 400rpx;
			height: 281rpx;
		}

		.text {
			color: #444;
			font-size: 26rpx;
			margin: 20rpx 0;
		}

		.button {
			width: 240rpx !important;
			height: 60rpx;
			line-height: 60rpx;
			margin-top: 20rpx;
			font-size: 26rpx;
			border-radius: 60rpx;
			color: #fff;
			background-color: #27ba9b;

		}
	}

	// 底部工具栏
	.toolbar {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		height: 100rpx;
		padding: 0 20rpx;
		display: flex;
		align-items: center;
		border-top: 1rpx solid #ededed;
		border-bottom: 1rpx solid #ededed;
		background-color: #fff;

		.all {
			margin-left: 25rpx;
			font-size: 28rpx;
			color: #444;
			display: flex;
			align-items: center;
		}

		.all::before {
			font-family: 'erabbit' !important;
			content: '\e6cd';
			font-size: 40rpx;
			margin-right: 8rpx;
		}

		.checked::before {
			content: '\e6cc';
			color: #27ba9b;
		}

		.text {
			margin-right: 8rpx;
			margin-left: 32rpx;
			color: #444;
			font-size: 28rpx;
		}

		.amount {
			font-size: 20px;
			color: #cf4444;

			.decimal {
				font-size: 12px;
			}

			&::before {
				content: '￥';
				font-size: 12px;
			}
		}

		.button-group {
			position: absolute;
			right: 10rpx;
			top: 50%;

			display: flex;
			justify-content: space-between;
			text-align: center;
			line-height: 72rpx;
			font-size: 26rpx;
			color: #fff;
			transform: translateY(-50%);

			.button {
				width: 240rpx;
				margin: 0 10rpx;
				border-radius: 72rpx;
			}

			.payment-button {
				background-color: #27ba9b;

				&.disabled {
					opacity: 0.6;
				}
			}
		}
	}

	// 底部占位空盒子
	.toolbar-height {
		height: 100rpx;
		box-sizing: content-box;
	}
</style>