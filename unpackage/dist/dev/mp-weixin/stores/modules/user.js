"use strict";
const common_vendor = require("../../common/vendor.js");
const useUserStore = common_vendor.defineStore("useUser", () => {
  const profile = common_vendor.ref();
  const setProfile = (val) => {
    profile.value = val;
  };
  const clearProfile = () => {
    profile.value = null;
  };
  return {
    profile,
    setProfile,
    clearProfile
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
exports.useUserStore = useUserStore;
