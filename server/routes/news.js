const express = require("express");
const router = express.Router();
const request = require("request");
const convert = require("xml-js");
const { Authorization } = require("../lib/ServiceKey");
const axios = require("axios");

const address = `https://openapi.naver.com/v1/search/news.json`;
const address2 = `https://dapi.kakao.com/v2/search/web`;

const circularReplacer = () => {
  const seen = new WeakSet();

  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }

      seen.add(value);
    }
    return value;
  };
}; 

router.get("/", (req, res) => {
  axios({
    method: "get",
    url: address2,
    params: {
      query: "국내코로나",
    },
    headers: {
      Authorization: Authorization,
    },
  })
    .then((data) => {
      res.send(JSON.stringify(data, circularReplacer()));
    })
    .catch((error) => {
      console.log(error);
    });

  // request(address, (error, response, body) => {
  //   if (error) {
  //     console.log(error);
  //   }
  //   let obj = body;
  //   // console.log(obj);
  //   let xmlToJson = convert.xml2json(obj, { compact: true, spaces: 4 });
  //   console.log(xmlToJson);
  //   res.send(xmlToJson);
  // });
});

module.exports = router;
