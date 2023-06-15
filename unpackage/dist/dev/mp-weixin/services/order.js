"use strict";
const utils_http = require("../utils/http.js");
const getMemberOrderByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order/${id}`
  });
};
const getMemberOrderPreAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/member/order/pre"
  });
};
const getMemberOrderPreNowAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: "/member/order/pre/now",
    data
  });
};
const postMemberOrderAPI = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/member/order",
    data
  });
};
const getMemberOrderRepurchaseByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order/repurchase/${id}`
  });
};
const getMemberOrderAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order`,
    data
  });
};
exports.getMemberOrderAPI = getMemberOrderAPI;
exports.getMemberOrderByIdAPI = getMemberOrderByIdAPI;
exports.getMemberOrderPreAPI = getMemberOrderPreAPI;
exports.getMemberOrderPreNowAPI = getMemberOrderPreNowAPI;
exports.getMemberOrderRepurchaseByIdAPI = getMemberOrderRepurchaseByIdAPI;
exports.postMemberOrderAPI = postMemberOrderAPI;
