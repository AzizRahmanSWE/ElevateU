import React, { Component } from 'react';

class FitnessDataEntry extends Component {
  constructor() {
    super();
    this.state = {
      weight: '',
      height: '',
      age: '',
      activityLevel: 'sedentary',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
  };

  render() {
    return (
      <div className="fitness-data-entry">
        <h1>Fitness Data Entry</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={this.state.weight}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              name="height"
              value={this.state.height}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Activity Level</label>
            <select
              name="activityLevel"
              value={this.state.activityLevel}
              onChange={this.handleInputChange}
            >
              <option value="sedentary">Sedentary</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Moderately Active</option>
              <option value="veryActive">Very Active</option>
              <option value="superActive">Super Active</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FitnessDataEntry;