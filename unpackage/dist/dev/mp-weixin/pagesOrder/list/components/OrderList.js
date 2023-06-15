"use strict";
const common_vendor = require("../../../common/vendor.js");
const services_constants = require("../../../services/constants.js");
const services_order = require("../../../services/order.js");
const services_pay = require("../../../services/pay.js");
require("../../../utils/http.js");
require("../../../stores/index.js");
require("../../../stores/modules/test.js");
require("../../../stores/modules/user.js");
const _sfc_main = {
  __name: "OrderList",
  props: {
    orderState: Number
  },
  setup(__props) {
    const props = __props;
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const queryParams = {
      page: 1,
      pageSize: 5,
      orderState: props.orderState
    };
    const orderList = common_vendor.ref([]);
    const isLoading = common_vendor.ref(false);
    const getMemberOrderData = async () => {
      if (isLoading.value)
        return;
      if (isFinish.value === true) {
        return common_vendor.index.showToast({ icon: "none", title: "没有更多数据~" });
      }
      isLoading.value = true;
      const res = await services_order.getMemberOrderAPI(queryParams);
      isLoading.value = false;
      orderList.value.push(...res.result.items);
      if (queryParams.page < res.result.pages) {
        queryParams.page++;
      } else {
        isFinish.value = true;
      }
    };
    common_vendor.onMounted(() => {
      getMemberOrderData();
    });
    const onOrderPay = async (id) => {
    };
    const onOrderConfirm = (id) => {
      common_vendor.index.showModal({
        content: "为保障您的权益，请收到货并确认无误后，再确认收货",
        success: async (res) => {
          if (res.confirm) {
            await services_pay.putMemberOrderReceiptByIdAPI(id);
            common_vendor.index.showToast({ icon: "success", title: "确认收货成功" });
            const order = orderList.value.find((v) => v.id === id);
            order.orderState = services_constants.OrderState.DaiPingJia;
          }
        }
      });
    };
    const onOrderDelete = (id) => {
      common_vendor.index.showModal({
        content: "你确定要删除该订单？",
        success: async (res) => {
          if (res.confirm) {
            await services_pay.deleteMemberOrderAPI({ ids: [id] });
            const index = orderList.value.findIndex((v) => v.id === id);
            orderList.value.splice(index, 1);
          }
        }
      });
    };
    const isFinish = common_vendor.ref(false);
    const isTriggered = common_vendor.ref(false);
    const onRefresherrefresh = async () => {
      isTriggered.value = true;
      queryParams.page = 1;
      orderList.value = [];
      isFinish.value = false;
      await getMemberOrderData();
      isTriggered.value = false;
    };
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.f(orderList.value, (order, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(order.createTime),
            b: common_vendor.t(common_vendor.unref(services_constants.orderStateList)[order.orderState].text),
            c: order.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia
          }, order.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia ? {
            d: common_vendor.o(($event) => onOrderDelete(order.id), order.id)
          } : {}, {
            e: common_vendor.f(order.skus, (item, k1, i1) => {
              return {
                a: item.image,
                b: common_vendor.t(item.name),
                c: common_vendor.t(item.attrsText),
                d: item.id
              };
            }),
            f: `/pagesOrder/detail/detail?id=${order.id}`,
            g: common_vendor.t(order.totalNum),
            h: common_vendor.t(order.payMoney),
            i: order.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan
          }, order.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan ? {
            j: common_vendor.o(($event) => onOrderPay(order.id), order.id)
          } : common_vendor.e({
            k: `/pagesOrder/create/create?orderId=${order.id}`,
            l: order.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo
          }, order.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo ? {
            m: common_vendor.o(($event) => onOrderConfirm(order.id), order.id)
          } : {}), {
            n: order.id
          });
        }),
        b: common_vendor.t(isFinish.value ? "没有更多数据~" : "正在加载..."),
        c: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.bottom) + "px",
        d: isTriggered.value,
        e: common_vendor.o(onRefresherrefresh),
        f: common_vendor.o(getMemberOrderData)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pagesOrder/list/components/OrderList.vue"]]);
wx.createComponent(Component);
