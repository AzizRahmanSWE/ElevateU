const express = require("express");
const app = express();
const cors = require("cors");
// can rank querries with postgres.
const pool = require("./database/db");


// middleware
app.use(cors());
app.use(express.json()); // gives access to req.body (request.body) to get json data.

// ROUTES


// create a workoutPreset


// create a goal
app.post("/goals", async (req, res) => {
  try {
    console.log(req.body);
    const {description} = req.body; // what is coming from client side.

    const newGoal = await pool.query(
      "INSERT INTO goals (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newGoal.rows[0])
  } catch (err) {
    console.error(err.message)
  }
});

// get all workoutPreset
app.get("/workout_preset", async (req, res) => {
  try {
    const allPresets = await pool.query(
      "SELECT * FROM workout_presets"
    )
    res.json(allPresets.rows)
  } catch (err) {
    console.error(err.message)
  }
});


// get all workout presets
app.get("/workout_preset", async (req, res) => {
  try {
    const { name } = req.params;
    const workoutPreset = await pool.query(
      "SELECT preset_name FROM workout_presets;", [name]
    );
    
    // check if preset exists.
    if (workoutPreset.rows.length === 0) {
      return res.status(404).json("Workout preset not found!")
    }
    res.json(workoutPreset.rows[0]);
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error");
  }
});

// get all goals
app.get("/goals", async (req, res) => {
  try {
    const allGoals = await pool.query(
      "SELECT * FROM goals"
    );
    // responding json data.
    res.json(allGoals.rows)
  } catch (err) {
    console.error(err.message)
  }
});


// get a single workoutPreset (e.g., basketball, Strength Training, Fat Loss)
app.get("/workout_preset/:workout_preset_id", async (req, res) => {
  try {
    const { workout_preset_id } = req.params;

    const workoutPreset = await pool.query(
      `SELECT 
        a.activity_id, 
        a.name AS activity_name, 
        a.description AS activity_description, 
        a.targeted_muscle, 
        d.name AS day_name, 
        wp.preset_name AS workout_preset_name 
      FROM 
        preset_activities AS pa 
      JOIN activities AS a ON pa.activity_id = a.activity_id 
      JOIN preset_days AS pd ON pa.preset_day_id = pd.preset_day_id 
      JOIN days AS d ON pd.day_id = d.day_id 
      JOIN workout_presets AS wp ON pa.workout_preset_id = wp.workout_preset_id 
      WHERE 
        pa.workout_preset_id = $1 
      ORDER BY 
        pa.display_order ASC, 
        a.activity_id ASC;`,
      [workout_preset_id]
    );
    
    // check if preset exists.
    if (workoutPreset.rows.length === 0) {
      return res.status(404).json("Workout preset not found!")
    }
    res.json(workoutPreset.rows);
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error");
  }
});

// get a goal
app.get("/goals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const goal = await pool.query(
      "SELECT * FROM goals WHERE goal_id = $1", [id]
    );
    res.json(goal.rows[0])
  } catch (err) {
    console.error(err.message)
  }
});

// update a workoutPreset


// update a goal
app.put("/goals/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    console.log(req.params)

    const updateGoal = await pool.query(
      "UPDATE goals SET description = $1 WHERE goal_id = $2", [description, id]
    );
    res.json("goal was updated!")
  } catch (err) {
    console.error(err.message)
  }
});

// delete a workoutPreset


// delete a goal
app.delete("/goals/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteGoal = await pool.query(
      "DELETE FROM goals WHERE goal_id = $1", [id]
    );
    res.json("goal was deleted!")
  } catch (err) {
    console.error(err.message)
  }
});


// Port that server listens to
app.listen(5000, () => {
  console.log("server has started on a port 5000");
});