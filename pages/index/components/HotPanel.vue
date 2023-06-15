<template>
	<veiw class="hotpanel">
		<view class="item" v-for="item in list" :key="item.id">
			<view class="title">
				<text class="title-text">{{item.title}}</text>
				<text class="title-desc">{{item.alt}}</text>
			</view>
			<navigator :url="`/pages/hot/hot?type=${item.type}`" hover-class="none" class="cards">
				<image  v-for="picture in item.pictures" :key="picture"   :src="picture" mode="aspectFit" class="image"></image>
				<!-- <image src="../../../static/images/blank.png" mode="aspectFit" class="image"></image> -->
			</navigator>

		</view>
	</veiw>
</template>

<script setup>
const {
		list
	} = defineProps({
		list: {
			type: Array,
			default: () => []
		}
	})
</script>

<style scoped lang="scss">
	.hotpanel {
		display: flex;
		flex-wrap: wrap;
		min-height: 508rpx;
		margin: 20rpx 20rpx 0;
		border-radius: 10rpx;
		background-color: #fff;
	}

	.item {
		width: 49.5%;
		height: 254rpx;
		display: flex;
		flex-direction: column;
		border-top: 1px solid #eee;
		border-right: 1px solid #eee;

		&:nth-child(2n) {
			border-right: 0 none;
		}

		&:nth-child(-n + 2) {
			border-top: 0 none;
		}

		.title {
			display: flex;
			align-items: center;
			padding: 24rpx 24rpx 0;
			font-size: 32rpx;
			justify-content: start;
			color: #262626;
			position: relative;

			.title-text {}

			.title-desc {
				font-size: 24rpx;
				color: #7f7f7f;
				margin-left: 18rpx;
			}
		}

		.cards {
			flex: 1;
			padding: 15rpx 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.image {
				width: 150rpx;
				height: 150rpx;
			}
		}
	}
</style>