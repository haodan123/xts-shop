"use strict";
const common_vendor = require("../../common/vendor.js");
const services_category = require("../../services/category.js");
const services_home = require("../../services/home.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/test.js");
require("../../stores/modules/user.js");
if (!Array) {
  const _component_veiw = common_vendor.resolveComponent("veiw");
  _component_veiw();
}
if (!Math) {
  (PageSkeleton + XtxSwiper)();
}
const PageSkeleton = () => "./components/PageSkeleton.js";
const XtxSwiper = () => "../../components/XtxSwiper.js";
const _sfc_main = {
  __name: "category",
  setup(__props) {
    const isLoading = common_vendor.ref(false);
    const bannerList = common_vendor.ref([]);
    const getBanner = async () => {
      const res = await services_home.getHomeBannerAPI(2);
      bannerList.value = res.result;
    };
    const activeIndex = common_vendor.ref(0);
    const categoryList = common_vendor.ref([]);
    const getCategoryTopData = async () => {
      const res = await services_category.getCategoryTopAPI();
      categoryList.value = res.result;
    };
    const subCategoryList = common_vendor.computed(() => {
      var _a;
      return ((_a = categoryList.value[activeIndex.value]) == null ? void 0 : _a.children) || [];
    });
    common_vendor.onLoad(async () => {
      isLoading.value = true;
      await Promise.all([getBanner(), getCategoryTopData()]);
      isLoading.value = false;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isLoading.value
      }, isLoading.value ? {} : {
        b: common_vendor.f(categoryList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index === activeIndex.value ? 1 : "",
            c: common_vendor.o(($event) => activeIndex.value = index, item),
            d: item
          };
        }),
        c: common_vendor.p({
          list: bannerList.value
        }),
        d: common_vendor.f(common_vendor.unref(subCategoryList), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.f(item.goods, (goods, k1, i1) => {
              return {
                a: goods.picture,
                b: common_vendor.t(goods.name),
                c: common_vendor.t(goods.price),
                d: `/pages/goods/goods?id=${goods.id}`,
                e: goods.id
              };
            }),
            c: item.id
          };
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8145b772"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
