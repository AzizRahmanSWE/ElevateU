const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database/db")


// middleware
app.use(cors())
app.use(express.json) // gives access to req.body (request.body) to get json data.

// ROUTES

// goals routes

// create a goal
app.post("/goals")


// get all goals

// get a goal

// update a goal

// delete a goal




// Port that server listens to
app.listen(5000, () => {
  console.log("server has started on a port  5000")
});