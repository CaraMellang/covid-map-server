const express = require("express");
const router = express.Router();
const request = require("request");
const { NaverClienId, NaverClientSecret } = require("../lib/ServiceKey");

const address = `https://openapi.naver.com/v1/search/news.json?query=fff`;
const oprions = {
  headers: {
    "X-Naver-Client-Id": NaverClienId,
    "X-Naver-Client-Secret": NaverClientSecret,
  },
};

router.get("/", (req, res) => {
  // req.header(NaverClienId, NaverClientSecret);

  request(address, oprions, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    res.send(body);
    console.log("헤더완료" + body);
  });
});

module.exports = router;
