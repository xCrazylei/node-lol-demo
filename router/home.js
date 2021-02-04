const rq = require("request-promise");

module.exports = async function (req, res) {
  /** 接口直接返回了英雄列表，还有版本信息、更新日期等，此处直接返回列表给前端即可 */
  const result = await rq(
    "https://yz.lol.qq.com/v1/zh_cn/search/index.json"
  ).then((res) => JSON.parse(res));
  res.render("home.njk", { list: result.champions });
};
