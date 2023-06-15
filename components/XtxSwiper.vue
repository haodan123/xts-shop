<template>
	<!--轮播图组件 -->
	<veiw class="carousel">
		<swiper :autoplay="true" :interval="3000" circular @change="onChange">
			<swiper-item v-for="item in list" :key="item.id">
				<!-- url="/pages/index/index" -->
				<navigator url="/pages/index/index" hover-class="none" class="navigator">
					<image mode="aspectFill" class="image"
						:src="item.imgUrl">
					</image>
				</navigator>
			</swiper-item>
		</swiper>
		<!--指示点 -->
		<view class="indicator">
			<text class="dot" v-for="(item,index) in list" :key="index" :class="{active:index===activeIndex}"></text>

		</view>

	</veiw>
</template>

<script setup>
	import {
		ref
	} from "vue";
	const {
		list
	} = defineProps({
		list: {
			type: Array,
			default: () => []
		}
	})
	// console.log(list);
	//选中的轮播图
	const activeIndex = ref(0)
	const onChange = (e) => {
		// console.log(e.detail.current);
		activeIndex.value = e.detail.current
	}
</script>

<style lang="scss">
	:host {
		display: block;
		height: 280rpx;
	}

	.carousel {
		display: block;
		// height: 280rpx;
		height: 100%;
		position: relative;
		overflow: hidden;
		transform: translateY(0);
		background-color: #efefef;



		navigator,
		image {
			width: 100%;
			height: 100%;

		}

	}

	.indicator {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 16rpx;
		display: flex;
		justify-content: center;

		.dot {
			width: 30rpx;
			height: 6rpx;
			margin: 0 8rpx;
			border-radius: 6rpx;
			background-color: rgb(255, 255, 255, 0.4);

		}

		.active {
			background-color: #fff;
		}
	}
</style>
