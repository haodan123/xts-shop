"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const stores_index = require("./stores/index.js");
require("./stores/modules/test.js");
require("./stores/modules/user.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/category/category.js";
  "./pages/cart/cart.js";
  "./pages/cart/cart2.js";
  "./pages/my/my.js";
  "./pages/hot/hot.js";
  "./pages/login/login.js";
  "./pages/goods/goods.js";
  "./pagesMember/settings/settings.js";
  "./pagesMember/profile/profile.js";
  "./pagesMember/address/address.js";
  "./pagesMember/addressForm/addressForm.js";
  "./pagesOrder/create/create.js";
  "./pagesOrder/detail/detail.js";
  "./pagesOrder/payment/payment.js";
  "./pagesOrder/list/list.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(stores_index.pinia);
  return {
    app,
    pinia: stores_index.pinia
    // 此处必须将 Pinia 返回
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
