const express = require('express')
const app = express()
const port = 80;
const bodyParser = require('body-parser');
var cors = require('cors')
app.use(bodyParser.json());
app.use(cors());


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})