const express = require("express");
const router = express.Router();
const request = require("request");
const convert = require("xml-js");
const { serviceKeyEncoding, serviceKeyDecoding } = require("../lib/ServiceKey");

const address = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${serviceKeyEncoding}&numOfRows=100`;

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
