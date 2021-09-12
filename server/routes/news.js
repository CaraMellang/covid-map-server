const express = require("express");
const router = express.Router();
const { clientId, clientSecret } = require("../lib/ServiceKey");
const axios = require("axios");

const address = `https://openapi.naver.com/v1/search/news.json`;

const circularReplacer = () => {
  const seen = new WeakSet();

  return (key, value) => {
    // If type of value is an
    // object or value is null
    if (typeof value === "object" && value !== null) {
      // If it has been seen before
      if (seen.has(value)) {
        return;
      }
      // Add current value to the set
      seen.add(value);
    }

    // return the value
    return value;
  };
}; //https://www.geeksforgeeks.org/how-to-print-a-circular-structure-in-a-json-like-format-using-javascript/

router.get("/", (req, res) => {
  axios({
    method: "get",
    url: address,
    params: {
      query: "코로나",
    },
    headers: {
      "X-Naver-Client-Id": clientId,
      "X-Naver-Client-Secret": clientSecret,
    },
  })
    .then((data) => {
      res.send(JSON.stringify(data, circularReplacer()));
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
