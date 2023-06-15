<template>
	<scroll-view scroll-y="true" class="viewport">
		<!-- 收货地址 -->
		<navigator v-if="false" class="shipment" hover-class="none" url="/pagesMember/address/address?from=order">
			<view class="user">张三 13333333333</view>
			<view class="address">广东 广州</view>
			<view class="icon icon-right"></view>
		</navigator>
		<navigator v-else class="shipment" hover-class="none" url="/pagesMember/address/address?from=order">
			<view class="address">请选择收货地址</view>
			<view class="icon icon-right"></view>
		</navigator>
		
		<!-- 商品信息 -->
		<view class="goods">
			
		</view>
		
	</scroll-view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		computed,
		ref
	} from "vue";
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
</script>

<style scoped>

</style>