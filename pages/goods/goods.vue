<template>
	<!-- sku弹窗 -->
	<vkDataGoodsSkuPopupVue add-cart-background-color="#FFA868" buy-now-background-color="#27BA9B" :mode="mode"
		v-model="isShowSku" :localdata="localdata" @buy-now="onBuyNow" @add-cart="onAddCart" ref="skuPopupRef"
		:actived-style="{
      color: '#27BA9B',
      borderColor: '#27BA9B',
      backgroundColor: '#E9F8F5',
    }" />

	<!-- 骨架屏 -->
	<PagesSkeleton v-if="isLoading"></PagesSkeleton>
	<scroll-view scroll-y="true" class="viewport" v-else>
		<!-- 基本信息 -->
		<view class="goods">
			<!-- 商品轮播图 -->
			<view class="preview">
				<swiper style="height: 750rpx;" circular @change="onChang">
					<swiper-item v-for="item in goods.mainPictures" :key="item">
						<image @click="preImage(item)" class="image" :src="item" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
				<!-- 轮播图右下角的数字 -->
				<view class="indicator">
					<text class="current">{{currentIndex+1}}</text>
					<text class="split">/</text>
					<text class="total">{{goods?.mainPictures.length}}</text>
				</view>
			</view>
			<!-- 商品简介 -->
			<view class="meta">
				<view class="price">
					<text class="symbol">￥</text>
					<text class="number">{{ goods?.price }}</text>
				</view>
				<view class="name ellipsis">
					{{ goods?.name }}
				</view>
				<view class="desc">
					{{ goods?.desc }}
				</view>
			</view>
			<!-- 操作面板 -->
			<view class="action">
				<view class="item arrow" @click="openSkuPopup(skuMode.Both)">
					<text class="label">选择</text>
					<text class="text ellipsis">{{selectArrText}}</text>
				</view>
				<view class="item arrow" @click="openPopup('address')">
					<text class="label">送至</text>
					<text class="text ellipsis">请选择收货地址</text>
				</view>
				<view class="item arrow" @click="openPopup('service')">
					<text class="label">服务</text>
					<text class="text ellipsis">无忧退 快速退款 免费包邮</text>
				</view>
			</view>
		</view>

		<!-- 商品详情 -->
		<view class="detail panel">
			<view class="title">
				<text>详情</text>
			</view>
			<view class="content">
				<view class="properties">
					<!--属性详情 -->
					<view class="item" v-for="item in goods?.details.properties" :key="item.name">
						<text class="label">{{ item.name }}</text>
						<text class="value">{{ item.value }}</text>
					</view>

				</view>
				<!-- 图片详情 -->
				<image class="image" v-for="item in goods?.details.pictures" :key="item" mode="widthFix" :src="item"></image>

			</view>
		</view>
		<!-- 同类推荐 -->
		<view class="similar panel">
			<view class="title">
				<text>同类推荐</text>
			</view>
			<view class="content">
				<navigator v-for="item in goods.similarProducts" :key="item.id" class="goods"
					:url="`/pages/goods/goods?id=${item.id}`" hover-class="none">
					<image :src="item.picture" class="image" mode=""></image>
					<view class="name ellipsis">
						{{ item.name }}
					</view>
					<view class="price">
						<text class="symbol">￥</text>
						<text class="number">{{ item.price }}</text>
					</view>
				</navigator>
			</view>
		</view>
	</scroll-view>

	<!-- 用户操作 -->
	<view class="toolbar" :style="{paddingBottom:safeAreaInsets.bottom + 'px'}">
		<view class="icons">
			<button class="icons-button">
				<text class="icon-heart"></text>
				收藏
			</button>
			<button class="icons-button" open-type="contact">
				<text class="icon-handset"></text>
				客服
			</button>
			<navigator class="icons-button" url="/pages/cart/cart" open-type="switchTab">
				<text class="icon-cart"></text>
				购物车
			</navigator>
		</view>
		<view class="buttons">
			<view class="addcart" @click="openSkuPopup(skuMode.Cart)">
				加入购物车
			</view>
			<view class="buynow" @click="openSkuPopup(skuMode.Buy)">
				立即购买
			</view>
		</view>
	</view>
	<!--地址弹窗和 服务说明弹窗 -->
	<uni-popup ref="popup" type="bottom" style="width: 100%;" background-color="#fff">
		<AddressPanel @close="popup.close()" v-if="popupName=='address'"></AddressPanel>
		<ServicePanel @close="popup.close()" v-if="popupName=='service'"></ServicePanel>
	</uni-popup>
</template>

