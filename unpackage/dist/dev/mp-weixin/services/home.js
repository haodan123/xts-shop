"use strict";
const utils_http = require("../utils/http.js");
const getHomeBannerAPI = (distributionSite = 1) => {
  return utils_http.http({
    method: "GET",
    url: "/home/banner",
    data: {
      distributionSite
    }
  });
};
const getHomeCategoryAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/home/category/mutli"
  });
};
const getHomeHotAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/home/hot/mutli"
  });
};
const getHomeGoodsGuessLikeAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: "/home/goods/guessLike",
    data
  });
};
exports.getHomeBannerAPI = getHomeBannerAPI;
exports.getHomeCategoryAPI = getHomeCategoryAPI;
exports.getHomeGoodsGuessLikeAPI = getHomeGoodsGuessLikeAPI;
exports.getHomeHotAPI = getHomeHotAPI;
