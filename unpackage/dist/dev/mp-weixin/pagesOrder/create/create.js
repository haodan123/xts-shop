"use strict";
const common_vendor = require("../../common/vendor.js");
const services_order = require("../../services/order.js");
const stores_modules_address = require("../../stores/modules/address.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/test.js");
require("../../stores/modules/user.js");
const _sfc_main = {
  __name: "create",
  props: {
    skuId: {
      type: String,
      default: ""
    },
    count: {
      type: String,
      default: ""
    },
    orderId: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const {
      safeAreaInsets
    } = common_vendor.index.getSystemInfoSync();
    const buyerMessage = common_vendor.ref("");
    const deliveryList = common_vendor.ref([
      {
        type: 1,
        text: "时间不限 (周一至周日)"
      },
      {
        type: 2,
        text: "工作日送 (周一至周五)"
      },
      {
        type: 3,
        text: "周末配送 (周六至周日)"
      }
    ]);
    const activeIndex = common_vendor.ref(0);
    const activeDelivery = common_vendor.computed(() => {
      return deliveryList.value[activeIndex.value];
    });
    const onChangeDelivery = (e) => {
      activeIndex.value = e.detail.value;
    };
    const orderPre = common_vendor.ref([]);
    const getMemberOrderPreData = async () => {
      if (props.skuId && props.count) {
        const res = await services_order.getMemberOrderPreNowAPI({
          skuId: props.skuId,
          count: props.count
        });
        orderPre.value = res.result;
      } else if (props.orderId) {
        const res = await services_order.getMemberOrderRepurchaseByIdAPI(query.orderId);
        orderPre.value = res.result;
      } else {
        const res = await services_order.getMemberOrderPreAPI();
        orderPre.value = res.result;
      }
    };
    const addressStore = stores_modules_address.useAddressStore();
    const selecteAddress = common_vendor.computed(() => {
      return addressStore.selectedAddress || orderPre.value.userAddresses.find((v) => v.isDefault);
    });
    const isLoading = common_vendor.ref(false);
    const onOrderSubmit = async () => {
      if (!selecteAddress.value.id) {
        return common_vendor.index.showToast({
          icon: "none",
          title: "请选择收货地址"
        });
      }
      if (isLoading.value)
        return;
      isLoading.value = true;
      const res = await services_order.postMemberOrderAPI({
        addressId: selecteAddress.value.id,
        //地址的id
        goods: orderPre.value.goods.map((item) => ({
          count: item.count,
          skuId: item.skuId
        })),
        //商品数据
        deliveryTimeType: activeDelivery.value.type,
        //配送时间类型，1为不限，2为工作日，3为双休或假日
        buyerMessage: buyerMessage.value,
        //买家留言
        payType: 1,
        payChannel: 2
      });
      common_vendor.index.showToast({
        title: "生成订单成功"
      });
      setTimeout(() => {
        isLoading.value = false;
        common_vendor.index.redirectTo({
          url: `/pagesOrder/detail/detail?id=${res.result.id}`
        });
      }, 400);
    };
    common_vendor.onShow(() => {
      getMemberOrderPreData();
    });
    return (_ctx, _cache) => {
      var _a;
      return common_vendor.e({
        a: common_vendor.unref(selecteAddress)
      }, common_vendor.unref(selecteAddress) ? {
        b: common_vendor.t(common_vendor.unref(selecteAddress).receiver),
        c: common_vendor.t(common_vendor.unref(selecteAddress).contact),
        d: common_vendor.t(common_vendor.unref(selecteAddress).fullLocation),
        e: common_vendor.t(common_vendor.unref(selecteAddress).address)
      } : {}, {
        f: common_vendor.f(orderPre.value.goods, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attrsText),
            d: common_vendor.t(item.payPrice),
            e: common_vendor.t(item.price),
            f: common_vendor.t(item.count),
            g: item.id,
            h: `/pages/goods/goods?id=${item.id}`
          };
        }),
        g: common_vendor.t(common_vendor.unref(activeDelivery).text),
        h: deliveryList.value,
        i: common_vendor.o(onChangeDelivery),
        j: buyerMessage.value,
        k: common_vendor.o(($event) => buyerMessage.value = $event.detail.value),
        l: common_vendor.t(orderPre.value.summary.totalPrice),
        m: common_vendor.t(orderPre.value.summary.postFee),
        n: common_vendor.t((_a = orderPre.value) == null ? void 0 : _a.summary.totalPayPrice.toFixed(2)),
        o: common_vendor.o(onOrderSubmit),
        p: !common_vendor.unref(selecteAddress).id ? 1 : "",
        q: common_vendor.unref(safeAreaInsets).bottom + "px"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6133063d"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pagesOrder/create/create.vue"]]);
wx.createPage(MiniProgramPage);
