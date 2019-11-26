const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
var cors = require("cors");
const employeeRoutes = require('./controllers/emplloyeev2.controller');
const employee = require("./routes/employee.route");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/employee", employee);
app.use('/employeev2',employeeRoutes);
let port = 3001;



mongoose
  .connect(
    "mongodb+srv://GeveoAust:geveo1234@freecluster-toxk5.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.listen(port, () => {
  console.log("server start " + port);
});
