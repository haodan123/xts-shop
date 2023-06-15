"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_index = require("../../composables/index.js");
if (!Math) {
  XtxGuess();
}
const XtxGuess = () => "../../components/XtxGuess.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "payment",
  props: {
    id: String
  },
  setup(__props) {
    const query = __props;
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    return (_ctx, _cache) => {
      return {
        a: `/pagesOrder/detail/detail?id=${query.id}`,
        b: common_vendor.sr(guessRef, "96541e24-0", {
          "k": "guessRef"
        }),
        c: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        )
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pagesOrder/payment/payment.vue"]]);
wx.createPage(MiniProgramPage);
