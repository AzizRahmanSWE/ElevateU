-- CREATE DATABASE elavateu;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS activities CASCADE;
DROP TABLE IF EXISTS daily_logs CASCADE;
DROP TABLE IF EXISTS workout_presets CASCADE;
DROP TABLE IF EXISTS preset_activities CASCADE;


CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(225) UNIQUE NOT NULL,
  password VARCHAR(225) NOT NULL,
  name VARCHAR(225) NOT NULL,
  age INTEGER,
  gender VARCHAR(50),
  height FLOAT,
  weight FLOAT,
  profile_picture VARCHAR(225)
);

CREATE TABLE activities (
  activity_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255),
  targeted_muscle VARCHAR(50),
  calories_burned_per_minute FLOAT
);

CREATE TABLE daily_logs ( 
  log_id SERIAL PRIMARY KEY, 
  user_id INTEGER REFERENCES users(user_id), 
  activity_id INTEGER REFERENCES activities(activity_id), 
  duration FLOAT, 
  date DATE NOT NULL
);

CREATE TABLE notifications (
  notification_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  message TEXT NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE exercise_demos (
  demo_id SERIAL PRIMARY KEY,
  activity_id INTEGER REFERENCES activities(activity_id),
  video_link VARCHAR(255),
  description TEXT
);

CREATE TABLE goals (
  goal_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  description TEXT,
  start_date DATE,
  end_date DATE,
  status VARCHAR(50)
);

CREATE TABLE workout_presets (
  workout_preset_id SERIAL PRIMARY KEY,
  preset_name VARCHAR(255) NOT NULL,
  duration INTEGER,
  difficulty VARCHAR(50),
  description VARCHAR(255)
);

CREATE TABLE preset_activities (
  preset_activity_id SERIAL PRIMARY KEY,
  workout_preset_id INTEGER REFERENCES workout_presets(workout_preset_id),
  activity_id INTEGER REFERENCES activities(activity_id),
  day VARCHAR(10) NOT NULL,
  sets INTEGER,
  reps INTEGER,
  duration FLOAT
);