"use strict";
const common_vendor = require("../../common/vendor.js");
const services_goods = require("../../services/goods.js");
const services_cart = require("../../services/cart.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/test.js");
require("../../stores/modules/user.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (vkDataGoodsSkuPopupVue + PagesSkeleton + AddressPanel + ServicePanel + _easycom_uni_popup)();
}
const AddressPanel = () => "./components/AddressPanel.js";
const ServicePanel = () => "./components/ServicePanel.js";
const PagesSkeleton = () => "./components/PagesSkeleton.js";
const vkDataGoodsSkuPopupVue = () => "../../uni_modules/vk-data-goods-sku-popup/components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js";
const _sfc_main = {
  __name: "goods",
  props: {
    id: String
  },
  setup(__props) {
    const {
      id
    } = __props;
    const currentIndex = common_vendor.ref(0);
    const onChang = (e) => {
      currentIndex.value = e.detail.current;
    };
    const preImage = (img) => {
      common_vendor.index.previewImage({
        current: img,
        urls: goods.value.mainPictures
      });
    };
    const popup = common_vendor.ref(null);
    const popupName = common_vendor.ref("");
    const openPopup = (name) => {
      popupName.value = name;
      common_vendor.nextTick$1(() => {
        popup.value.open();
      });
    };
    const isShowSku = common_vendor.ref(false);
    const skuPopupRef = common_vendor.ref();
    const localdata = common_vendor.ref({});
    const skuMode = {
      Both: 1,
      //购物车和购买都显示
      Cart: 2,
      //只显示购物车
      Buy: 3
      //只显示购买
    };
    const mode = common_vendor.ref(1);
    const openSkuPopup = (val) => {
      isShowSku.value = true;
      mode.value = val;
    };
    const goods = common_vendor.ref([]);
    const getGoodsByIdData = async () => {
      const res = await services_goods.getGoodsByIdAPI(id);
      goods.value = res.result;
      localdata.value = {
        _id: res.result.id,
        name: res.result.name,
        goods_thumb: res.result.mainPictures[0],
        spec_list: res.result.specs.map((v) => ({
          name: v.name,
          list: v.values
        })),
        sku_list: res.result.skus.map((v) => ({
          _id: v.id,
          goods_id: res.result.id,
          goods_name: res.result.name,
          image: v.picture,
          price: v.price * 100,
          // 注意：需要乘以 100
          stock: v.inventory,
          sku_name_arr: v.specs.map((vv) => vv.valueName)
        }))
      };
      console.log(localdata.value);
    };
    const selectArrText = common_vendor.computed(() => {
      var _a, _b;
      console.log(skuPopupRef.value);
      return ((_b = (_a = skuPopupRef.value) == null ? void 0 : _a.selectArr) == null ? void 0 : _b.join(" ").trim()) || "请选择商品规格";
    });
    const onAddCart = async (e) => {
      await services_cart.postMemberCartAPI({
        skuId: e._id,
        //商品规格的id
        count: e.buy_num
        //购买的数量
      });
      common_vendor.index.showToast({
        title: "添加成功"
      });
      isShowSku.value = false;
    };
    const onBuyNow = async (e) => {
      console.log(e);
      common_vendor.index.navigateTo({
        url: `/pagesOrder/create/create?skuId=${e._id}&count=${e.buy_num}`
      });
    };
    const isLoading = common_vendor.ref(false);
    common_vendor.onLoad(() => {
      isLoading.value = true;
      getGoodsByIdData();
      isLoading.value = false;
    });
    const {
      safeAreaInsets
    } = common_vendor.index.getSystemInfoSync();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return common_vendor.e({
        a: common_vendor.sr(skuPopupRef, "7e2880f6-0", {
          "k": "skuPopupRef"
        }),
        b: common_vendor.o(onBuyNow),
        c: common_vendor.o(onAddCart),
        d: common_vendor.o(($event) => isShowSku.value = $event),
        e: common_vendor.p({
          ["add-cart-background-color"]: "#FFA868",
          ["buy-now-background-color"]: "#27BA9B",
          mode: mode.value,
          localdata: localdata.value,
          ["actived-style"]: {
            color: "#27BA9B",
            borderColor: "#27BA9B",
            backgroundColor: "#E9F8F5"
          },
          modelValue: isShowSku.value
        }),
        f: isLoading.value
      }, isLoading.value ? {} : {
        g: common_vendor.f(goods.value.mainPictures, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => preImage(item), item),
            b: item,
            c: item
          };
        }),
        h: common_vendor.o(onChang),
        i: common_vendor.t(currentIndex.value + 1),
        j: common_vendor.t((_a = goods.value) == null ? void 0 : _a.mainPictures.length),
        k: common_vendor.t((_b = goods.value) == null ? void 0 : _b.price),
        l: common_vendor.t((_c = goods.value) == null ? void 0 : _c.name),
        m: common_vendor.t((_d = goods.value) == null ? void 0 : _d.desc),
        n: common_vendor.t(common_vendor.unref(selectArrText)),
        o: common_vendor.o(($event) => openSkuPopup(skuMode.Both)),
        p: common_vendor.o(($event) => openPopup("address")),
        q: common_vendor.o(($event) => openPopup("service")),
        r: common_vendor.f((_e = goods.value) == null ? void 0 : _e.details.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.name
          };
        }),
        s: common_vendor.f((_f = goods.value) == null ? void 0 : _f.details.pictures, (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        t: common_vendor.f(goods.value.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        })
      }, {
        v: common_vendor.o(($event) => openSkuPopup(skuMode.Cart)),
        w: common_vendor.o(($event) => openSkuPopup(skuMode.Buy)),
        x: common_vendor.unref(safeAreaInsets).bottom + "px",
        y: popupName.value == "address"
      }, popupName.value == "address" ? {
        z: common_vendor.o(($event) => popup.value.close())
      } : {}, {
        A: popupName.value == "service"
      }, popupName.value == "service" ? {
        B: common_vendor.o(($event) => popup.value.close())
      } : {}, {
        C: common_vendor.sr(popup, "7e2880f6-2", {
          "k": "popup"
        }),
        D: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7e2880f6"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
