"use strict";
const utils_http = require("../utils/http.js");
const getCategoryTopAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/category/top"
  });
};
exports.getCategoryTopAPI = getCategoryTopAPI;
