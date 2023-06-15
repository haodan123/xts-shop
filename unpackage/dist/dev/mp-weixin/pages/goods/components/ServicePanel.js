"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "ServicePanel",
  emits: ["close"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => emit("close"))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-960c9399"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pages/goods/components/ServicePanel.vue"]]);
wx.createComponent(Component);
