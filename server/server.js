const express = require("express");
const app = express();
const test = require("./routes/test");

app.use("/api", test);

const port = 4000; //노드 서버가 사용할 포트
app.listen(port, () => console.log(`Listening on port ${port}`));
