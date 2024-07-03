const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sam-tecno-bd.7ehypcr.mongodb.net/?retryWrites=true&w=majority&appName=sam-tecno-bd`;

console.log(uri)
console.log(uri)

app.get("/", (req, res) => {
  res.send("Hello SamTecNo World!");
});

app.listen(port, () => {
  console.log(`SAMTECNO listening on port ${port}`);
});
