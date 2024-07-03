const express = require('express')
const cors = require("cors");
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello SamTecNo World!')
})

app.listen(port, () => {
  console.log(`SAMTECNO listening on port ${port}`)
})