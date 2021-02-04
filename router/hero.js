const rq = require("request-promise");

module.exports = async function (req, res) {
  const hero = req.params.hero;
  /** 该接口传入英雄名，注意：这个英雄名是通过英雄列表获取的字段为'sign',并不是name */
  /** 接口会将该英雄所有信息全部返回，此demo只取英雄故事，所以其他功能自行扩展 */
  const result = await rq(
    `https://yz.lol.qq.com/v1/zh_cn/champions/${hero}/index.json`
  ).then((res) => JSON.parse(res));

  const champion = result.champion;
  res.render("hero.njk", {
    info: {
      name: champion.name,
      nickname: champion.title,
      img: champion.image.uri,
      fullDesc: champion.biography.full,
      gameUri: champion["game-info-url"],
    },
  });
};
