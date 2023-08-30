CREATE DATABASE elavateu;

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

CREATE TABLE goals (
  goal_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  description TEXT,
  start_date DATE,
  end_date DATE,
  status VARCHAR(50)
);