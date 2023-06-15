<!-- 首页的骨架屏 -->
<template name="skeleton">
  <view class="sk-container">
    <view is="pages/index/components/CustomNavbar">
      <veiw class="navbar CustomNavbar--navbar data-v-321b21b6 CustomNavbar--data-v-321b21b6" style="padding-top:44px">
        <view class="logo CustomNavbar--logo data-v-321b21b6 CustomNavbar--data-v-321b21b6">
          <image class="logo-image CustomNavbar--logo-image data-v-321b21b6 CustomNavbar--data-v-321b21b6 sk-image" mode="true"></image>
          <text class="logo-text CustomNavbar--logo-text data-v-321b21b6 CustomNavbar--data-v-321b21b6 sk-transparent sk-text-3-3333-138 sk-text">新鲜 · 亲民 · 快捷</text>
        </view>
        <view class="search CustomNavbar--search data-v-321b21b6 CustomNavbar--data-v-321b21b6">
          <text class="icon-search CustomNavbar--icon-search data-v-321b21b6 CustomNavbar--data-v-321b21b6 sk-transparent sk-text-14-2857-799 sk-text sk-pseudo sk-pseudo-circle">搜索商品</text>
          <text class="icon-scan CustomNavbar--icon-scan data-v-321b21b6 CustomNavbar--data-v-321b21b6 sk-pseudo sk-pseudo-circle"></text>
        </view>
      </veiw>
    </view>
    <scroll-view refresher-enabled="true" scroll-y="true" class="scroll-view">
      <view is="components/XtxSwiper">
        <veiw class="carousel XtxSwiper--carousel">
          <swiper circular="true" autoplay="false" interval="3000" current="0"></swiper>
          <view class="indicator XtxSwiper--indicator">
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
            <text class="dot XtxSwiper--dot"></text>
          </view>
        </veiw>
      </view>
      <view is="pages/index/components/CategoryPanel">
        <veiw class="category CategoryPanel--category data-v-5291de87 CategoryPanel--data-v-5291de87">
          <navigator class="category-item CategoryPanel--category-item data-v-5291de87 CategoryPanel--data-v-5291de87" hover-class="none">
            <image class="icon CategoryPanel--icon data-v-5291de87 CategoryPanel--data-v-5291de87 sk-image" mode="true"></image>
            <text class="text CategoryPanel--text data-v-5291de87 CategoryPanel--data-v-5291de87 sk-transparent sk-text-14-2857-243 sk-text">居家</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item data-v-5291de87 CategoryPanel--data-v-5291de87" hover-class="none">
            <image class="icon CategoryPanel--icon data-v-5291de87 CategoryPanel--data-v-5291de87 sk-image" mode="true"></image>
            <text class="text CategoryPanel--text data-v-5291de87 CategoryPanel--data-v-5291de87 sk-transparent sk-text-14-2857-799 sk-text">锦鲤</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item data-v-5291de87 CategoryPanel--data-v-5291de87" hover-class="none">
            <image class="icon CategoryPanel--icon data-v-5291de87 CategoryPanel--data-v-5291de87 sk-image" mode="true"></image>
            <text class="text CategoryPanel--text data-v-5291de87 CategoryPanel--data-v-5291de87 sk-transparent sk-text-14-2857-252 sk-text">服饰</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item data-v-5291de87 CategoryPanel--data-v-5291de87" hover-class="none">
            <image class="icon CategoryPanel--icon data-v-5291de87 CategoryPanel--data-v-5291de87 sk-image" mode="true"></image>
            <text class="text CategoryPanel--text data-v-5291de87 CategoryPanel--data-v-5291de87 sk-transparent sk-text-14-2857-893 sk-text">母婴</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item data-v-5291de87 CategoryPanel--data-v-5291de87" hover-class="none">
            <image class="icon CategoryPanel--icon data-v-5291de87 CategoryPanel--data-v-5291de87 sk-image" mode="true"></image>
            <text class="text CategoryPanel--text data-v-5291de87 CategoryPanel--data-v-5291de87 sk-transparent sk-text-14-2857-581 sk-text">个护</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item data-v-5291de87 CategoryPanel--data-v-5291de87" hover-class="none">
            <image class="icon CategoryPanel--icon data-v-5291de87 CategoryPanel--data-v-5291de87 sk-image" mode="true"></image>
            <text class="text CategoryPanel--text data-v-5291de87 CategoryPanel--data-v-5291de87 sk-transparent sk-text-14-2857-865 sk-text">严选</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item data-v-5291de87 CategoryPanel--data-v-5291de87" hover-class="none">
            <image class="icon CategoryPanel--icon data-v-5291de87 CategoryPanel--data-v-5291de87 sk-image" mode="true"></image>
            <text class="text CategoryPanel--text data-v-5291de87 CategoryPanel--data-v-5291de87 sk-transparent sk-text-14-2857-772 sk-text">数码</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item data-v-5291de87 CategoryPanel--data-v-5291de87" hover-class="none">
            <image class="icon CategoryPanel--icon data-v-5291de87 CategoryPanel--data-v-5291de87 sk-image" mode="true"></image>
            <text class="text CategoryPanel--text data-v-5291de87 CategoryPanel--data-v-5291de87 sk-transparent sk-text-14-2857-739 sk-text">运动</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item data-v-5291de87 CategoryPanel--data-v-5291de87" hover-class="none">
            <image class="icon CategoryPanel--icon data-v-5291de87 CategoryPanel--data-v-5291de87 sk-image" mode="true"></image>
            <text class="text CategoryPanel--text data-v-5291de87 CategoryPanel--data-v-5291de87 sk-transparent sk-text-14-2857-129 sk-text">杂项</text>
          </navigator>
          <navigator class="category-item CategoryPanel--category-item data-v-5291de87 CategoryPanel--data-v-5291de87" hover-class="none">
            <image class="icon CategoryPanel--icon data-v-5291de87 CategoryPanel--data-v-5291de87 sk-image" mode="true"></image>
            <text class="text CategoryPanel--text data-v-5291de87 CategoryPanel--data-v-5291de87 sk-transparent sk-text-14-2857-67 sk-text">品牌</text>
          </navigator>
        </veiw>
      </view>
      <view is="pages/index/components/HotPanel">
        <veiw class="hotpanel HotPanel--hotpanel data-v-c2a3a17a HotPanel--data-v-c2a3a17a">
          <view class="item HotPanel--item data-v-c2a3a17a HotPanel--data-v-c2a3a17a">
            <view class="title HotPanel--title data-v-c2a3a17a HotPanel--data-v-c2a3a17a">
              <text class="title-text HotPanel--title-text data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-transparent sk-text-14-2857-68 sk-text">特惠推荐</text>
              <text class="title-desc HotPanel--title-desc data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-transparent sk-text-14-2857-816 sk-text">精选全攻略</text>
            </view>
            <navigator class="cards HotPanel--cards data-v-c2a3a17a HotPanel--data-v-c2a3a17a" hover-class="none">
              <image class="image HotPanel--image data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-c2a3a17a HotPanel--data-v-c2a3a17a">
            <view class="title HotPanel--title data-v-c2a3a17a HotPanel--data-v-c2a3a17a">
              <text class="title-text HotPanel--title-text data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-transparent sk-text-14-2857-364 sk-text">爆款推荐</text>
              <text class="title-desc HotPanel--title-desc data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-transparent sk-text-14-2857-852 sk-text">最受欢迎</text>
            </view>
            <navigator class="cards HotPanel--cards data-v-c2a3a17a HotPanel--data-v-c2a3a17a" hover-class="none">
              <image class="image HotPanel--image data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-c2a3a17a HotPanel--data-v-c2a3a17a">
            <view class="title HotPanel--title data-v-c2a3a17a HotPanel--data-v-c2a3a17a">
              <text class="title-text HotPanel--title-text data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-transparent sk-text-14-2857-951 sk-text">一站买全</text>
              <text class="title-desc HotPanel--title-desc data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-transparent sk-text-14-2857-907 sk-text">精心优选</text>
            </view>
            <navigator class="cards HotPanel--cards data-v-c2a3a17a HotPanel--data-v-c2a3a17a" hover-class="none">
              <image class="image HotPanel--image data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
          <view class="item HotPanel--item data-v-c2a3a17a HotPanel--data-v-c2a3a17a">
            <view class="title HotPanel--title data-v-c2a3a17a HotPanel--data-v-c2a3a17a">
              <text class="title-text HotPanel--title-text data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-transparent sk-text-14-2857-805 sk-text">新鲜好物</text>
              <text class="title-desc HotPanel--title-desc data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-transparent sk-text-14-2857-60 sk-text">生活加分项</text>
            </view>
            <navigator class="cards HotPanel--cards data-v-c2a3a17a HotPanel--data-v-c2a3a17a" hover-class="none">
              <image class="image HotPanel--image data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-image" mode="aspectFit"></image>
              <image class="image HotPanel--image data-v-c2a3a17a HotPanel--data-v-c2a3a17a sk-image" mode="aspectFit"></image>
            </navigator>
          </view>
        </veiw>
      </view>
      <view is="components/XtxGuess" class="r">
        <veiw class="data-v-0573e17c XtxGuess--data-v-0573e17c" style="display:block;background-color:#eee">
          <view class="caption XtxGuess--caption data-v-0573e17c XtxGuess--data-v-0573e17c">
            <text class="text XtxGuess--text data-v-0573e17c XtxGuess--data-v-0573e17c sk-transparent sk-text-0-0000-257 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
          </view>
          <view class="guess XtxGuess--guess data-v-0573e17c XtxGuess--data-v-0573e17c">
            <navigator class="guess-item XtxGuess--guess-item data-v-0573e17c XtxGuess--data-v-0573e17c" hover-class="none">
              <image class="image XtxGuess--image data-v-0573e17c XtxGuess--data-v-0573e17c sk-image" mode="aspectFill"></image>
            </navigator>
            <navigator class="guess-item XtxGuess--guess-item data-v-0573e17c XtxGuess--data-v-0573e17c" hover-class="none">
              <image class="image XtxGuess--image data-v-0573e17c XtxGuess--data-v-0573e17c sk-image" mode="aspectFill"></image>
            </navigator>
          </view>
        </veiw>
      </view>
    </scroll-view>
  </view>
</template>

<script setup >

</script>

<style  scoped lang="scss">

.sk-transparent {
    color: transparent !important;
  }
.sk-text-3-3333-138 {
    background-image: linear-gradient(transparent 3.3333%, #EEEEEE 0%, #EEEEEE 96.6667%, transparent 0%) !important;
    background-size: 100% 27.1739rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-799 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 38.0435rpx;
    position: relative !important;
  }
.sk-text-14-2857-243 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-252 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-893 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-581 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-865 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-772 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-739 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-129 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-67 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 35.5072rpx;
    position: relative !important;
  }
.sk-text-14-2857-68 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.1159rpx;
    position: relative !important;
  }
.sk-text-14-2857-816 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-364 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.1159rpx;
    position: relative !important;
  }
.sk-text-14-2857-852 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-951 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.1159rpx;
    position: relative !important;
  }
.sk-text-14-2857-907 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-14-2857-805 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 43.1159rpx;
    position: relative !important;
  }
.sk-text-14-2857-60 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.9710rpx;
    position: relative !important;
  }
.sk-text-0-0000-257 {
    background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
    background-size: 100% 30.7971rpx;
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