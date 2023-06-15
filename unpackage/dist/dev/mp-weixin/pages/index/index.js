"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_index = require("../../composables/index.js");
const services_home = require("../../services/home.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/test.js");
require("../../stores/modules/user.js");
if (!Math) {
  (CustomNavbar + PageSkeleton + XtxSwiper + CategoryPanel + HotPanel + XtxGuess)();
}
const CustomNavbar = () => "./components/CustomNavbar.js";
const CategoryPanel = () => "./components/CategoryPanel.js";
const HotPanel = () => "./components/HotPanel.js";
const PageSkeleton = () => "./components/PageSkeleton.js";
const XtxSwiper = () => "../../components/XtxSwiper.js";
const XtxGuess = () => "../../components/XtxGuess.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const isLoading = common_vendor.ref(false);
    const bannerList = common_vendor.ref([]);
    const getSwiper = async () => {
      const res = await services_home.getHomeBannerAPI();
      bannerList.value = res.result;
    };
    const categoryList = common_vendor.ref([]);
    const getCategory = async () => {
      const res = await services_home.getHomeCategoryAPI();
      categoryList.value = res.result;
    };
    const hotList = common_vendor.ref([]);
    const getHto = async () => {
      const res = await services_home.getHomeHotAPI();
      hotList.value = res.result;
    };
    const isTriggered = common_vendor.ref(false);
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    const onRefresherrefresh = async () => {
      var _a;
      isTriggered.value = true;
      (_a = guessRef.value) == null ? void 0 : _a.resetData();
      await Promise.all([getSwiper(), getCategory(), getHto()]);
      isTriggered.value = false;
    };
    common_vendor.onLoad(async () => {
      console.log("加载");
      isLoading.value = true;
      await Promise.all([getSwiper(), getCategory(), getHto()]);
      isLoading.value = false;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isLoading.value
      }, isLoading.value ? {} : common_vendor.e({
        b: common_vendor.p({
          list: bannerList.value
        }),
        c: common_vendor.p({
          list: categoryList.value
        }),
        d: common_vendor.p({
          list: hotList.value
        }),
        e: !isLoading.value
      }, !isLoading.value ? {
        f: common_vendor.sr(guessRef, "5c99e9e4-5", {
          "k": "guessRef"
        })
      } : {}), {
        g: common_vendor.o((...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)),
        h: common_vendor.o(onRefresherrefresh),
        i: isTriggered.value
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
