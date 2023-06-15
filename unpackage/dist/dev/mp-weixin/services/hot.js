"use strict";
const utils_http = require("../utils/http.js");
const getHotRecommendAPI = (url, data) => {
  return utils_http.http({
    method: "GET",
    url,
    data
  });
};
exports.getHotRecommendAPI = getHotRecommendAPI;
