<template>
	<!-- 骨架屏-->
	<PageSkeleton v-if="isLoading"></PageSkeleton>
	<veiw class="viewport" v-else>
		<!-- 搜索框 -->
		<view class="search">
			<view class="input">
				<text class="icon-search">男装</text>
			</view>
		</view>
		<!-- 分类 -->
		<view class="categories">
			<!-- 左侧的一级分类 -->
			<scroll-view scroll-y="true" class="primary">
				<view class="item" :class="{active:index===activeIndex}" @click="activeIndex=index"
					v-for="(item,index) in categoryList" :key="item">
					<text class="name">{{item.name}}</text>
				</view>
			</scroll-view>
			<!-- 右侧的二级分类 -->
			<scroll-view scroll-y="true" class="secondary">
				<!-- 轮播图区域 -->
				<XtxSwiper class="banner" :list="bannerList"></XtxSwiper>
				<!--二级内容区域 -->
				<view class="panel" v-for="item in subCategoryList" :key="item.id">
					<view class="title">
						<text class="name">{{item.name}}</text>
						<navigator class="more" hover-class="none">全部</navigator>
					</view>
					<view class="section">
						<navigator class="goods" hover-class="none" v-for="goods in item.goods"
							:url="`/pages/goods/goods?id=${goods.id}`" :key="goods.id">
							<image class="image" :src="goods.picture" mode=""></image>
							<view class="name ellipsis">
								{{goods.name}}
							</view>
							<view class="price">
								<text class="symbol">￥</text>
								<text class="number">{{goods.price}}</text>
							</view>
						</navigator>
					</view>
				</view>
			</scroll-view>
		</view>
	</veiw>
</template>

<script setup>
	import PageSkeleton from "./components/PageSkeleton.vue"
	import XtxSwiper from "@/components/XtxSwiper.vue"
	import {
		onLoad,
	} from '@dcloudio/uni-app'
	import {
		computed,
		ref
	} from "vue";
	import {
		getCategoryTopAPI
	} from "../../services/category";
	import {
		getHomeBannerAPI
	} from '../../services/home';
	// 接口是否请求完成的状态
	const isLoading = ref(false)


	// 获取轮播图的数据
	const bannerList = ref([])
	const getBanner = async () => {
		const res = await getHomeBannerAPI(2)
		bannerList.value = res.result
		// console.log(bannerList.value);
	}

	// 选中的一级类目
	const activeIndex = ref(0)
	// 获取分类列表数据
	const categoryList = ref([])
	const getCategoryTopData = async () => {
		const res = await getCategoryTopAPI()
		categoryList.value = res.result
	}
	// 用计算属性获取二级分类的数据
	const subCategoryList = computed(() => {
		return categoryList.value[activeIndex.value]?.children || [] //防止接口未请求完时报错
	})
	// console.log(subCategoryList);

	onLoad(async () => {
		isLoading.value = true
		await Promise.all([getBanner(), getCategoryTopData()])
		isLoading.value = false
	})
</script>

<style scoped lang="scss">
	page {
		height: 100%;
		overflow: hidden;
	}

	.viewport {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.search {
		padding: 0 30rpx 20rpx;
		background-color: #fff;

		.input {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 64rpx;
			padding-left: 26rpx;
			color: #8b8b8b;
			font-size: 28rpx;
			border-radius: 32rpx;
			background-color: #f3f4f4;
		}
	}

	.icon-search {
		&::before {
			margin-right: 10rpx;
		}
	}

	// 分类
	.categories {
		flex: 1;
		min-height: 400rpx;
		display: flex;
	}

	// 一级分类
	.primary {
		overflow: hidden;
		// width: 180rpx;
		// flex: none;
		// flex: 180rpx;
		width: 180rpx;
		background-color: #f6f6f6;

		.item {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 96rpx;
			font-size: 26rpx;
			color: #595c63;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 42rpx;
				width: 96rpx;
				border-top: 1rpx solid #e3e4e7;
			}
		}

		.active {
			transition: all 0.5s ease-in;

			background-color: #fff;

			&::before {
				transition: ease-in 0.4s;
				content: '';
				position: absolute;
				left: 0;
				top: 0;
				width: 8rpx;
				height: 100%;
				background-color: #27ba9b;
			}
		}
	}

	// 二级类目
	.secondary {
		flex: 1;
		background-color: #fff;

		.banner {
			height: 200rpx;
			margin: 0 30rpx 20rpx;
			border-radius: 4rpx;
			overflow: hidden;

		}

		.panel {
			margin: 0 30rpx 0;
		}

		.title {
			height: 60rpx;
			line-height: 60rpx;
			color: #333;
			font-size: 28rpx;
			border-bottom: 1rpx solid #f7f7f8;
			display: flex;
			justify-content: space-between;

			.more {
				padding-left: 20rpx;
				font-size: 24rpx;
				color: #999;
			}
		}

		.more {
			&::after {
				font-family: 'erabbit' !important;
				content: '\e6c2';
			}
		}

		.section {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			padding: 20rpx 0;

			.goods {
				width: 150rpx;
				margin: 0 30rpx 20rpx 0;

				&:nth-child(3n) {
					margin-right: 0;
				}

				.image {
					width: 150rpx;
					height: 150rpx;
				}

				.name {
					padding: 5rpx;
					font-size: 22rpx;
					color: #333;
				}

				.price {
					padding: 5rpx;
					font-size: 18rpx;
					color: #cf4444;
				}

				.number {
					font-size: 24rpx;
					margin-left: 2rpx;
				}
			}

		}
	}
</style>