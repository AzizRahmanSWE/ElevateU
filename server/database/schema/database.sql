-- CREATE DATABASE elevateu;

DROP TABLE IF EXISTS preset_activities CASCADE;
DROP TABLE IF EXISTS preset_days CASCADE;
DROP TABLE IF EXISTS days CASCADE;
DROP TABLE IF EXISTS workout_presets CASCADE;
DROP TABLE IF EXISTS exercise_demos CASCADE;
DROP TABLE IF EXISTS notifications CASCADE;
DROP TABLE IF EXISTS daily_logs CASCADE;
DROP TABLE IF EXISTS activities CASCADE;
-- DROP TABLE IF EXISTS goals CASCADE;
-- DROP TABLE IF EXISTS users CASCADE;


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
  description TEXT,
  targeted_muscle VARCHAR(50)
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

--workout_presets Table: This table holds the different workout presets like Basketball, Strength Training, Fat Loss, etc.--
CREATE TABLE workout_presets (
  workout_preset_id SERIAL PRIMARY KEY,
  preset_name VARCHAR(255) NOT NULL,
  description TEXT
);

--days Table: This table represents each day of the workout.--
CREATE TABLE days (
  day_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(225)
);

--preset_days Table: This table links the workout presets to specific days. This way, each preset can have a customized set of days.-
CREATE TABLE preset_days (
  preset_day_id SERIAL PRIMARY KEY,
  workout_preset_id INTEGER REFERENCES workout_presets(workout_preset_id),
  day_id INTEGER REFERENCES days(day_id)
);

CREATE TABLE preset_activities (
  preset_activity_id SERIAL PRIMARY KEY,
  workout_preset_id INTEGER REFERENCES workout_presets(workout_preset_id),
  preset_day_id INTEGER REFERENCES preset_days(preset_day_id),
  activity_id INTEGER REFERENCES activities(activity_id),
  display_order INTEGER NOT NULL
);