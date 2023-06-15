"use strict";
const common_vendor = require("../../common/vendor.js");
const services_login = require("../../services/login.js");
const stores_modules_user = require("../../stores/modules/user.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/test.js");
if (!Array) {
  const _component_veiw = common_vendor.resolveComponent("veiw");
  _component_veiw();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    let code = "";
    common_vendor.onLoad(async () => {
      const res = await common_vendor.wx$1.login();
      console.log(res);
      code = res.code;
    });
    const onGetphonenumber = async (ev) => {
      console.log(ev);
      const encryptedData = ev.detail.encryptedData;
      const iv = ev.detail.iv;
      try {
        const res = await services_login.postLoginWxMinAPI({
          code,
          encryptedData,
          iv
        });
        loginSuccess(res.result);
      } catch (e) {
        console.log(e);
      }
    };
    const onGetphonenumberSimple = async () => {
      try {
        const res = await services_login.postLoginWxMinSimpleAPI("18888888888");
        loginSuccess(res.result);
      } catch (e) {
        common_vendor.index.showToast({
          title: e.data.message,
          icon: "error"
        });
      }
    };
    const loginSuccess = (profile) => {
      const userStore = stores_modules_user.useUserStore();
      userStore.setProfile(profile);
      common_vendor.index.showToast({
        title: "登录成功",
        icon: "success"
      });
      setTimeout(() => {
        common_vendor.index.switchTab({
          url: "/pages/my/my"
        });
      }, 500);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onGetphonenumber),
        b: common_vendor.o(onGetphonenumberSimple)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
