"use strict";
const utils_http = require("../utils/http.js");
const getGoodsByIdAPI = (id) => {
  return utils_http.http({
    method: "GET",
    url: "/goods",
    data: { id }
  });
};
exports.getGoodsByIdAPI = getGoodsByIdAPI;
