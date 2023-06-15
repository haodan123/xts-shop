"use strict";
const utils_http = require("../utils/http.js");
const postMemberCartAPI = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/member/cart",
    data
  });
};
const getMemberCartAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/member/cart"
  });
};
const deleteMemberCartAPI = (data) => {
  return utils_http.http({
    method: "DELETE",
    url: "/member/cart",
    data
  });
};
const putMemberCartBySkuIdAPI = (skuId, data) => {
  return utils_http.http({
    method: "PUT",
    url: `/member/cart/${skuId}`,
    data
  });
};
const putMemberCartSelectedAPI = (data) => {
  return utils_http.http({
    method: "PUT",
    url: "/member/cart/selected",
    data
  });
};
exports.deleteMemberCartAPI = deleteMemberCartAPI;
exports.getMemberCartAPI = getMemberCartAPI;
exports.postMemberCartAPI = postMemberCartAPI;
exports.putMemberCartBySkuIdAPI = putMemberCartBySkuIdAPI;
exports.putMemberCartSelectedAPI = putMemberCartSelectedAPI;
