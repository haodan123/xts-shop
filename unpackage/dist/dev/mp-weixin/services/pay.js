"use strict";
const utils_http = require("../utils/http.js");
const getPayMockAPI = (data) => {
  return utils_http.http({
    method: "GET",
    url: "/pay/mock",
    data
  });
};
const getMemberOrderConsignmentByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order/consignment/${id}`
  });
};
const putMemberOrderReceiptByIdAPI = (id) => {
  return utils_http.http({
    method: "PUT",
    url: `/member/order/${id}/receipt`
  });
};
const getMemberOrderLogisticsByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: `/member/order/${id}/logistics`
  });
};
const deleteMemberOrderAPI = (data) => {
  return utils_http.http({
    method: "DELETE",
    url: `/member/order`,
    data
  });
};
const getMemberOrderCancelByIdAPI = (id, data) => {
  return utils_http.http({
    method: "PUT",
    url: `/member/order/${id}/cancel`,
    data
  });
};
exports.deleteMemberOrderAPI = deleteMemberOrderAPI;
exports.getMemberOrderCancelByIdAPI = getMemberOrderCancelByIdAPI;
exports.getMemberOrderConsignmentByIdAPI = getMemberOrderConsignmentByIdAPI;
exports.getMemberOrderLogisticsByIdAPI = getMemberOrderLogisticsByIdAPI;
exports.getPayMockAPI = getPayMockAPI;
exports.putMemberOrderReceiptByIdAPI = putMemberOrderReceiptByIdAPI;
