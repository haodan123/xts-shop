"use strict";
const common_vendor = require("../common/vendor.js");
const services_home = require("../services/home.js");
require("../utils/http.js");
require("../stores/index.js");
require("../stores/modules/test.js");
require("../stores/modules/user.js");
if (!Array) {
  const _component_veiw = common_vendor.resolveComponent("veiw");
  _component_veiw();
}
const _sfc_main = {
  __name: "XtxGuess",
  setup(__props, { expose }) {
    const finish = common_vendor.ref(false);
    const pageParams = common_vendor.ref({
      page: 1,
      pageSize: 10
    });
    const guessList = common_vendor.ref([]);
    const getHomeGoodsGuessLikeData = async () => {
      if (finish.value) {
        return common_vendor.index.showToast({
          icon: "none",
          title: "没有更多数据..."
        });
      }
      const res = await services_home.getHomeGoodsGuessLikeAPI(pageParams.value);
      guessList.value.push(...res.result.items);
      if (pageParams.value.page > res.result.pages) {
        finish.value = true;
      } else {
        pageParams.value.page++;
      }
    };
    const resetData = () => {
      pageParams.page = 1;
      guessList.value = [];
      finish.value = false;
    };
    common_vendor.onMounted(() => {
      getHomeGoodsGuessLikeData();
    });
    expose({
      resetData,
      getMore: getHomeGoodsGuessLikeData
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(guessList.value, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: `/pages/goods/goods?id=${item.id}`,
            e: item.id
          };
        }),
        b: common_vendor.t(finish.value ? "没有更多数据" : "正在加载...")
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0573e17c"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/components/XtxGuess.vue"]]);
wx.createComponent(Component);
