"use strict";
const common_vendor = require("../../common/vendor.js");
const services_hot = require("../../services/hot.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/test.js");
require("../../stores/modules/user.js");
if (!Array) {
  const _component_veiw = common_vendor.resolveComponent("veiw");
  _component_veiw();
}
if (!Math) {
  PageSkeleton();
}
const PageSkeleton = () => "./components/PageSkeleton.js";
const _sfc_main = {
  __name: "hot",
  props: {
    type: String
  },
  setup(__props) {
    const {
      type
    } = __props;
    const hotMap = [
      {
        type: "1",
        title: "特惠推荐",
        url: "/hot/preference"
      },
      {
        type: "2",
        title: "爆款推荐",
        url: "/hot/inVogue"
      },
      {
        type: "3",
        title: "一站买全",
        url: "/hot/oneStop"
      },
      {
        type: "4",
        title: "新鲜好物",
        url: "/hot/new"
      }
    ];
    console.log(type);
    const currHot = hotMap.find((item) => item.type === type);
    common_vendor.index.setNavigationBarTitle({
      title: currHot.title
    });
    const activeIndex = common_vendor.ref(0);
    const bannerPicture = common_vendor.ref("");
    const subTypes = common_vendor.ref([]);
    const isLoading = common_vendor.ref(false);
    const getHotRecommendData = async () => {
      isLoading.value = true;
      const res = await services_hot.getHotRecommendAPI(currHot.url, {
        // 技巧：环境变量，开发环境，修改初始页面方便测试分页结束
        page: 30,
        pageSize: 10
      });
      console.log(res);
      bannerPicture.value = res.result.bannerPicture;
      subTypes.value = res.result.subTypes;
      isLoading.value = false;
    };
    common_vendor.onLoad(() => {
      getHotRecommendData();
    });
    common_vendor.onReachBottom(async () => {
      const currsubTypes = subTypes.value[activeIndex.value];
      console.log("新增前的数据", currsubTypes);
      if (currsubTypes.goodsItems.page > currsubTypes.goodsItems.pages) {
        currsubTypes.finish = true;
        return common_vendor.index.showToast({
          icon: "none",
          title: "没有更多数据了~"
        });
      } else {
        currsubTypes.goodsItems.page++;
      }
      const res = await services_hot.getHotRecommendAPI(currHot.url, {
        // 技巧：环境变量，开发环境，修改初始页面方便测试分页结束
        page: currsubTypes.goodsItems.page,
        pageSize: currsubTypes.goodsItems.pageSize,
        subType: currsubTypes.id
      });
      const newsubTypes = res.result.subTypes[activeIndex.value];
      currsubTypes.goodsItems.items.push(...newsubTypes.goodsItems.items);
      console.log("新增后的列表", subTypes.value[activeIndex.value]);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isLoading.value
      }, isLoading.value ? {} : {
        b: bannerPicture.value,
        c: common_vendor.f(subTypes.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.o(($event) => activeIndex.value = index, item.id),
            c: index === activeIndex.value ? 1 : "",
            d: item.id
          };
        }),
        d: common_vendor.f(subTypes.value, (item, index, i0) => {
          return {
            a: common_vendor.f(item.goodsItems.items, (goods, k1, i1) => {
              return {
                a: goods.picture,
                b: common_vendor.t(goods.name),
                c: common_vendor.t(goods.price),
                d: `/pages/goods/goods?id=${goods.id}`,
                e: goods.id
              };
            }),
            b: common_vendor.t(item.finish ? "没有更多数据" : "正在加载..."),
            c: index === activeIndex.value,
            d: item.id
          };
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4aaa739e"], ["__file", "/Users/zhiyonghuang/Desktop/前端练习/练习小程序/xtx-shop/pages/hot/hot.vue"]]);
wx.createPage(MiniProgramPage);
