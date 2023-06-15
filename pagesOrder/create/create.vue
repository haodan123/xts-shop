<template>
	<scroll-view scroll-y="true" class="viewport">
		<!-- 收货地址 -->
		<navigator v-if="selecteAddress" class="shipment" hover-class="none" url="/pagesMember/address/address?from=order">
			<view class="user">{{selecteAddress.receiver}} {{selecteAddress.contact}}</view>
			<view class="address">{{selecteAddress.fullLocation}} {{selecteAddress.address}}</view>
			<view class="icon icon-right"></view>
		</navigator>
		<navigator v-else class="shipment" hover-class="none" url="/pagesMember/address/address?from=order">
			<view class="address">请选择收货地址</view>
			<view class="icon icon-right"></view>
		</navigator>

		<!-- 商品信息 -->
		<view class="goods">
			<navigator class="item" hover-class="none" v-for="item in orderPre.goods" :key="item.id"
				:url="`/pages/goods/goods?id=${item.id}`">
				<image class="picture" :src="item.picture" />
				<view class="meta">
					<view class="name ellipsis">{{item.name}}</view>
					<view class="attrsText ellipsis">{{item.attrsText}}</view>
					<view class="prices">
						<view class="pay-price symbol">{{item.payPrice}}</view>
						<view class="price symbol">{{item.price}}</view>
					</view>
					<view class="count">x{{item.count}}</view>
				</view>
			</navigator>
		</view>

		<!--配送及支付方式 -->
		<view class="related">
			<view class="item">
				<text class="text">配送时间</text>
				<picker :range="deliveryList" @change="onChangeDelivery" range-key="text">
					<view class="icon-fonts picker">
						{{activeDelivery.text}}
					</view>
				</picker>
			</view>
			<view class="item">
				<text class="text">订单备注</text>
				<input class="input" type="text" v-model="buyerMessage" :cursor-spacing="30" placeholder="选题,建议留言前先与商家沟通确认">
			</view>
		</view>

		<!-- 支付金额 -->
		<view class="settlement">
			<view class="item">
				<text class="text">商品总价:</text>
				<text class="number symbol">{{orderPre.summary.totalPrice}}</text>
			</view>
			<view class="item">
				<text class="text">运费:</text>
				<text class="number symbol">{{orderPre.summary.postFee}}</text>
			</view>
		</view>

	</scroll-view>

	<!--吸底工具栏 -->
	<view class="toolbar" :style="{paddingBottom:safeAreaInsets.bottom+'px'}">
		<view class="total-pay symbol">
			<text class="number">{{orderPre?.summary.totalPayPrice.toFixed(2)}}</text>
		</view>
		<view class="button" @click="onOrderSubmit" :class="{disabled:!selecteAddress.id }">提交订单</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	import {
		computed,
		ref
	} from "vue";
	import {
		getMemberOrderPreAPI,
		getMemberOrderPreNowAPI,
		getMemberOrderRepurchaseByIdAPI,
		postMemberOrderAPI
	} from '../../services/order';
	import {
		useAddressStore
	} from '../../stores/modules/address';
	// 获取屏幕边界到安全区域距离
	const {
		safeAreaInsets
	} = uni.getSystemInfoSync()
	// 订单备注
	const buyerMessage = ref('')
	// 配送时间
	const deliveryList = ref([{
			type: 1,
			text: '时间不限 (周一至周日)'
		},
		{
			type: 2,
			text: '工作日送 (周一至周五)'
		},
		{
			type: 3,
			text: '周末配送 (周六至周日)'
		},
	])
	// 当前配送时间下标
	const activeIndex = ref(0)
	// 当前配送时间
	const activeDelivery = computed(() => {
		return deliveryList.value[activeIndex.value]
	})

	// 改变配送时间
	const onChangeDelivery = (e) => {
		activeIndex.value = e.detail.value

	}
	const props = defineProps({
		skuId: {
			type: String,
			default: ''
		},
		count: {
			type: String,
			default: ''
		},
		orderId: {
			type: String,
			default: ''
		}

	})

	// 获取订单信息
	const orderPre = ref([])
	const getMemberOrderPreData = async () => {
		if (props.skuId && props.count) {
			// 如果是从立即购买进来的
			const res = await getMemberOrderPreNowAPI({
				skuId: props.skuId,
				count: props.count
			})
			orderPre.value = res.result

		} else if (props.orderId) {
			//从再次购买进来的
			const res = await getMemberOrderRepurchaseByIdAPI(query.orderId)
			orderPre.value = res.result
		} else {
			// 从购物车进来的
			const res = await getMemberOrderPreAPI()
			orderPre.value = res.result
		}
	}

	// 收货地址
	const addressStore = useAddressStore()
	const selecteAddress = computed(() => {
		// 如果立即购买带了地址过来 就要加个或者
		return addressStore.selectedAddress || orderPre.value.userAddresses.find((v) => v.isDefault)
	})

	// 等待提交订单的状态
	const isLoading = ref(false)
	// 提交订单
	const onOrderSubmit = async () => {
		if (!selecteAddress.value.id) {
			return uni.showToast({
				icon: 'none',
				title: '请选择收货地址'
			})
		}
		if (isLoading.value) return
		isLoading.value = true
		const res = await postMemberOrderAPI({
			addressId: selecteAddress.value.id, //地址的id
			goods: orderPre.value.goods.map(item => ({
				count: item.count,
				skuId: item.skuId
			})), //商品数据
			deliveryTimeType: activeDelivery.value.type, //配送时间类型，1为不限，2为工作日，3为双休或假日
			buyerMessage: buyerMessage.value, //买家留言
			payType: 1,
			payChannel: 2,
		})
		uni.showToast({
			title: '生成订单成功'
		})
		setTimeout(() => {
			isLoading.value = false
			// 关闭当前页面，跳转到订单详情，传递订单id
			uni.redirectTo({
				url: `/pagesOrder/detail/detail?id=${res.result.id}`
			})
		}, 400)
	}
	onShow(() => {
		getMemberOrderPreData()
	})
