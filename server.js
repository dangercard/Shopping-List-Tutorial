// A quick backend for our shopping list application.

// Include necessary libraries:
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

// Server variable.
const app = express();

// BodyParser Middleware.
app.use(bodyParser.json());

// Database variable
const db = require("./config/keys").mongoURI;

// Database connection/
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("DB Connected")) // Database successfully connected.
  .catch((err) => console.error(err));

app.use('/api/items', items);

// Port variable
const port = process.env.PORT || 5000;

// Listen on specified port.
app.listen(port, () => console.log(`Server started on port ${port}`));
