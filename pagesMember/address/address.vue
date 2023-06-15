<template>
	<view class="viewport">
		<!-- 地址列表 -->
		<scroll-view scroll-y="true" class="scroll-view">
			<view v-if="addressList.length>0" class="address">
				<uni-swipe-action class="address-list">
					<!-- 收货地址 -->
					<uni-swipe-action-item  class="item" v-for="item in addressList" :key="item.id">
						<view class="item-content" @tap.stop="onChangeAddress(item)">
							<view class="user">
								{{item.receiver}}
								<text class="contact">{{item.contact}}</text>
								<text class="badge" v-if="item.isDefault">默认</text>
							</view>
							<view class="locate">
								{{ item.fullLocation }} {{ item.address }}
							</view>
							<!-- 阻止事件冒泡 防止触发父元素的点击事件 -->
							<navigator class="edit" @tap.stop="()=>{}"  hover-class="none" :url="`/pagesMember/addressForm/addressForm?id=${item.id}`">
								修改
							</navigator>
						</view>
						<!-- 右侧插槽 -->
						<template #right>
							<button @tap="onDeleteAddress(item.id)" class="delete-button">删除</button>
						</template>
					</uni-swipe-action-item>
				</uni-swipe-action>
			</view>
			<view v-else class="blank">暂无收货地址</view>
		</scroll-view>
		<!-- 添加按钮 -->
		<view class="add-btn">
			<navigator hover-class="none" url="/pagesMember/addressForm/addressForm">
				新建地址
			</navigator>
		</view>
	</view>
</template>

<script setup>
	import {
		getMemberAddressAPI,
		deleteMemberAddressByIdAPI
	} from '../../services/address';


	import {
		onShow
	} from '@dcloudio/uni-app'
	import {
		ref
	} from "vue";
	import {
		useAddressStore
	} from '../../stores/modules/address';

	// getMemberAddressAPI()
	const addressList = ref([])
	const getAddressData = async () => {
		const res = await getMemberAddressAPI()
		addressList.value = res.result
	}
	onShow(() => {
		getAddressData()
	})
	const props = defineProps({
		from: {
			type: String
		}
	})
	// 选中地址返回页面
	const onChangeAddress = (item) => {
		// console.log(props);
		if (props.from) {
			const addressStore = useAddressStore()
			addressStore.changeSelectedAddress(item)
			// 返回上一页
			uni.navigateBack()
		}

	}

	// 滑动删除地址
	const onDeleteAddress = async (id) => {
		// 二次确认
		uni.showModal({
			content: '删除地址?',
			success: async (res) => {
				if (res.confirm) {
					// 根据id删除收货地址
					await deleteMemberAddressByIdAPI(id)
					// 重新获取收货地址列表
					getAddressData()
				}
			},
		})
	}
</script>

<style scoped lang="scss">
	page {
		height: 100%;
		overflow: hidden;
	}

	// 删除按钮
	.delete-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50rpx;
		height: 100%;
		font-size: 28rpx;
		color: #fff;
		border-radius: 0;
		padding: 0;
		background-color: #cf4444;
	}

	.viewport {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 100vh;
		background-color: #f4f4f4;

		.scroll-view {
			padding-top: 20rpx;
		}
	}

	.address {
		padding: 0 20rpx;
		margin: 0 20rpx;
		border-radius: 10rpx;
		background-color: #fff;

		.item-content {
			line-height: 1;
			padding: 40rpx 10rpx 38rpx;
			border-bottom: 1rpx solid #ddd;
			position: relative;

			.edit {
				position: absolute;
				top: 36rpx;
				right: 30rpx;
				padding: 2rpx 0 2rpx 20rpx;
				border-left: 1rpx solid #666;
				font-size: 26rpx;
				color: #666;
				line-height: 1;
			}
		}

		.item:last-child .item-content {
			border: none;
		}

		.user {
			font-size: 28rpx;
			margin-bottom: 20rpx;
			color: #333;

			.contact {
				color: #666;
			}

			.badge {
				display: inline-block;
				padding: 4rpx 10rpx 2rpx 14rpx;
				margin: 2rpx 0 0 10rpx;
				font-size: 26rpx;
				color: #6667ba9b;
				border-radius: 6rpx;
				border: 1rpx solid #6667ba9b;
			}
		}

		.locate {
			line-height: 1.6;
			font-size: 26rpx;
			color: #333;
		}

	}

	.blank {
		margin-top: 300rpx;
		text-align: center;
		font-size: 32rpx;
		color: #888;
	}

	.add-btn {
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		margin: 30rpx 20rpx;
		color: #fff;
		border-radius: 80rpx;
		font-size: 30rpx;
		background-color: #6667ba9b;
	}
</style>