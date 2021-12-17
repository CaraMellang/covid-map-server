const express = require("express");
const router = express.Router();
const request = require("request");
const convert = require("xml-js");
// const { serviceKeyEncoding} = require("../lib/ServiceKey");

const now = new Date();
const yearNow = String(now.getFullYear()).padStart(2, "0");
const monthNow = String(now.getMonth() + 1).padStart(2, "0");
const dayNow = String(now.getDate()).padStart(2, "0");
const nowTime = yearNow + monthNow + dayNow;
// console.log(nowTime);
const yester = new Date(now.setDate(now.getDate() - 1));
const year = String(yester.getFullYear()).padStart(2, "0");
const month = String(yester.getMonth() + 1).padStart(2, "0");
const day = String(yester.getDate()).padStart(2, "0");
const yestetTime = year + month + day;
// console.log(hour, minute, seconds);

const address = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson?serviceKey=${process.env.SERVICEKEYENCODING}&numOfRows=10&startCreateDt=${yestetTime}&endCreateDt=${nowTime}`;

router.get("/", (req, res) => {
  request(address, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    let obj = body;
    // console.log(obj);
    let xmlToJson = convert.xml2json(obj, { compact: true, spaces: 4 });
    console.log(xmlToJson);
    res.send(xmlToJson);
  });
});

module.exports = router;
