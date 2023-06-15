<template>
	<view class="viewport">
		<!-- tabs -->
		<view class="tabs">
			<text class="item"
			 :class="{active:activeIndex===item.orderState}"
			 @click="activeIndex=item.orderState" v-for="item in orderTabs" :key="item.orderState">{{item.title}}</text>
			<!-- 下边的标签 -->
			<view class="cursor" :style="{left:activeIndex*20+ '%'}"></view>
		</view>
		<!-- 滑动容器 -->
		<swiper class="swiper" :current="activeIndex" @change="activeIndex = $event.detail.current">
			<swiper-item v-for="item in orderTabs" :key="item.orderState" >
				<OrderList :order-state="item.orderState"></OrderList>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
import OrderList from "./components/OrderList.vue"

	// 获取屏幕边界到安全区域距离
	const {
		safeAreaInsets
	} = uni.getSystemInfoSync()
	// tabs 数据
	const orderTabs = ref([{
			orderState: 0,
			title: '全部'
		},
		{
			orderState: 1,
			title: '待付款'
		},
		{
			orderState: 2,
			title: '待发货'
		},
		{
			orderState: 3,
			title: '待收货'
		},
		{
			orderState: 4,
			title: '待评价'
		},
	])
	// 获取页面参数
	const props = defineProps({
		type:{
			type:String,
			default:'0'
		}
	})
	// 高亮下表
	const activeIndex = ref(orderTabs.value.findIndex((v) => v.orderState === Number(props.type)))

</script>


<style lang="scss">
// page {
//   height: 100%;
//   overflow: hidden;
// }

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
	height: 100%;
	overflow: hidden;
	width: 100%;
}

// tabs
.tabs {
  display: flex;
  justify-content: space-around;
  line-height: 60rpx;
  margin: 0 10rpx;
  background-color: #fff;
  box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);
  position: relative;
  z-index: 9;
	// width: 100%;

  .item {
    flex: 1;
    text-align: center;
    padding: 20rpx;
    font-size: 28rpx;
    color: #262626;
  }

  .cursor {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20%;
    height: 6rpx;
    // padding: 0 50rpx;
    background-color: #27ba9b;
    /* 过渡效果 */
    transition: all 0.4s;
  }
	.active{
		color: #27ba9b;
	}
}

// swiper
.swiper {
  background-color: #f7f7f8;
	// background-color: #000;
	min-height: 100vh;
	padding-bottom: 10px;
}

</style>