"use strict";
const common_vendor = require("../../common/vendor.js");
const services_address = require("../../services/address.js");
const stores_modules_address = require("../../stores/modules/address.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/test.js");
require("../../stores/modules/user.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "addressForm",
  props: {
    id: {
      type: String
    }
  },
  setup(__props) {
    const {
      id
    } = __props;
    common_vendor.index.setNavigationBarTitle({
      title: id ? "修改地址" : "新建地址"
    });
    const formRef = common_vendor.ref();
    const rules = {
      receiver: {
        rules: [{
          required: true,
          errorMessage: "请输入收货人姓名"
        }]
      },
      contact: {
        rules: [
          {
            required: true,
            errorMessage: "请输入联系方式"
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            errorMessage: "手机号格式不正确"
          }
        ]
      },
      fullLocation: {
        rules: [{
          required: true,
          errorMessage: "请选择所在地区"
        }]
      },
      address: {
        rules: [{
          required: true,
          errorMessage: "请选择详细地址"
        }]
      }
    };
    const form = common_vendor.ref({
      receiver: "",
      // 收货人
      contact: "",
      // 联系方式
      fullLocation: "",
      // 省市区(前端展示)
      provinceCode: "",
      // 省份编码(后端参数)
      cityCode: "",
      // 城市编码(后端参数)
      countyCode: "",
      // 区/县编码(后端参数)
      address: "",
      // 详细地址
      isDefault: 0
      // 默认地址，1为是，0为否
    });
    const getMemberAddressByIdData = async () => {
      if (id) {
        console.log(id);
        const res = await services_address.getMemberAddressByIdAPI(id);
        Object.assign(form.value, res.result);
      }
    };
    const onRegionChange = (ev) => {
      form.value.fullLocation = ev.detail.value.join(" ");
      const [provinceCode, cityCode, countyCode] = ev.detail.code;
      Object.assign(form.value, {
        provinceCode,
        cityCode,
        countyCode
      });
    };
    const onSwitchChange = (ev) => {
      form.value.isDefault = ev.detail.value ? 1 : 0;
    };
    common_vendor.onLoad(() => {
      getMemberAddressByIdData();
    });
    const addressStore = stores_modules_address.useAddressStore();
    const onSubmit = async () => {
      var _a, _b;
      try {
        await ((_b = (_a = formRef.value) == null ? void 0 : _a.validate) == null ? void 0 : _b.call(_a));
        if (id) {
          await services_address.putMemberAddressByIdAPI(id, form.value);
        } else {
          await services_address.postMemberAddressAPI(form.value);
        }
        if (form.value.isDefault == 1) {
          addressStore.changeSelectedAddress(form.value);
        }
        common_vendor.index.showToast({
          icon: "success",
          title: id ? "修改成功" : "添加成功"
        });
        setTimeout(() => {
          common_vendor.index.navigateBack();
        }, 400);
      } catch (e) {
        console.log(e);
        common_vendor.index.showToast({
          icon: "error",
          title: "请填写完整信息"
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: form.value.receiver,
        b: common_vendor.o(($event) => form.value.receiver = $event.detail.value),
        c: common_vendor.p({
          name: "receiver"
        }),
        d: form.value.contact,
        e: common_vendor.o(($event) => form.value.contact = $event.detail.value),
        f: common_vendor.p({
          name: "contact"
        }),
        g: form.value.fullLocation
      }, form.value.fullLocation ? {
        h: common_vendor.t(form.value.fullLocation)
      } : {}, {
        i: common_vendor.o(onRegionChange),
        j: form.value.fullLocation.split(" "),
        k: common_vendor.p({
          name: "fullLocation"
        }),
        l: form.value.address,
        m: common_vendor.o(($event) => form.value.address = $event.detail.value),
        n: common_vendor.p({
          name: "address"
        }),
        o: common_vendor.o(onSwitchChange),
        p: form.value.isDefault === 1,
        q: common_vendor.sr(formRef, "098dd52c-0", {
          "k": "formRef"
        }),
        r: common_vendor.p({
          model: form.value,
          rules
        }),
        s: common_vendor.o(onSubmit)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pagesMember/addressForm/addressForm.vue"]]);
wx.createPage(MiniProgramPage);
