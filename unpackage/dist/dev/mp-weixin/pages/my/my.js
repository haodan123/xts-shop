"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_index = require("../../composables/index.js");
require("../../stores/index.js");
const stores_modules_user = require("../../stores/modules/user.js");
require("../../stores/modules/test.js");
if (!Math) {
  XtxGuess();
}
const XtxGuess = () => "../../components/XtxGuess.js";
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const {
      safeAreaInsets
    } = common_vendor.index.getSystemInfoSync();
    const orderTypes = [
      {
        type: 1,
        text: "待付款",
        icon: "icon-currency"
      },
      {
        type: 2,
        text: "待发货",
        icon: "icon-gift"
      },
      {
        type: 3,
        text: "待收货",
        icon: "icon-check"
      },
      {
        type: 4,
        text: "待评价",
        icon: "icon-comment"
      }
    ];
    const {
      guessRef,
      onScrolltolower
    } = composables_index.useGuessList();
    common_vendor.onReachBottom(() => {
      console.log(111);
      onScrolltolower();
    });
    const userStore = stores_modules_user.useUserStore();
    console.log(userStore.profile);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userStore).profile
      }, common_vendor.unref(userStore).profile ? {
        b: common_vendor.unref(userStore).profile.avatar,
        c: common_vendor.t(common_vendor.unref(userStore).profile.nickname || common_vendor.unref(userStore).profile.account)
      } : {}, {
        d: common_vendor.unref(safeAreaInsets).top + "px",
        e: `/pagesOrder/list/list?type=${0}`,
        f: common_vendor.f(orderTypes, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: item.type,
            c: common_vendor.n(item.icon),
            d: `/pagesOrder/list/list?type=${item.type}`
          };
        }),
        g: common_vendor.sr(guessRef, "2f1ef635-0", {
          "k": "guessRef"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f1ef635"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
