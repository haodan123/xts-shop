"use strict";
const common_vendor = require("../../common/vendor.js");
const useAddressStore = common_vendor.defineStore("useAddressStore", () => {
  const selectedAddress = common_vendor.ref();
  const changeSelectedAddress = (e) => {
    selectedAddress.value = e;
  };
  return {
    changeSelectedAddress,
    selectedAddress
  };
}, {
  // 小程序端配置
  persist: {
    storage: {
      getItem(key) {
        return common_vendor.index.getStorageSync(key);
      },
      setItem(key, value) {
        common_vendor.index.setStorageSync(key, value);
      }
    }
  }
});
exports.useAddressStore = useAddressStore;
