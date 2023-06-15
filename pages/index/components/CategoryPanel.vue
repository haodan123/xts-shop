<template>
	<veiw class="category">
		<navigator class="category-item" url="/pages/index/index"  hover-class="none" v-for="item in list" :key="item.id">
			<image class="icon" :src="item.icon"
				mode=""></image>
			<text class="text">{{item.name}}</text>
		</navigator>

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
	.category {
		margin: 20rpx 0 0;
		padding: 10rpx 0;
		min-height: 328rpx;

		display: flex;
		flex-wrap: wrap;

		.category-item {
			width: 20%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;

			image {
				width: 100rpx;
				height: 100rpx;

			}

			.text {
				font-size: 26rpx;
				color: #666;
			}
		}
	}
</style>