</script>

<style scoped lang="scss">
	:host {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow: hidden;
		background-color: #f4f4f4;
	}

	.viewport {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow: hidden;
		background-color: #f4f4f4;
	}

	.symbol::before {
		content: '¥';
		font-size: 80%;
		margin-right: 5rpx;
	}

	.shipment {
		margin: 20rpx;
		padding: 30rpx 30rpx 30rpx 84rpx;
		font-size: 26rpx;
		border-radius: 10rpx;
		background: url('https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/locate.png') 20rpx center / 50rpx no-repeat #fff;
		position: relative;

		.icon {
			font-size: 36rpx;
			color: #333;
			transform: translateY(-50%);
			position: absolute;
			top: 50%;
			right: 20rpx;
		}

		.user {
			color: #333;
			margin-bottom: 5rpx;
		}

		.address {
			color: #666;
		}
	}

	.goods {
		margin: 20rpx;
		padding: 0 20rpx;
		border-radius: 10rpx;
		background-color: #fff;

		.item {
			display: flex;
			padding: 30rpx 0;
			border-top: 1rpx solid #eee;

			&:first-child {
				border-top: none;
			}

			.picture {
				width: 170rpx;
				height: 170rpx;
				border-radius: 10rpx;
				margin-right: 20rpx;
			}

			.meta {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				position: relative;
			}

			.name {
				height: 80rpx;
				font-size: 26rpx;
				color: #444;
			}

			.attrs {
				line-height: 1.8;
				padding: 0 15rpx;
				margin-top: 6rpx;
				font-size: 24rpx;
				align-self: flex-start;
				border-radius: 4rpx;
				color: #888;
				background-color: #f7f7f8;
			}

			.prices {
				display: flex;
				align-items: center;
				margin-top: 6rpx;
				font-size: 28rpx;

				.pay-price {
					margin-right: 10rpx;
					color: #cf4444;
				}

				.price {
					font-size: 24rpx;
					color: #999;
					text-decoration: line-through;
				}
			}

			.count {
				position: absolute;
				bottom: 0;
				right: 0;
				font-size: 26rpx;
				color: #444;
			}
		}
	}

	.related {
		margin: 20rpx;
		padding: 0 20rpx;
		border-radius: 10rpx;
		background-color: #fff;

		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			min-height: 80rpx;
			font-size: 26rpx;
			color: #333;
		}

		.input {
			flex: 1;
			text-align: right;
			margin: 20rpx 0;
			padding-right: 20rpx;
			font-size: 26rpx;
			color: #999;
		}

		.item .text {
			width: 125rpx;
		}

		.picker {
			color: #666;
		}

		.picker::after {
			// content: '\e6c2';
			content: '\e88e';

		}
	}

	// 结算清单
	.settlement {
		margin: 20rpx;
		padding: 0 20rpx;
		border-radius: 10rpx;
		background-color: #fff;

		.item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 80rpx;
			font-size: 26rpx;
			color: #333;
		}

		.danger {
			color: #cf4444;
		}
	}

	.toolbar {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1;
		background-color: #fff;
		height: 100rpx;
		padding: 0 20rpx;
		border-top: 1rpx solid #eaeaea;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: content-box;

		.total-pay {
			font-size: 40rpx;
			color: #cf4444;

			.decimal {
				font-size: 75%;
			}
		}

		.button {
			width: 220rpx;
			text-align: center;
			line-height: 72rpx;
			font-size: 26rpx;
			color: #fff;
			border-radius: 72rpx;
			background-color: #4447ba9b;
		}

		.disabled {
			opacity: 0.6;
		}
	}
</style>