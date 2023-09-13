INSERT INTO days (name, description) VALUES
('Monday', 'First day of the week.'),
('Tuesday', 'Second day of the week.'),
('Wednesday', 'Third day of the week.'),
('Thursday', 'Fourth day of the week.'),
('Friday', 'Fifth day of the week.'),
('Saturday', 'Sixth day of the week.'),
('Sunday', 'Seventh day of the week.');

INSERT INTO preset_days (workout_preset_id, day_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
-- Strength Training --
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
-- Fat Loss --
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5);

