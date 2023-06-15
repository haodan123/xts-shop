<template>
	<!-- 骨架屏 -->
	<PageSkeleton v-if="isLoading"></PageSkeleton>
	<veiw class="viewport" v-else>
		<view class="cover">
			<!-- 推荐的封面图 -->
			<image :src="bannerPicture" mode=""></image>
		</view>
		<!-- 推荐选项 -->
		<view class="tabs">
			<text class="text " @click="activeIndex = index" :class="{active:index===activeIndex}"
				v-for="(item,index) in subTypes" :key="item.id">
				{{item.title}}
			</text>
			<!-- <text class="text">新品预告</text> -->
		</view>
		<!-- 推荐列表 -->
		<!-- 同时把所有选项的列表都渲染出来, 用activeIndex来判断一个显示那个列表 -->
		<scroll-view scroll-y="true" class="scroll-view" v-show="index===activeIndex" v-for="(item,index) in subTypes"
			:key="item.id">
			<view class="goods">
				<navigator :url="`/pages/goods/goods?id=${goods.id}`" hover-class="none" class="navigator"
					v-for="goods in item.goodsItems.items" :key="goods.id">
					<image class="thumb" :src="goods.picture" mode=""></image>
					<view class="name ellipsis">
						{{goods.name}}
					</view>
					<view class="price">
						<text class="symbol">￥</text>
						<text class="number">{{goods.price}}</text>
					</view>

				</navigator>
			</view>
			<view class="loading-text">
				{{item.finish?'没有更多数据':'正在加载...'}}
			</view>
		</scroll-view>
	</veiw>

</template>

<script setup>
	import PageSkeleton from "./components/PageSkeleton.vue"
	import {
		onLoad,
		onReachBottom
	} from '@dcloudio/uni-app'
	import {
		ref
	} from "vue";
	import {
		getHotRecommendAPI
	} from '../../services/hot';
	// 热门推荐页 标题和url
	const hotMap = [{
			type: '1',
			title: '特惠推荐',
			url: '/hot/preference'
		},
		{
			type: '2',
			title: '爆款推荐',
			url: '/hot/inVogue'
		},
		{
			type: '3',
			title: '一站买全',
			url: '/hot/oneStop'
		},
		{
			type: '4',
			title: '新鲜好物',
			url: '/hot/new'
		},
	]
	// 获取传过来的参数
	const {
		type
	} = defineProps({
		type: String
	})
	console.log(type);
	// 根据穿过来的type判断当前的标题
	const currHot = hotMap.find(item => item.type === type)
	// 修改当前的标题

	uni.setNavigationBarTitle({
		title: currHot.title
	})
	// 高亮的下标
	const activeIndex = ref(0)

	// 推荐顶部的图片
	const bannerPicture = ref('')
	// 推荐选项
	const subTypes = ref([])

	// 加载时是否显示骨架屏
	const isLoading = ref(false)

	// 获取热门推荐的数据

	const getHotRecommendData = async () => {
		isLoading.value = true
		const res = await getHotRecommendAPI(currHot.url, {
			// 技巧：环境变量，开发环境，修改初始页面方便测试分页结束
			page: import.meta.env.DEV ? 30 : 1,
			pageSize: 10
		})
		console.log(res);
		// 设置封面
		bannerPicture.value = res.result.bannerPicture
		// 设置选项
		subTypes.value = res.result.subTypes
		isLoading.value = false

	}
	onLoad(() => {
		getHotRecommendData()
	})
	// 上啦加载
	onReachBottom(async () => {
		// 当前选中的列表
		const currsubTypes = subTypes.value[activeIndex.value]

		console.log('新增前的数据', currsubTypes);
		if (currsubTypes.goodsItems.page > currsubTypes.goodsItems.pages) {
			//如果当前的页码 大于最大的页码 就不在记载数据
			currsubTypes.finish = true
			// 退出并轻提示
			return uni.showToast({
				icon: 'none',
				title: '没有更多数据了~'
			})
		} else {
			// 如果当前页码小于最大页码 继续下面的代码
			currsubTypes.goodsItems.page++
		}
		// 掉用接口获取最新的数据
		const res = await getHotRecommendAPI(currHot.url, {
			// 技巧：环境变量，开发环境，修改初始页面方便测试分页结束
			page: currsubTypes.goodsItems.page,
			pageSize: currsubTypes.goodsItems.pageSize,
			subType: currsubTypes.id
		})
		// console.log(res.result.subTypes[activeIndex.value]);
		// 新的列表数据
		const newsubTypes = res.result.subTypes[activeIndex.value]

		// 把新数据添加到选中的列表中
		currsubTypes.goodsItems.items.push(...newsubTypes.goodsItems.items)
		console.log('新增后的列表', subTypes.value[activeIndex.value]);


	})
</script>

<style scoped lang="scss">
	page {
		height: 100%;
		background-color: #f4f4f4;
	}

	.viewport {
		display: flex;
		background-color: #f4f4f4;
		flex-direction: column;
		height: 100%;
		padding: 180rpx 0 0;
		position: relative;
	}

	.cover {
		width: 750rpx;
		height: 225rpx;
		border-radius: 0 0 40rpx 40rpx;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 0;

		image {
			width: 100%;
		}
	}

	.scroll-view {
		flex: 1;
	}

	.tabs {
		display: flex;
		justify-content: space-evenly;
		height: 100rpx;
		line-height: 90rpx;
		margin: 0 20rpx;
		font-size: 28rpx;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
		color: #333;
		background-color: #fff;
		position: relative;
		z-index: 9;

		.text {
			margin: 0 20rpx;
			position: relative;
		}

		.active {
			&::after {
				content: '';
				width: 40rpx;
				height: 4rpx;
				transform: translateX(-50%);
				position: absolute;
				left: 50%;
				background-color: #27ba9b;

				bottom: 24rpx;
			}
		}
	}

	.goods {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 20rpx 20rpx;

		.navigator {
			// width: 345rpx;
			width: calc(50% - 50rpx);
			padding: 20rpx;
			margin-top: 20rpx;
			border-radius: 10rpx;
			background-color: #fff;
		}

		.thumb {
			width: 305rpx;
			height: 305rpx;
		}

		.name {
			height: 88rpx;
			font-size: 26rpx;
		}

		.price {
			line-height: 1;
			color: #cf4444;

		}

		.symbol {
			font-size: 70%;
		}

		.decimal {
			font-size: 70%;
		}

	}

	.loading-text {
		text-align: center;
		font-size: 28rpx;
		color: #666;
		padding: 20rpx 0 50rpx;
	}
</style>