<script setup>
	import AddressPanel from "./components/AddressPanel.vue"
	import ServicePanel from "./components/ServicePanel.vue"
	import PagesSkeleton from "./components/PagesSkeleton.vue"
	import vkDataGoodsSkuPopupVue from "../../uni_modules/vk-data-goods-sku-popup/components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.vue";

	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		nextTick,
		ref,
		computed
	} from "vue";
	import {
		getGoodsByIdAPI
	} from '../../services/goods';
	import {
		postMemberCartAPI
	} from "../../services/cart";
	// 获取商品的id
	const {
		id
	} = defineProps({
		id: String
	})

	// 轮播图 start
	// 当前轮播图的索引
	const currentIndex = ref(0)
	// 改变索引
	const onChang = (e) => {
		// console.log(e);
		currentIndex.value = e.detail.current
	}
	// 查看轮播图
	const preImage = (img) => {
		uni.previewImage({
			current: img,
			urls: goods.value.mainPictures
		})
	}
	// 轮播图 end

	// 地址和服务信息弹窗start
	const popup = ref(null)
	// 弹出层的渲染条件 1弹出地址  2 弹出服务
	const popupName = ref('') //有两种  1. address 2. service
	// 点击弹出
	const openPopup = (name) => {
		// 修改弹出的组件
		popupName.value = name
		// 弹出
		nextTick(() => {
			popup.value.open()
		})
	}

	// 地址和服务信息弹窗end


	// 是否显示SKU组件
	const isShowSku = ref(false)
	// sku的ref
	const skuPopupRef = ref()

	// 商品信息 sku
	const localdata = ref({})
	// sku的模型
	const skuMode = {
		Both: 1, //购物车和购买都显示
		Cart: 2, //只显示购物车
		Buy: 3, //只显示购买
	}
	const mode = ref(1)
	// 打开SKU弹窗修改按钮模式
	const openSkuPopup = (val) => {
		// 显示SKU弹窗
		isShowSku.value = true
		// 修改按钮模式
		mode.value = val
	}
	//获取 商品详情
	const goods = ref([])
	const getGoodsByIdData = async () => {
		const res = await getGoodsByIdAPI(id)
		goods.value = res.result

		localdata.value = {
			_id: res.result.id,
			name: res.result.name,
			goods_thumb: res.result.mainPictures[0],
			spec_list: res.result.specs.map((v) => ({
				name: v.name,
				list: v.values
			})),
			sku_list: res.result.skus.map((v) => ({
				_id: v.id,
				goods_id: res.result.id,
				goods_name: res.result.name,
				image: v.picture,
				price: v.price * 100, // 注意：需要乘以 100
				stock: v.inventory,
				sku_name_arr: v.specs.map((vv) => vv.valueName),
			})),
		}
		console.log(localdata.value);
	}
	// 计算被选中的规格
	const selectArrText = computed(() => {
		console.log(skuPopupRef.value);
		return skuPopupRef.value?.selectArr?.join(' ').trim() || '请选择商品规格'
		// return skuPopupRef.value
	})

	// 加入购物车
	const onAddCart = async (e) => {
		// console.log(e);
		await postMemberCartAPI({
			skuId: e._id, //商品规格的id
			count: e.buy_num //购买的数量
		})
		uni.showToast({
			title: '添加成功'
		})
		// 关闭弹窗
		isShowSku.value = false

	}
	// 立即购买
	const onBuyNow = async (e) => {
		console.log(e);
		uni.navigateTo({
			url:`/pagesOrder/create/create?skuId=${e._id}&count=${e.buy_num}`
		})
	}

	// 加载状态
	const isLoading = ref(false)


	onLoad(() => {
		isLoading.value = true
		getGoodsByIdData()

		isLoading.value = false
		// setTimeout(() => {

		// 	openPopup('address')
		// }, 1000)
	})

	// 获取屏幕的安全距离
	const {
		safeAreaInsets
	} = uni.getSystemInfoSync()
</script>

