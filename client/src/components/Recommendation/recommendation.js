import React, { Component } from 'react';
import fitnessRecommendations from '../data/recommendation';

class FitnessRecommendation extends Component {
  constructor() {
    super();
    this.state = {
    // Store fitness recommendations here
      recommendations: [],
    };
  }

  render() {
    return (
      <div className="fitness-recommendation">
        <h1>Fitness Recommendations</h1>
        <ul>
          {this.state.recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FitnessRecommendation;