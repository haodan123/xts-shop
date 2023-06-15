"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_index = require("../../composables/index.js");
require("../../stores/index.js");
const services_cart = require("../../services/cart.js");
const stores_modules_user = require("../../stores/modules/user.js");
require("../../stores/modules/test.js");
require("../../utils/http.js");
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (vkDataInputNumberBox + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action + XtxGuess)();
}
const vkDataInputNumberBox = () => "../../uni_modules/vk-data-goods-sku-popup/components/vk-data-input-number-box/vk-data-input-number-box.js";
const XtxGuess = () => "../../components/XtxGuess.js";
const _sfc_main = {
  __name: "cart",
  setup(__props) {
    const {
      guessRef,
      onScrolltolower
    } = composables_index.useGuessList();
    const userStore = stores_modules_user.useUserStore();
    common_vendor.onReachBottom(() => {
      onScrolltolower();
    });
    const cartList = common_vendor.ref([]);
    const getCartData = async () => {
      const res = await services_cart.getMemberCartAPI();
      cartList.value = res.result;
    };
    const onDeleteCart = async (skuId) => {
      common_vendor.index.showModal({
        content: "你确定要删除这个商品吗",
        success: async (res) => {
          if (res.confirm) {
            await services_cart.deleteMemberCartAPI({
              ids: [skuId]
            });
            getCartData();
          }
        }
      });
    };
    const onChangeCount = async (e) => {
      await services_cart.putMemberCartBySkuIdAPI(e.index, {
        count: e.value
      });
    };
    const onChangeSelected = async (e) => {
      e.selected = !e.selected;
      await services_cart.putMemberCartBySkuIdAPI(e.skuId, {
        selected: e.selected
      });
    };
    const isSelectedAll = common_vendor.computed(() => {
      return cartList.value.length && cartList.value.every((v) => v.selected);
    });
    const selectedCartList = common_vendor.computed(() => {
      return cartList.value.filter((item) => item.selected);
    });
    const selectedCartListCount = common_vendor.computed(() => {
      return selectedCartList.value.reduce((sum, item) => sum += item.count, 0);
    });
    const selectedCartListMoney = common_vendor.computed(() => {
      return selectedCartList.value.reduce((sum, item) => {
        return sum + item.count * item.nowPrice;
      }, 0).toFixed(2);
    });
    const gotoPayment = () => {
      if (selectedCartListCount.value === 0) {
        return common_vendor.index.showToast({
          title: "请选中商品",
          icon: "none"
        });
      }
      common_vendor.index.navigateTo({
        url: "/pagesOrder/create/create"
      });
    };
    const onChangeSelectedAll = async () => {
      const _isSelectedAll = !isSelectedAll.value;
      cartList.value.forEach((item) => {
        item.selected = _isSelectedAll;
      });
      await services_cart.putMemberCartSelectedAPI({
        selected: _isSelectedAll
      });
    };
    common_vendor.onShow(() => {
      if (userStore.profile) {
        getCartData();
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userStore).profile
      }, common_vendor.unref(userStore).profile ? common_vendor.e({
        b: cartList.value.length > 0
      }, cartList.value.length > 0 ? {
        c: common_vendor.f(cartList.value, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => onChangeSelected(item), item.id),
            b: item.selected ? 1 : "",
            c: item.picture,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.attrsText),
            f: common_vendor.t(item.nowPrice),
            g: `/pages/goods/goods?id=${item.id}`,
            h: common_vendor.o(onChangeCount, item.id),
            i: "c91e7611-2-" + i0 + "," + ("c91e7611-1-" + i0),
            j: common_vendor.o(($event) => item.count = $event, item.id),
            k: common_vendor.p({
              min: 1,
              max: item.stock,
              index: item.skuId,
              modelValue: item.count
            }),
            l: common_vendor.o(($event) => onDeleteCart(item.skuId), item.id),
            m: item.id,
            n: "c91e7611-1-" + i0 + ",c91e7611-0"
          };
        })
      } : {}, {
        d: common_vendor.o(onChangeSelectedAll),
        e: common_vendor.unref(isSelectedAll) ? 1 : "",
        f: common_vendor.t(common_vendor.unref(selectedCartListMoney)),
        g: common_vendor.t(common_vendor.unref(selectedCartListCount)),
        h: common_vendor.o(gotoPayment),
        i: common_vendor.unref(selectedCartListCount).value === 0 ? 1 : ""
      }) : {}, {
        j: common_vendor.sr(guessRef, "c91e7611-3", {
          "k": "guessRef"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c91e7611"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
