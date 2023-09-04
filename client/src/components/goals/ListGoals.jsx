import React, { Fragment, useState, useEffect } from "react";
import EditGoal from "./EditGoals";

const ListGoals = () => {
  const [goals, setGoals] = useState([]);

  //detete goals function
  const deleteGoal = async id => {
    try {
      const deleteGoal = await fetch(`http://localhost:5000/goals/${id}`, {
        method: "DELETE"
      });
      // filter has a condition and returns ones that qualify.
      setGoals(goals.filter(goal => goal.goal_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  const getGoals = async () => {
    try {
      const response = await fetch("http://localhost:5000/goals");
      const jsonData = await response.json();
      setGoals(jsonData);
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getGoals()
  }, []);

  return (
    <Fragment>
      {" "} 
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>End Date</th>
            <th>Actions</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {goals.map(goal => (
            <tr key={goals.goal_id}>
              <td>{goal.description}</td>
              <td>{goal.end_date}</td>
              <td>
                <button className="btn">
                  <EditGoal goal={goal} />
                </button>
                <button 
                  className="btn btn-danger" 
                  onClick={() => deleteGoal(goal.goal_id)}
                >
                  Delete
                </button>
              </td>
              <td>{goal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListGoals;