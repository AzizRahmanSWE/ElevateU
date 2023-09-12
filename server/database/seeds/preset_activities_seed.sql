INSERT INTO preset_activities (
  workout_preset_id,
  activity_id,
  day,
  sets,
  reps,
  duration
)
-- Basketball
VALUES (
  1,
  1,
  'Monday',
  1,
  1,
  20
),

(
  1,
  2,
  'Tuesday',
  1,
  5,
  30
),

(
  1,
  3,
  'Wednesday',
  10,
  50,
  30
),

(
  1,
  4,
  'Thursday',
  10,
  50,
  30
),

(
  1,
  5,
  'Friday',
  5,
  15,
  35
)

-- Strength Training

VALUES (
  2,
  6,
  'Monday',
  3,
  10,
  20
  ), -- Chest

  (
    2,
    7,
    'Tuesday',
    3,
    10,
    20
  ), -- Back
  
  (
    2, 
    8, 
    'Wednesday', 
    3, 
    10,
    20
  ), -- Biceps
  
  (
    2, 
    9, 
    'Thursday', 
    3, 
    10, 
    20
  ), -- Tricepts
  
  (
    2, 
    10, 
    'Friday', 
    3, 
    10, 
    20
  ); -- Legs
    

-- Weight Loss
VALUES 
(
  3, 
  11, 
  'Monday',
  1,
  1, 
  30
),-- Running

  (3,
  12,
  'Tuesday', 
  1, 
  1, 
  30
), -- Jump Rope

(
  3, 
  13, 
  'Wednesday', 
  1, 
  1, 
  20
), -- High-Intensity Intreval Training
  
  (
    3, 
    14, 
    'Thursday', 
    1, 
    1, 
    30
  ), -- Plyometrics

(
  3, 
  15, 
  'Friday', 
  1, 
  1, 
  30
); -- Cycling