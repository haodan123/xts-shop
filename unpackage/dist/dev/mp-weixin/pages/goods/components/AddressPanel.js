"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "AddressPanel",
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => emit("close"))
      }, {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-80b86980"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pages/goods/components/AddressPanel.vue"]]);
wx.createComponent(Component);
