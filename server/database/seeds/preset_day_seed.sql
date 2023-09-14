-- preset_days ties together a specific workout_preset with a specific day. --
INSERT INTO preset_days (workout_preset_id, day_id) VALUES
(1, 1), --Baseketball, Monday --preset_day_id  = 1 - 7
(1, 2), 
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),

-- Strength Training --preset_day_id  = 8 - 14
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),

-- Fat Loss --preset_day_id  = 15 - 22
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7);
