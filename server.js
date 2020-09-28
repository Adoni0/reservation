const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
// mongodb+srv://asoudani:Kobe24MambA$@cluster0.ljdot.mongodb.net/reservationsdb?retryWrites=true&w=majority
// const connection = "mongodb+srv://asoudani:Kobe24MambA$@cluster0/reservationsdb?retryWrites=true&w=majority";
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/reservationsdb", { useUnifiedTopology: true,  useNewUrlParser: true, useFindAndModify: false }
);
// mongoose.connect(
//   process.env.MONGODB_URI ||
//   connection, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
// )
// .then(() => console.log("Database Connected Successfully"))
//   .catch(err => console.log(err));

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Capture All 404 errors
app.use(function (req, res, next) {
  res.status(404).send('Unable to find the requested resource!');
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
