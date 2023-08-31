import React, { Fragment } from 'react';
import '../App.css';


// components
import CreateGoals from './Goals/CreateGoals';
import ListGoals from './Goals/ListGoals';


function Goals() {
  return (
    <Fragment>
      <div className="container">
        <CreateGoals />
        <ListGoals />
      </div>
    </Fragment>
  );
}

export default Goals;
