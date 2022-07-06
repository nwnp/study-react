const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const config = require("../config/key");
const app = express();
const PORT = process.env.PORT;
const userRouter = require("./routes/users.routes");
mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log("database connection success");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors("*"));

app.use("/api", [userRouter]);
app.get("/test", (req, res, next) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  console.log(PORT, "The server is on");
});
