const express = require("express");
const app = express();
const test = require("./routes/test");
const cors = require("cors");
const SiDoState = require("./routes/SiDoState");
const InfectedState = require("./routes/InfectedState");
const AllOverflow = require("./routes/AllOverflow");
const news = require("./routes/news");

let corsOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

// app.use("/api",cors(corsOption), test);
app.use("/sidoapi", cors(corsOption), SiDoState);
app.use("/infectedapi", cors(corsOption), InfectedState);
app.use("/alloverflowapi", cors(corsOption), AllOverflow);
app.use("/newsapi", cors(corsOption), news);

const port = 4000 || process.env.PORT; //노드 서버가 사용할 포트
app.listen(port, () => console.log(`Listening on port ${port}`));
