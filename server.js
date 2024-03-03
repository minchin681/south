const express = require('express')
const app = express()
const port = 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const path = require('path')


app.use(express.static("./client/build"))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})