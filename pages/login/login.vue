<template>
	<veiw class="viewport">
		<view class="logo">
			<image src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/logo_icon.png" mode=""></image>
		</view>
		<view class="login">
			<button class="button phone" open-type="getPhoneNumber" @getphonenumber="onGetphonenumber">
				<text class="icon icon-phone"></text>
				手机号快捷登录
			</button>
			<view class="extra">
				<view class="caption">
					<text>其他登录方式</text>
				</view>
				<view class="options" @click="onGetphonenumberSimple">
					<text class="icon icon-phone">模拟快捷登录</text>

				</view>
			</view>
			<view class="tips">
				登录/注册即视为你同意《服务条款》 和 《小兔鲜儿隐私协议》
			</view>
		</view>
	</veiw>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		postLoginWxMinAPI,
		postLoginWxMinSimpleAPI
	} from "../../services/login";
	import {
		useUserStore
	} from "../../stores/modules/user";


	let code = ''
	onLoad(async () => {
		const res = await wx.login()
		console.log(res);
		code = res.code
	})

	// postLoginWxMinAPI()

	// 获取手机权限登录
	const onGetphonenumber = async (ev) => {
		console.log(ev);
		// 获取参数
		const encryptedData = ev.detail.encryptedData
		const iv = ev.detail.iv
		try {
			const res = await postLoginWxMinAPI({
				code,
				encryptedData,
				iv
			})
			loginSuccess(res.result)
		} catch (e) {
			//TODO handle the exception
			console.log(e);

		}

	}

	//模拟快捷登录
	const onGetphonenumberSimple = async () => {
		try {
			const res = await postLoginWxMinSimpleAPI('18888888888')
			loginSuccess(res.result)
		} catch (e) {
			//TODO handle the exception
			uni.showToast({
				title: e.data.message,
				icon: 'error'
			})
		}

	}

	// 登录成功后
	const loginSuccess = (profile) => {
		//把用户信息存到pinia中
		const userStore = useUserStore()
		userStore.setProfile(profile)
		uni.showToast({
			title: "登录成功",
			icon: 'success'
		})
		setTimeout(() => {
			uni.switchTab({
				url: '/pages/my/my'
			})
		}, 500)

	}
</script>

<style scoped lang="scss">
	.viewport {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 20rpx 40rpx;
	}

	.logo {
		flex: 1;
		text-align: center;

		image {
			width: 220rpx;
			height: 220rpx;
			margin-top: 15vh;
		}
	}

	.login {
		display: flex;
		flex-direction: column;
		height: 60vh;
		padding: 40rpx 20rpx 20rpx;

		.button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 80rpx;
			font-size: 28rpx;
			border-radius: 72rpx;
			color: #fff;

			.icon {
				font-size: 40rpx;
				margin-right: 6rpx;
			}
		}

		.phone {
			background-color: #28bb9c;
		}

		.wechat {
			background-color: #06c05f;
		}

		.extra {
			flex: 1;
			padding: 70rpx 70rpx 0;

			.caption {
				width: 440rpx;
				line-height: 1;
				border-top: 1rpx solid #ddd;
				font-size: 26rpx;
				color: #999;
				position: relative;

				text {
					transform: translate(-40%);
					background-color: #fff;
					position: absolute;
					top: 12rpx;
					left: 50%;
				}
			}

			.options {
				display: flex;
				justify-content: center;
				align-content: center;
				margin-top: 70rpx;

				button {
					padding: 0;
					background-color: transparent;
				}
			}

			.icon {
				font-size: 24rpx;
				color: #444;
				display: flex;
				flex-direction: column;
				align-items: center;

				&::before {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 80rpx;
					height: 80rpx;
					margin-bottom: 6rpx;
					font-size: 40rpx;
					border: 1rpx solid #444;
					border-radius: 50%;
				}
			}

			.icon-weixin::before {
				border-color: #06c05f;
				color: #06c05f;
			}
		}

	}

	.tips {
		position: absolute;
		bottom: 80rpx;
		left: 20rpx;
		right: 20rpx;
		font-size: 22rpx;
		color: #999;
		text-align: center;
	}
</style>