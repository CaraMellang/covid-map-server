const express = require("express");
const app = express();
const test = require("./routes/test");
const cors = require("cors");
const SiDoState = require("./routes/SiDoState");
const InfectedState = require("./routes/InfectedState");

let corsOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// app.use("/api",cors(corsOption), test);
app.use("/sidoapi", cors(corsOption), SiDoState);
app.use("/infectedapi", cors(corsOption), InfectedState);

const port = 4000; //노드 서버가 사용할 포트
app.listen(port, () => console.log(`Listening on port ${port}`));
