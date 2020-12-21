const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.port || 3000

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// const db = require(".models");

require("./routes/api-routes");
require("./routes/html-routes");

app.listen(PORT, () => {
    console.log(`App runnng on port ${PORT}`)
});
