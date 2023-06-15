
<template name="skeleton">
  <view class="sk-container">
    <view class="navbar data-v-5b533cdb" style="padding-top:20px">
      <view class="wrap data-v-5b533cdb">
        <navigator class="back icon-home data-v-5b533cdb sk-pseudo sk-pseudo-circle" open-type="switchTab"></navigator>
        <view class="title data-v-5b533cdb sk-transparent sk-text-14-2857-734 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view enable-back-to-top="true" class="scroll-view data-v-5b533cdb" id="scroller" scroll-y="true">
      <view class="overview data-v-5b533cdb sk-image" style="padding-top:40px">
        <view class="status icon-clock data-v-5b533cdb sk-transparent sk-text-0-0000-70 sk-text sk-pseudo sk-pseudo-circle">等待付款</view>
        <view class="tips data-v-5b533cdb">
          <text class="money data-v-5b533cdb sk-transparent sk-text-0-0000-336 sk-text">应付金额 ￥ 99.00</text>
          <text class="time data-v-5b533cdb sk-transparent sk-text-0-0000-6 sk-text">支付剩余</text>
          <view is="uni_modules/uni-countdown/components/uni-countdown/uni-countdown" class="data-v-5b533cdb">
            <view class="uni-countdown countdown--uni-countdown data-v-c592f7f2 countdown--data-v-c592f7f2">
              <text class="uni-countdown__number countdown--uni-countdown__number data-v-c592f7f2 countdown--data-v-c592f7f2 sk-transparent sk-text-15-0000-716 sk-text" style="color: rgb(255, 255, 255); font-size: 14px; width: 22px; line-height: 20px; border-radius: 3px; background-position-x: 50%;">00</text>
              <text class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-c592f7f2 countdown--data-v-c592f7f2 sk-transparent sk-opacity" style="color:#fff;font-size:12px;margin:;">时</text>
              <text class="uni-countdown__number countdown--uni-countdown__number data-v-c592f7f2 countdown--data-v-c592f7f2 sk-transparent sk-text-15-0000-970 sk-text" style="color: rgb(255, 255, 255); font-size: 14px; width: 22px; line-height: 20px; border-radius: 3px; background-position-x: 50%;">14</text>
              <text class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-c592f7f2 countdown--data-v-c592f7f2 sk-transparent sk-opacity" style="color:#fff;font-size:12px;margin:;">分</text>
              <text class="uni-countdown__number countdown--uni-countdown__number data-v-c592f7f2 countdown--data-v-c592f7f2 sk-transparent sk-text-15-0000-778 sk-text" style="color: rgb(255, 255, 255); font-size: 14px; width: 22px; line-height: 20px; border-radius: 3px; background-position-x: 50%;">38</text>
              <text class="uni-countdown__splitor countdown--uni-countdown__splitor data-v-c592f7f2 countdown--data-v-c592f7f2 sk-transparent sk-opacity" style="color:#fff;font-size:12px;margin:;">秒</text>
            </view>
          </view>
        </view>
        <view class="buttono data-v-5b533cdb sk-transparent sk-text-0-0000-118 sk-text">去支付</view>
      </view>
      <view class="shipment data-v-5b533cdb">
        <view class="item data-v-5b533cdb sk-image">
          <view class="message data-v-5b533cdb sk-transparent sk-text-14-2857-802 sk-text"> 你已在***完成取件,感谢使用菜鸟驿站,期待再次为您服务 </view>
          <view class="date data-v-5b533cdb sk-transparent sk-text-14-2857-389 sk-text">2023-04-14 13:14:20</view>
        </view>
        <view class="locate data-v-5b533cdb sk-image">
          <view class="user data-v-5b533cdb sk-transparent sk-text-14-2857-816 sk-text">邓学5 13333333333</view>
          <view class="address data-v-5b533cdb sk-transparent sk-text-14-2857-482 sk-text">北京市 北京市 东城区2222</view>
        </view>
      </view>
      <view class="goods data-v-5b533cdb">
        <view class="item data-v-5b533cdb">
          <navigator class="navigator data-v-5b533cdb" hover-class="none">
            <image class="cover data-v-5b533cdb sk-image"></image>
            <view class="meta data-v-5b533cdb">
              <view class="name ellipsis data-v-5b533cdb sk-transparent sk-text-14-2857-824 sk-text">谷风一木4层印花手帕纸12包/条</view>
              <view class="type data-v-5b533cdb sk-transparent sk-text-22-2222-519 sk-text">冲浪里蓝（12包/条）</view>
              <view class="price data-v-5b533cdb">
                <view class="actual data-v-5b533cdb">
                  <text class="symbol data-v-5b533cdb sk-transparent sk-opacity">¥</text>
                  <text class="data-v-5b533cdb sk-transparent sk-text-14-2857-752 sk-text">5.9</text>
                </view>
              </view>
              <view class="quantity data-v-5b533cdb sk-transparent sk-opacity">x3</view>
            </view>
          </navigator>
        </view>
        <view class="total data-v-5b533cdb">
          <view class="row data-v-5b533cdb">
            <view class="text data-v-5b533cdb sk-transparent sk-text-0-0000-503 sk-text">商品总价: </view>
            <view class="symbol data-v-5b533cdb sk-transparent sk-text-0-0000-460 sk-text sk-pseudo sk-pseudo-circle">17.7</view>
          </view>
          <view class="row data-v-5b533cdb">
            <view class="text data-v-5b533cdb sk-transparent sk-text-0-0000-952 sk-text">运费: </view>
            <view class="symbol data-v-5b533cdb sk-transparent sk-text-0-0000-740 sk-text sk-pseudo sk-pseudo-circle">6</view>
          </view>
          <view class="row data-v-5b533cdb">
            <view class="text data-v-5b533cdb sk-transparent sk-text-0-0000-732 sk-text">应付金额: </view>
            <view class="symbol primary data-v-5b533cdb sk-transparent sk-text-0-0000-150 sk-text sk-pseudo sk-pseudo-circle">23.7</view>
          </view>
        </view>
      </view>
      <view class="detail data-v-5b533cdb">
        <view class="title data-v-5b533cdb sk-transparent sk-text-0-0000-194 sk-text">订单信息</view>
        <view class="row data-v-5b533cdb">
          <text class="item data-v-5b533cdb sk-transparent">订单编号: 1667089824504352770 <text class="copy data-v-5b533cdb sk-transparent sk-text-0-0000-593 sk-text">复制</text></text>
          <text class="item data-v-5b533cdb sk-transparent sk-text-0-0000-367 sk-text">下单时间:2023-04-14 </text>
        </view>
      </view>
      <view class="toolbar data-v-5b533cdb" style="padding-bottom:0px">
        <view class="button primary data-v-5b533cdb sk-transparent sk-text-14-2857-990 sk-text">去支付</view>
        <view class="button data-v-5b533cdb sk-transparent sk-text-14-2857-94 sk-text">取消订单</view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup >

</script>

<style  scoped>

.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-734 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-0-0000-70 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 36.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-336 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-6 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
  }
.sk-text-15-0000-716 {
    background-image: linear-gradient(transparent 15.0000%, #EEEEEE 0%, #EEEEEE 85.0000%, transparent 0%) !important;
    background-size: 100% 40.0000rpx;
    position: relative !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-15-0000-970 {
    background-image: linear-gradient(transparent 15.0000%, #EEEEEE 0%, #EEEEEE 85.0000%, transparent 0%) !important;
    background-size: 100% 40.0000rpx;
    position: relative !important;
  }
.sk-text-15-0000-778 {
    background-image: linear-gradient(transparent 15.0000%, #EEEEEE 0%, #EEEEEE 85.0000%, transparent 0%) !important;
    background-size: 100% 40.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-118 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 32.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-802 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-389 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-816 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-482 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-824 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-22-2222-519 {
    background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
    background-size: 100% 43.2000rpx;
    position: relative !important;
  }
.sk-text-14-2857-752 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-0-0000-503 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-460 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-952 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-740 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-732 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-150 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 36.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-194 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 30.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-593 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 20.0000rpx;
    position: relative !important;
  }
.sk-text-0-0000-367 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 26.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-990 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-94 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>