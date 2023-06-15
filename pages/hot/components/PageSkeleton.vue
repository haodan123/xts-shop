
<template name="skeleton">
  <view class="sk-container">
    <veiw class="viewport data-v-4aaa739e">
      <view class="cover data-v-4aaa739e">
        <image class="data-v-4aaa739e sk-image" mode="true"></image>
      </view>
      <view class="tabs data-v-4aaa739e">
        <text class="text data-v-4aaa739e active sk-transparent sk-text-34-4444-899 sk-text sk-pseudo sk-pseudo-circle">抢先尝鲜</text>
        <text class="text data-v-4aaa739e sk-transparent sk-text-34-4444-803 sk-text">新品预告</text>
      </view>
      <scroll-view class="scroll-view data-v-4aaa739e" scroll-y="true" enable-back-to-top="true">
        <view class="goods data-v-4aaa739e">
          <navigator class="navigator data-v-4aaa739e" hover-class="none">
            <image class="thumb data-v-4aaa739e sk-image" mode="true"></image>
            <view class="name ellipsis data-v-4aaa739e sk-transparent sk-text-14-2857-272 sk-text">换季好帮手，大容量防尘衣物收纳袋</view>
            <view class="price data-v-4aaa739e">
              <text class="symbol data-v-4aaa739e sk-transparent sk-opacity">￥</text>
              <text class="number data-v-4aaa739e sk-transparent sk-text-0-0000-311 sk-text">69.00</text>
            </view>
          </navigator>
          <navigator class="navigator data-v-4aaa739e" hover-class="none">
            <image class="thumb data-v-4aaa739e sk-image" mode="true"></image>
            <view class="name ellipsis data-v-4aaa739e sk-transparent sk-text-14-2857-611 sk-text">法式清新，长袖格纹连衣裙/衬衫110-160cm</view>
            <view class="price data-v-4aaa739e">
              <text class="symbol data-v-4aaa739e sk-transparent sk-opacity">￥</text>
              <text class="number data-v-4aaa739e sk-transparent sk-text-0-0000-691 sk-text">129.00</text>
            </view>
          </navigator>
          <navigator class="navigator data-v-4aaa739e" hover-class="none">
            <image class="thumb data-v-4aaa739e sk-image" mode="true"></image>
            <view class="name ellipsis data-v-4aaa739e sk-transparent sk-text-14-2857-788 sk-text">湿擦更干净，屁屁更舒爽可冲散湿厕纸</view>
          </navigator>
          <navigator class="navigator data-v-4aaa739e" hover-class="none">
            <image class="thumb data-v-4aaa739e sk-image" mode="true"></image>
            <view class="name ellipsis data-v-4aaa739e sk-transparent sk-text-14-2857-961 sk-text">轻松出行复古经典老花时尚女式钥匙包</view>
          </navigator>
        </view>
      </scroll-view>
    </veiw>
  </view>
</template>

<script setup >

</script>

<style  scoped lang="scss">

.sk-transparent {
    color: transparent !important;
  }
.sk-text-34-4444-899 {
    background-image: linear-gradient(transparent 34.4444%, #EEEEEE 0%, #EEEEEE 65.5556%, transparent 0%) !important;
    background-size: 100% 90.0000rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-34-4444-803 {
    background-image: linear-gradient(transparent 34.4444%, #EEEEEE 0%, #EEEEEE 65.5556%, transparent 0%) !important;
    background-size: 100% 90.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-272 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-0-0000-311 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 32.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-611 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-0-0000-691 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 32.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-788 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-961 {
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