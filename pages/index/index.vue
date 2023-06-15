<template>
	<!-- navbar -->
	<CustomNavbar></CustomNavbar>
	<!-- scrolltolower为上滑到最下面  @refresherrefresh为下拉到最上面  -->
	<scroll-view  @scrolltolower="onScrolltolower" enable-back-to-top
		refresher-enabled  @refresherrefresh="onRefresherrefresh" :refresher-triggered="isTriggered"
		class="scroll-view" scroll-y>
		<!-- 骨架屏 -->
		<PageSkeleton v-if="isLoading"></PageSkeleton>
		<template v-else>
			<!-- 轮播图 -->
			<XtxSwiper :list="bannerList"></XtxSwiper>
			<!-- 分类 -->
			<CategoryPanel :list="categoryList"></CategoryPanel>
			<!--热门推荐 -->
			<HotPanel :list="hotList"></HotPanel>
			<!--猜你喜欢 -->

			<XtxGuess v-if="!isLoading" ref="guessRef"></XtxGuess>
		</template>

	</scroll-view>

</template>

<script setup>
	import {
		ref
	} from "vue";
	import {
		onLoad,
		onPullDownRefresh,
		onReachBottom
	} from '@dcloudio/uni-app'
	import CustomNavbar from "./components/CustomNavbar.vue"
	import CategoryPanel from "./components/CategoryPanel.vue"
	import HotPanel from "./components/HotPanel.vue"
	import PageSkeleton from "./components/PageSkeleton.vue"
	import XtxSwiper from "@/components/XtxSwiper.vue"
	import XtxGuess from "@/components/XtxGuess.vue"
	import {
		useGuessList
	} from "@/composables/index.js"
	import {
		getHomeBannerAPI,
		getHomeCategoryAPI,
		getHomeHotAPI
	} from "../../services/home";
	// 是否在加载数据
	const isLoading = ref(false)

	//轮播图数组
	const bannerList = ref([])

	// 获取轮播图数据
	const getSwiper = async () => {

		const res = await getHomeBannerAPI()
		bannerList.value = res.result
		// console.log(res);
	}
	// 分类的数据
	const categoryList = ref([])
	// 获取分类的数据
	const getCategory = async () => {
		const res = await getHomeCategoryAPI()
		categoryList.value = res.result
		// console.log(res);
	}
	// 热门的数据
	const hotList = ref([])
	// 获取热门的数据
	const getHto = async () => {
		const res = await getHomeHotAPI()
		hotList.value = res.result
	}
	// 猜你喜欢start

	// 猜你喜欢组件的实例
	// const guessRef = ref()

	// 下拉刷新的状态
	const isTriggered = ref(false)

	// 上啦加载 start
	const { guessRef, onScrolltolower }= useGuessList()
	// 该方法是uniapp自带的触底加载  和上面的方法选其中一个
	// onReachBottom(() => {
	// 	// console.log('上滑加载更多', guessRef.value);
	// 	guessRef.value.getMore()
	// })
	// 上啦加载end

	// 下拉刷新 start
	// onRefresherrefresh是 scroll-view的下拉刷新方法
	// 下面两种方法都是下拉刷新  如果要使用onRefresherrefresh先去吧pages.json中的enablePullDownRefresh设置为false
	// 自定义下拉刷新被触发
	const onRefresherrefresh = async () => {
		// 开始动画
		isTriggered.value = true
		// 加载数据
		// 重置猜你喜欢组件数据
		guessRef.value?.resetData()
		await Promise.all([getSwiper(), getCategory(), getHto()])
		// 关闭动画
		isTriggered.value = false
	}

	// onPullDownRefresh 是uniapp自带的下拉刷新  需要咋pages.json中去	设置	"enablePullDownRefresh": true //开启下拉刷新
	// onPullDownRefresh(async () => {
	// 	console.log('下拉刷新', isTriggered.value);
	// 	isTriggered.value = true
	// 	//在重新获取数据钱 把猜你喜欢中的数据清空
	// 	guessRef.value.resetData()
	// 	await Promise.all([getSwiper(), getCategory(), getHto(), guessRef.value?.getMore(), ])
	// 	isTriggered.value = false
	// })
	// 下拉加载end
	// 猜你喜欢end


	onLoad(async () => {
		// 获取数据 获取完后把loading设置为false
		console.log('加载');

		isLoading.value = true
		await Promise.all([getSwiper(), getCategory(), getHto()])
		isLoading.value = false
	})
</script>

<style lang="scss">
	page {
		background-color: #f7f7f7;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.scroll-view {
		height: 100vh;
		flex: 1;
	}
</style>