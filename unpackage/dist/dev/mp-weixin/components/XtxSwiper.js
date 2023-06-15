"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _component_veiw = common_vendor.resolveComponent("veiw");
  _component_veiw();
}
const _sfc_main = {
  __name: "XtxSwiper",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const activeIndex = common_vendor.ref(0);
    const onChange = (e) => {
      activeIndex.value = e.detail.current;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.list, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: item.id
          };
        }),
        b: common_vendor.o(onChange),
        c: common_vendor.f(__props.list, (item, index, i0) => {
          return {
            a: index,
            b: index === activeIndex.value ? 1 : ""
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/components/XtxSwiper.vue"]]);
wx.createComponent(Component);
