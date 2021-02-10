const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

require("./models");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {useNewUrlParser: true});

// app.use(express.static("./routes/apiRoutes"));
// app.use(express.static("./routes/htmlRoutes"));
app.use(express.static("./routes"));

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});