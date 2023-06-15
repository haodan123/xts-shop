"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _component_veiw = common_vendor.resolveComponent("veiw");
  _component_veiw();
}
const _sfc_main = {
  __name: "HotPanel",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.t(item.alt),
            c: common_vendor.f(item.pictures, (picture, k1, i1) => {
              return {
                a: picture,
                b: picture
              };
            }),
            d: `/pages/hot/hot?type=${item.type}`,
            e: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c2a3a17a"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pages/index/components/HotPanel.vue"]]);
wx.createComponent(Component);
