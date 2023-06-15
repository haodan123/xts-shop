"use strict";
const common_vendor = require("../../common/vendor.js");
const services_address = require("../../services/address.js");
const stores_modules_address = require("../../stores/modules/address.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/test.js");
require("../../stores/modules/user.js");
if (!Array) {
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
const _sfc_main = {
  __name: "address",
  props: {
    from: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const addressList = common_vendor.ref([]);
    const getAddressData = async () => {
      const res = await services_address.getMemberAddressAPI();
      addressList.value = res.result;
    };
    common_vendor.onShow(() => {
      getAddressData();
    });
    const onChangeAddress = (item) => {
      if (props.from) {
        const addressStore = stores_modules_address.useAddressStore();
        addressStore.changeSelectedAddress(item);
        common_vendor.index.navigateBack();
      }
    };
    const onDeleteAddress = async (id) => {
      common_vendor.index.showModal({
        content: "删除地址?",
        success: async (res) => {
          if (res.confirm) {
            await services_address.deleteMemberAddressByIdAPI(id);
            getAddressData();
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: addressList.value.length > 0
      }, addressList.value.length > 0 ? {
        b: common_vendor.f(addressList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.receiver),
            b: common_vendor.t(item.contact),
            c: item.isDefault
          }, item.isDefault ? {} : {}, {
            d: common_vendor.t(item.fullLocation),
            e: common_vendor.t(item.address),
            f: common_vendor.o(() => {
            }, item.id),
            g: `/pagesMember/addressForm/addressForm?id=${item.id}`,
            h: common_vendor.o(($event) => onChangeAddress(item), item.id),
            i: common_vendor.o(($event) => onDeleteAddress(item.id), item.id),
            j: item.id,
            k: "a86fef1e-1-" + i0 + ",a86fef1e-0"
          });
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a86fef1e"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pagesMember/address/address.vue"]]);
wx.createPage(MiniProgramPage);
