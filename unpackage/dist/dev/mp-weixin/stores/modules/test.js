"use strict";
const common_vendor = require("../../common/vendor.js");
common_vendor.defineStore("useTest", () => {
  const hello = common_vendor.ref("你好");
  return { hello };
}, {
  // 网页端配置
  // persist: true,
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
