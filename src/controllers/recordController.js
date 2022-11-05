const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  const { params: { workoutId },} = req;
  if (!workoutId) {
    res.status(400)
       .send({
          status: "FAILED",
          data: { error: "Parameter ':workoutId' can not be empty" },
        });
  }
  try {
    const allRecords = recordService.getRecordForWorkout(workoutId);
    res.status(200).send({ status: "OK", data: allRecords });
  } catch (error) {
    res.status(error ? error.status : 500)
       .send({ status: "FAILED", data: { error: error ? error.message : error} });
  }
};

module.exports = {
  getRecordForWorkout,
}