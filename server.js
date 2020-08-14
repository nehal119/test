const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require("mongoose");
const config = require("config");
const app = express();
var cors = require('cors');
app.use(cors())
app.use(morgan('combined'));
const User = require('./models/users');
const BigData = require('./models/bigdata');

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = config.get("mongoURI");
// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// The "catch all" handler: for any request that doesn't
// match one above, send back React's index.html file.
// Use Routes

// app.use("*", require("./routes/users.js"));

app.get('/api/test', (req, res) => {
  res.json({
    message: 'hello world',
  });
});

app.get('/api/userdata', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

app.post('/api/userdata', (req, res) => {
  const NewUser = new User({
    name: req.body.fullname,
    city: req.body.cityname,
    email: req.body.email,
    password: req.body.password
  });
  NewUser.save().then(item => {
    res.json(item)}
  );
});

app.post('/api/totaldata', (req, res) => {
  BigData.find()
    .limit(+req.body.itr * 100)
    .then(items => {
      res.json(items)});
});

// app.use(express.static(path.join(__dirname, '/client/build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });
// Serve static assets if in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port);

console.log(`server listening on ${port}`); // eslint-disable-line no-console
