const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client/build")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
