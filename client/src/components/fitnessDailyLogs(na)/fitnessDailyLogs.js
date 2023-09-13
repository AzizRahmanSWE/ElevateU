import React, { Component } from 'react';

class FitnessDailyLogs extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      activity: '',
      logs: [], // Store fitness logs here
    };
  }

  handleDateChange = (e) => {
    this.setState({ date: e.target.value });
  };

  handleActivityChange = (e) => {
    this.setState({ activity: e.target.value });
  };

  handleSubmit = () => {
    const { date, activity } = this.state;
    if (date && activity) {
      const newLog = {
        date,
        activity,
      };
      this.setState((prevState) => ({
        logs: [...prevState.logs, newLog],
        date: '',
        activity: '',
      }));
    }
  };

  render() {
    return (
      <div className="fitness-daily-logs">
        <h1>Fitness Daily Logs</h1>
        <div>
          <input
            type="date"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
          <input
            type="text"
            placeholder="Enter your activity"
            value={this.state.activity}
            onChange={this.handleActivityChange}
          />
          <button onClick={this.handleSubmit}>Log Activity</button>
        </div>
        <ul>
          {this.state.logs.map((log, index) => (
            <li key={index}>
              {log.date}: {log.activity}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FitnessDailyLogs;