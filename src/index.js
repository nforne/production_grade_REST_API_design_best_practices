const express = require('express');
const app = express();

// load .env data into process.env
require("dotenv").config();

const PORT = process.env.PORT || 3003;

// for testing purpose
app.get('/', (req, res) => {
  res.send("<h2>It's working!</h2>")
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`)
});
