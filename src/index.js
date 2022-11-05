const express = require('express');
const app = express();

// load .env data into process.env
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const v1WorkoutRouter = require('./v1/routes/workoutRoutes')

app.use('/api/v1/workouts', v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`)
});