<style scoped lang="scss">
	page {
		height: 100%;
		overflow: hidden;
		display: felx;
		flex-direction: column;
	}

	.viewport {
		background-color: #f4f4f4;
		padding-bottom: 130rpx;
	}

	.panel {
		margin-top: 20rpx;
		background-color: #fff;

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 90rpx;
			line-height: 1;
			padding: 30rpx 60rpx 30rpx 6rpx;
			position: relative;

			text {
				padding-left: 10rpx;
				font-size: 28rpx;
				color: #333;
				font-weight: 600;
				border-left: 4rpx solid #27ba9b;
			}

			navigator {
				font-size: 24rpx;
				color: #666;
			}
		}
	}

	.arrow {
		&::after {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 30rpx;
			content: '\e6c2';
			color: #ccc;
			font-family: 'erabbit' !important;
			font-size: 32rpx;
		}
	}

	// 商品详情
	.goods {
		background-color: #fff;

		.preview {
			height: 750rpx;
			position: relative;

			.image {
				width: 750rpx;
				height: 750rpx;
			}

			.indicator {
				height: 40rpx;
				padding: 0 24rpx;
				line-height: 40rpx;
				border-radius: 30rpx;
				color: #fff;
				font-family: Arial, Helvetica, sans-serif;
				background-color: rgba(0, 0, 0, 0.3);
				position: absolute;
				bottom: 30rpx;
				right: 30rpx;

				.current {
					font-size: 26rpx;
				}

				.split {
					font-size: 24rpx;
					margin: 0 1rpx 0 2rpx;
				}

				.total {
					font-size: 24rpx;
				}
			}
		}

		.meta {
			position: relative;
			border-bottom: 1rpx solid #eaeaea;

			.price {
				height: 130rpx;
				padding: 25rpx 30rpx 0;
				color: #fff;
				font-size: 34rpx;
				box-sizing: border-box;
				background-color: #25c8a9;
			}

			.number {
				font-size: 56rpx;
			}

			.brand {
				width: 160rpx;
				height: 80rpx;
				overflow: hidden;
				position: absolute;
				top: 26rpx;
				right: 30rpx;
			}

			.name {
				max-height: 88rpx;
				line-height: 1.4;
				margin: 20rpx;
				font-size: 32rpx;
				color: #333;
			}

			.desc {
				line-height: 1;
				padding: 0 20rpx 30rpx;
				font-size: 24rpx;
				color: #cf4444;
			}
		}

		.action {
			padding-left: 20rpx;

			.item {
				height: 90rpx;
				padding-right: 60rpx;
				border-bottom: 1rpx solid #eaeaea;
				font-size: 26rpx;
				color: #333;
				position: relative;
				display: flex;
				align-items: center;

				&:last-child {
					border-bottom: 0 none;
				}
			}

			.label {
				width: 60rpx;
				color: #898b94;
				margin: 0 16rpx 0 10rpx;
			}

			.text {
				flex: 1;
				-webkit-line-clamp: 1;
			}
		}
	}

	// 商品详情
	.detail {
		padding-left: 20rpx;

		.content {
			margin-left: -20rpx;

			.image {
				width: 100%;
				display: block;
			}
		}

		.properties {
			padding: 0 20rpx;
			margin-bottom: 30rpx;

			.item {
				margin-bottom: 30rpx;
				display: flex;
				line-height: 2;
				padding: 10rpx;
				font-size: 26rpx;
				color: #333;
				border-bottom: 1rpx dashed #ccc;

			}

			.label {
				width: 200rpx;
			}

			.value {
				flex: 1;
			}
		}
	}

	// 同类推荐
	.similar {
		// padding-left: 20rpx;

		.content {
			padding: 10rpx 20rpx 20rpx;
			background-color: #f4f4f4;
			overflow: hidden;
			display: flex;
			flex-wrap: wrap;
			gap: 10rpx;

			.goods {
				// width: 340rpx;
				width: 303rpx;
				padding: 24rpx 20rpx 20rpx;
				// margin: 20rpx 7rpx;
				// margin-top: 20rpx;

				border-radius: 10rpx;
				background-color: #fff;
			}

			.image {
				width: 300rpx;
				height: 260rpx;
			}

			.name {
				height: 80rpx;
				margin: 10rpx 0;
				font-size: 26rpx;
				color: #262626;
			}

			.price {
				line-height: 1;
				font-size: 20rpx;
				color: #cf4444;
			}

			.number {
				font-size: 26rpx;
				margin-left: 2rpx;
			}
		}

	}

	/* 底部工具栏 */
	.toolbar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		height: 100rpx;
		padding: 0 20rpx;
		border-top: 1rpx solid #eaeaea;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;

		.buttons {
			display: flex;

			view {
				width: 220rpx;
				text-align: center;
				line-height: 72rpx;
				font-size: 26rpx;
				color: #fff;
				border-radius: 72rpx;
			}

			.addcart {
				background-color: #ffa868;
			}

			.buynow {
				background-color: #27ba9b;
				margin-left: 20rpx;
			}
		}

		.icons {
			padding-right: 10rpx;
			display: flex;
			align-items: center;
			flex: 1;

			.icons-button {
				flex: 1;
				text-align: center;
				line-height: 1.4;
				padding: 0;
				margin: 0;
				border-radius: 0;
				font-size: 20rpx;
				color: #333;
				background-color: #fff;

				&::after {
					border: none;
				}
			}

			text {
				display: block;
				font-size: 34rpx;
			}
		}
	}
</style>