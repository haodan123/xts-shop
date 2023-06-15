"use strict";
const common_vendor = require("../../common/vendor.js");
const services_user = require("../../services/user.js");
require("../../stores/index.js");
const stores_modules_user = require("../../stores/modules/user.js");
require("../../utils/http.js");
require("../../stores/modules/test.js");
const _sfc_main = {
  __name: "profile",
  setup(__props) {
    const {
      safeAreaInsets
    } = common_vendor.index.getSystemInfoSync();
    const profile = common_vendor.ref();
    const getUserProfile = async () => {
      const res = await services_user.getMemberProfileAPI();
      profile.value = res.result;
    };
    common_vendor.onLoad(() => {
      getUserProfile();
    });
    const userStore = stores_modules_user.useUserStore();
    const onGenderChange = (e) => {
      profile.value.gender = e.detail.value;
    };
    const onBirthdayChange = (ev) => {
      profile.value.birthday = ev.detail.value;
    };
    let fullLocationCode = ["", "", ""];
    const onFullLocationChange = (ev) => {
      profile.value.fullLocation = ev.detail.value.join(" ");
      fullLocationCode = ev.detail.code;
    };
    const onAvatarChange = async () => {
      common_vendor.index.chooseMedia({
        // 文件个数
        count: 1,
        // 文件类型
        mediaType: ["image"],
        success: (res) => {
          const {
            tempFilePath
          } = res.tempFiles[0];
          common_vendor.index.uploadFile({
            url: "/member/profile/avatar",
            name: "file",
            // 后端数据字段名  
            filePath: tempFilePath,
            // 新头像  
            success: (res2) => {
              if (res2.statusCode === 200) {
                const {
                  avatar
                } = JSON.parse(res2.data).result;
                profile.value.avatar = avatar;
                userStore.profile.avatar = avatar;
                common_vendor.index.showToast({
                  icon: "success",
                  title: "更新成功"
                });
              } else {
                common_vendor.index.showToast({
                  icon: "error",
                  title: "出现错误"
                });
              }
            }
          });
        }
      });
    };
    const onSubmit = async () => {
      const {
        nickname,
        gender,
        birthday,
        profession
      } = profile.value;
      const res = await services_user.putMemberProfileAPI({
        nickname,
        gender,
        birthday,
        profession,
        provinceCode: fullLocationCode[0],
        cityCode: fullLocationCode[1],
        countyCode: fullLocationCode[2]
      });
      userStore.profile.nickname = res.result.nickname;
      common_vendor.index.showToast({
        icon: "success",
        title: "保存成功"
      });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 400);
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      return common_vendor.e({
        a: profile.value
      }, profile.value ? common_vendor.e({
        b: common_vendor.unref(safeAreaInsets).top + "px",
        c: profile.value
      }, profile.value ? {
        d: profile.value.avatar,
        e: common_vendor.o(onAvatarChange)
      } : {}, {
        f: common_vendor.t((_a = profile.value) == null ? void 0 : _a.account),
        g: profile.value.nickname,
        h: common_vendor.o(($event) => profile.value.nickname = $event.detail.value),
        i: ((_b = profile.value) == null ? void 0 : _b.gender) === "男",
        j: ((_c = profile.value) == null ? void 0 : _c.gender) === "女",
        k: common_vendor.o(onGenderChange),
        l: (_d = profile.value) == null ? void 0 : _d.birthday
      }, ((_e = profile.value) == null ? void 0 : _e.birthday) ? {
        m: common_vendor.t((_f = profile.value) == null ? void 0 : _f.birthday)
      } : {}, {
        n: common_vendor.o(onBirthdayChange),
        o: (_g = profile.value) == null ? void 0 : _g.birthday,
        p: /* @__PURE__ */ new Date(),
        q: (_h = profile.value) == null ? void 0 : _h.fullLocation
      }, ((_i = profile.value) == null ? void 0 : _i.fullLocation) ? {
        r: common_vendor.t((_j = profile.value) == null ? void 0 : _j.fullLocation)
      } : {}, {
        s: common_vendor.o(onFullLocationChange),
        t: (_l = (_k = profile.value) == null ? void 0 : _k.fullLocation) == null ? void 0 : _l.split(" "),
        v: profile.value.profession,
        w: common_vendor.o(($event) => profile.value.profession = $event.detail.value),
        x: common_vendor.o(onSubmit)
      }) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-98534f35"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pagesMember/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
