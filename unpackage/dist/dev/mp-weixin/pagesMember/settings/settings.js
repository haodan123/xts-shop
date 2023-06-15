"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../stores/index.js");
const stores_modules_user = require("../../stores/modules/user.js");
require("../../stores/modules/test.js");
const _sfc_main = {
  __name: "settings",
  setup(__props) {
    const userStore = stores_modules_user.useUserStore();
    const logout = () => {
      common_vendor.index.showModal({
        content: "是否退出登录？",
        success(res) {
          if (res.confirm) {
            userStore.clearProfile();
            common_vendor.index.navigateBack();
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userStore).profile
      }, common_vendor.unref(userStore).profile ? {} : {}, {
        b: common_vendor.unref(userStore).profile
      }, common_vendor.unref(userStore).profile ? {
        c: common_vendor.o(logout)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-78d0a6ea"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pagesMember/settings/settings.vue"]]);
wx.createPage(MiniProgramPage);
