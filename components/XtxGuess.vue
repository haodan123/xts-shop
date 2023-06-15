<template>
	<!-- 猜你喜欢 -->
	<veiw style="display: block;background-color: #eee;">
		<view class="caption">
			<text class="text">猜你喜欢</text>
		</view>
		<view class="guess">
			<navigator :url="`/pages/goods/goods?id=${item.id}`" hover-class="none" class="guess-item"
				v-for="item in guessList " :key="item.id">
				<image class="image" :src="item.picture" mode="aspectFill"></image>
				<view class="name">
					{{item.name}}
				</view>
				<view class="price">
					<text class="small">￥</text>
					<text>{{item.price}}</text>
				</view>
			</navigator>
		</view>
		<!-- 加载画面 -->
		<view class="loading-text">
			{{finish?'没有更多数据':'正在加载...'}}
		</view>
	</veiw>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from "vue";
	import {
		getHomeGoodsGuessLikeAPI
	} from '../services/home';
	// getHomeGoodsGuessLikeAPI()
	// 已结束标记
	const finish = ref(false)
	// 分页的参数
	const pageParams = ref({
		page: 1,
		pageSize: 10
	})

	// 数据列表
	const guessList = ref([])

	// 获取数据
	const getHomeGoodsGuessLikeData = async () => {
		//如果没有更多数据
		if (finish.value) {
			return uni.showToast({
				icon: 'none',
				title: '没有更多数据...'
			})
		}

		const res = await getHomeGoodsGuessLikeAPI(pageParams.value)
		// 在数组后面追加数据 不是重置数据
		guessList.value.push(...res.result.items)
		if (pageParams.value.page > res.result.pages) {
			// 如果你的当前页面大于 后台的页面 代表数据已经加载完成 没有更多
			finish.value = true
		} else {
			// 后面还有更多数据,把当前页面加1
			pageParams.value.page++

		}
		// console.log(res);
	}
	// 重置数据
	const resetData = () => {
		pageParams.page = 1
		guessList.value = []
		finish.value = false
	}
	onMounted(() => {
		getHomeGoodsGuessLikeData()
	})
	// 把这两个方法暴露给父组件  用来做下拉刷新 或者上啦加载更多
	defineExpose({
		resetData,
		getMore: getHomeGoodsGuessLikeData
	})
</script>

<style scoped lang="scss">
	.caption {
		display: flex;
		justify-content: center;
		line-height: 1;
		padding: 36rpx 0 40rpx;
		font-size: 32rpx;
		color: #262626;

		.text {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 28rpx 0 30rpx;

			&::before,
			&::after {
				content: '';
				width: 20rpx;
				height: 20rpx;
				background-image: url(@/static/images/bubble.png);
				background-size: contain;
				margin: 0 10rpx;
			}
		}
	}

	.guess {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 20rpx;
		// gap:20rpx;

		.guess-item {
			// width: 315rpx;
			width: calc(50% - 50rpx);
			padding: 24rpx 20rpx 20rpx;
			margin-bottom: 20rpx;
			border-radius: 10rpx;
			overflow: hidden;
			background-color: #fff;

			.image {
				width: 304rpx;
				height: 304rpx;

			}

			.name {

				height: 75rpx;
				margin: 10rpx 0;
				font-size: 26rpx;
				color: #262626;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}

			.price {
				line-height: 1;
				padding-top: 4rpx;
				color: #cf4444;
				font-size: 26rpx;

				.small {
					font-size: 80%;
				}
			}
		}
	}

	// 加载提示文字
	.loading-text {
		text-align: center;
		font-size: 28rpx;
		color: #666;
		padding: 20rpx 0;
	}
</style>