
<template name="skeleton">
  <view class="sk-container">
    <scroll-view class="viewport data-v-7e2880f6" scroll-y="true" enable-back-to-top="true">
      <view class="goods data-v-7e2880f6">
        <view class="preview data-v-7e2880f6">
          <swiper circular="true" class="data-v-7e2880f6" style="height:375px" current="0" autoplay="false">
            <swiper-item class="data-v-7e2880f6" style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
              <image class="image data-v-7e2880f6 sk-image" mode="aspectFill"></image>
            </swiper-item>
          </swiper>
          <view class="indicator data-v-7e2880f6">
            <text class="current data-v-7e2880f6 sk-transparent sk-opacity">1</text>
            <text class="split data-v-7e2880f6 sk-transparent sk-opacity">/</text>
            <text class="total data-v-7e2880f6 sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta data-v-7e2880f6">
          <view class="price data-v-7e2880f6">
            <text class="symbol data-v-7e2880f6 sk-transparent sk-text-14-2857-297 sk-text">￥</text>
            <text class="number data-v-7e2880f6 sk-transparent sk-text-14-2857-232 sk-text">28.50</text>
          </view>
          <view class="name ellipsis data-v-7e2880f6 sk-transparent sk-text-14-2857-694 sk-text">大丈夫方便面轻巧款私房牛肉味64克*6杯</view>
          <view class="desc data-v-7e2880f6 sk-transparent sk-text-0-0000-454 sk-text">非油炸，好吃不上火app</view>
        </view>
        <view class="action data-v-7e2880f6">
          <view class="item arrow data-v-7e2880f6 sk-pseudo sk-pseudo-circle">
            <text class="label data-v-7e2880f6 sk-transparent sk-text-14-2857-203 sk-text">选择</text>
            <text class="text ellipsis data-v-7e2880f6 sk-transparent sk-text-14-2857-284 sk-text">请选择商品规格</text>
          </view>
          <view class="item arrow data-v-7e2880f6 sk-pseudo sk-pseudo-circle">
            <text class="label data-v-7e2880f6 sk-transparent sk-text-14-2857-538 sk-text">送至</text>
            <text class="text ellipsis data-v-7e2880f6 sk-transparent sk-text-14-2857-382 sk-text">请选择收货地址</text>
          </view>
          <view class="item arrow data-v-7e2880f6 sk-pseudo sk-pseudo-circle"></view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar data-v-7e2880f6" style="padding-bottom:0px">
      <view class="icons data-v-7e2880f6">
        <button class="icons-button data-v-7e2880f6 sk-transparent sk-button sk-pseudo sk-pseudo-circle">
          <text class="icon-heart data-v-7e2880f6 sk-pseudo sk-pseudo-circle"></text> 收藏 </button>
        <button class="icons-button data-v-7e2880f6 sk-transparent sk-button sk-pseudo sk-pseudo-circle" open-type="contact">
          <text class="icon-handset data-v-7e2880f6 sk-pseudo sk-pseudo-circle"></text> 客服 </button>
        <navigator class="icons-button data-v-7e2880f6 sk-transparent" open-type="switchTab">
          <text class="icon-cart data-v-7e2880f6 sk-pseudo sk-pseudo-circle"></text> 购物车 </navigator>
      </view>
      <view class="buttons data-v-7e2880f6">
        <view class="addcart data-v-7e2880f6 sk-transparent sk-text-31-9444-365 sk-text" style="background-position-x: 50%;"> 加入购物车 </view>
        <view class="buynow data-v-7e2880f6 sk-transparent sk-text-31-9444-757 sk-text" style="background-position-x: 50%;"> 立即购买 </view>
      </view>
    </view>
  </view>
</template>

<script setup >

</script>

<style  scoped>

.sk-transparent {
    color: transparent !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-14-2857-297 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 47.6000rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-232 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 78.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-694 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
  }
.sk-text-0-0000-454 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 24.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-203 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-284 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-538 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-382 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-31-9444-365 {
    background-image: linear-gradient(transparent 31.9444%, #EEEEEE 0%, #EEEEEE 68.0556%, transparent 0%) !important;
    background-size: 100% 72.0000rpx;
    position: relative !important;
  }
.sk-text-31-9444-757 {
    background-image: linear-gradient(transparent 31.9444%, #EEEEEE 0%, #EEEEEE 68.0556%, transparent 0%) !important;
    background-size: 100% 72.0000rpx;
    position: relative !important;
  }
.sk-button {
    color: #EFEFEF !important;
    background: #EFEFEF !important;
    border: none !important;
    box-shadow: none !important;
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