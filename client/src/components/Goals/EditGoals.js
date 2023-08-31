import React, { Fragment, useState } from "react";

const EditGoal = ({ goal }) => {
  // console.log(goal);
  const [description, setDescription] = useState(goal.description)

  // Edit description function
  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/goals/${goal.goal_id}`, { 
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      window.location = "/";
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <button 
        type="button" 
        class="btn btn-warning" 
        data-toggle="modal" 
        data-target={`#id${goal.goal_id}`}
      >
        Edit
      </button>

      <div 
        class="modal" 
        id={`id${goal.goal_id}`} 
        onClick={() => setDescription(goal.description)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
      

            <div class="modal-header">
              <h4 class="modal-title">Edit Goal</h4>
              <button 
                type="button" 
                class="close" 
                data-dismiss="modal"
                onClick={() => setDescription(goal.description)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input 
                className="form-control" 
                type="text" 
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
      
            <div class="modal-footer">
              <button 
                type="button" 
                class="btn btn-warning" 
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button 
                type="button" 
                class="btn btn-danger" 
                data-dismiss="modal"
                onClick={() => setDescription(goal.description)}
              >
                Close
              </button>
            </div>
      
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditGoal;