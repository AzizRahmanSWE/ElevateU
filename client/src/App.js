import React, { Fragment } from 'react';
import './App.css';


// components
import Goals from './components/Goals';



function App() {
  return (
    <div className='main-container'>
      <Fragment>
        <div className="goals-container">
          <Goals />
        </div>
      </Fragment>
      
      <Fragment>
        <div className="other-container">
          <h1>Other Stuff</h1>
        </div>
      </Fragment>
      
      <Fragment>
        <div className="more-other-container">
          <h1>Hopefully More Stuff</h1>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
