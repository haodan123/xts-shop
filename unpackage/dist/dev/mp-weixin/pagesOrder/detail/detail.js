"use strict";
const common_vendor = require("../../common/vendor.js");
const services_constants = require("../../services/constants.js");
const composables_index = require("../../composables/index.js");
const services_pay = require("../../services/pay.js");
const services_order = require("../../services/order.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/test.js");
require("../../stores/modules/user.js");
if (!Array) {
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_countdown2 + _easycom_uni_popup2)();
}
const _easycom_uni_countdown = () => "../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_countdown + XtxGuess + PageSkeleton + _easycom_uni_popup)();
}
const PageSkeleton = () => "./components/PageSkeleton.js";
const XtxGuess = () => "../../components/XtxGuess.js";
const _sfc_main = {
  __name: "detail",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const pages = getCurrentPages();
    pages.at(-1);
    const scroTop = common_vendor.ref(0);
    const gundong = (e) => {
      scroTop.value = e.detail.scrollTop;
    };
    const showNavbar = common_vendor.computed(() => {
      return scroTop.value > 50;
    });
    const {
      safeAreaInsets
    } = common_vendor.index.getSystemInfoSync();
    const {
      guessRef,
      onScrolltolower
    } = composables_index.useGuessList();
    const popup = common_vendor.ref();
    const reasonList = common_vendor.ref([
      "商品无货",
      "不想要了",
      "商品信息填错了",
      "地址信息填写错误",
      "商品降价",
      "其它"
    ]);
    const reason = common_vendor.ref("");
    const onCopy = (id) => {
      common_vendor.index.setClipboardData({
        data: id
      });
      common_vendor.index.showToast({
        title: "复制成功"
      });
    };
    const onTimeup = (e) => {
      order.value.orderState = services_constants.OrderState.YiQuXiao;
    };
    const order = common_vendor.ref();
    const getMemberOrderByIdData = async () => {
      const res = await services_order.getMemberOrderByIdAPI(props.id);
      order.value = res.result;
      if ([services_constants.OrderState.DaiShouHuo, services_constants.OrderState.DaiPingJia, services_constants.OrderState.YiWanCheng].includes(
        order.value.orderState
      )) {
        getMemberOrderLogisticsByIdData();
      }
    };
    const logisticList = common_vendor.ref([]);
    const getMemberOrderLogisticsByIdData = async () => {
      const res = await services_pay.getMemberOrderLogisticsByIdAPI(props.id);
      logisticList.value = res.result.list;
    };
    common_vendor.onLoad(() => {
      getMemberOrderByIdData();
    });
    const onOrderPay = async () => {
      {
        await services_pay.getPayMockAPI({
          orderId: props.id
        });
      }
      common_vendor.index.redirectTo({
        url: `/pagesOrder/payment/payment?id=${props.id}`
      });
    };
    const isDev = true;
    const onOrderSend = async () => {
      {
        await services_pay.getMemberOrderConsignmentByIdAPI(props.id);
        common_vendor.index.showToast({
          icon: "success",
          title: "模拟发货完成"
        });
        order.value.orderState = services_constants.OrderState.DaiShouHuo;
      }
    };
    const onOrderConfirm = async () => {
      common_vendor.index.showModal({
        content: "为保障您的权益，请收到货并确认无误后，再确认收货",
        success: async (success) => {
          if (success.confirm) {
            const res = await services_pay.putMemberOrderReceiptByIdAPI(props.id);
            order.value = res.result;
          }
        }
      });
    };
    const onDeletOrder = async () => {
      console.log(111);
      common_vendor.index.showModal({
        content: "确定要删除订单吗",
        success: async (success) => {
          if (success.confirm) {
            await services_pay.deleteMemberOrderAPI({
              ids: [props.id]
            });
            common_vendor.index.switchTab({
              url: `/pages/index/index`
            });
          }
        }
      });
    };
    const onQuxiaoOrder = async () => {
      var _a;
      const res = await services_pay.getMemberOrderCancelByIdAPI(props.id, {
        cancelReason: reason.value
      });
      order.value = res.result;
      (_a = popup == null ? void 0 : popup.close) == null ? void 0 : _a.call(popup);
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.unref(pages).length > 1
      }, common_vendor.unref(pages).length > 1 ? {} : {}, {
        b: common_vendor.unref(showNavbar) ? 1 : "",
        c: common_vendor.unref(safeAreaInsets).top + "px",
        d: order.value
      }, order.value ? common_vendor.e({
        e: order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan
      }, order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan ? {
        f: common_vendor.o(onTimeup),
        g: common_vendor.p({
          second: order.value.countdown,
          color: "#fff",
          ["splitor-color"]: "#fff",
          ["show-day"]: false,
          ["show-colon"]: false
        })
      } : common_vendor.e({
        h: common_vendor.t(common_vendor.unref(services_constants.orderStateList)[order.value.orderState].text),
        i: `/pagesOrder/create/create?orderId=${props.id}`,
        j: common_vendor.unref(isDev) && order.value.orderState == common_vendor.unref(services_constants.OrderState).DaiFaHuo
      }, common_vendor.unref(isDev) && order.value.orderState == common_vendor.unref(services_constants.OrderState).DaiFaHuo ? {
        k: common_vendor.o(onOrderSend)
      } : {}), {
        l: common_vendor.unref(safeAreaInsets).top + 20 + "px",
        m: common_vendor.f(logisticList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: common_vendor.t(item.time),
            c: item.id
          };
        }),
        n: common_vendor.t(order.value.receiverContact),
        o: common_vendor.t(order.value.receiverMobile),
        p: common_vendor.t(order.value.receiverAddress),
        q: common_vendor.f(order.value.skus, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attrsText),
            d: common_vendor.t(item.curPrice),
            e: common_vendor.t(item.quantity),
            f: item.id,
            g: `/pages/goods/goods?id=${item.spuId}`
          };
        }),
        r: order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia
      }, order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia ? {} : {}, {
        s: common_vendor.t(order.value.totalMoney),
        t: common_vendor.t(order.value.postFee),
        v: common_vendor.t(order.value.payMoney),
        w: common_vendor.t(props.id),
        x: common_vendor.o(($event) => onCopy(props.id)),
        y: common_vendor.sr(guessRef, "5b533cdb-1", {
          "k": "guessRef"
        }),
        z: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.bottom) + "px",
        A: order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan
      }, order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan ? {
        B: common_vendor.o(onOrderPay),
        C: common_vendor.o(($event) => popup.value.open())
      } : common_vendor.e({
        D: `/pagesOrder/create/create?orderId=${props.id}`,
        E: order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo
      }, order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo ? {
        F: common_vendor.o(onOrderConfirm)
      } : {}, {
        G: order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia
      }, order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia ? {} : {}, {
        H: order.value.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia
      }, order.value.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia ? {
        I: common_vendor.o(onDeletOrder)
      } : {}), {
        J: ((_b = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _b.bottom) + "px"
      }) : {}, {
        K: common_vendor.o(gundong),
        L: common_vendor.f(reasonList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item === reason.value ? 1 : "",
            c: item,
            d: common_vendor.o(($event) => reason.value = item, item)
          };
        }),
        M: common_vendor.o(($event) => {
          var _a2, _b2;
          return (_b2 = (_a2 = popup.value) == null ? void 0 : _a2.close) == null ? void 0 : _b2.call(_a2);
        }),
        N: common_vendor.o(onQuxiaoOrder),
        O: common_vendor.sr(popup, "5b533cdb-3", {
          "k": "popup"
        }),
        P: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5b533cdb"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pagesOrder/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
