import React, { Fragment } from 'react';
import CreateGoals from '../components/goals/CreateGoals'
import ListGoals from '../components/goals/ListGoals'

const Goals = () => {
  return (
    <Fragment>
      <CreateGoals />
      <ListGoals />
    </Fragment>
  )
};

export default Goals