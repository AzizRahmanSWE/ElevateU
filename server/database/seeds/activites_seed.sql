INSERT INTO activities (
  name,
  description,
  targeted_muscle
) VALUES 

-- Basketball Activities --
-- Day 1 Monday Upper Body weight training / Lower body Plyometrics --
('Bench Press', '1-2 sets x 10-12 reps', 'Chest'), -- activity id 1 - 5
('Front Lat Raise', '1-2 sets x 10-12 reps', 'Front Shoulder'),
('Seated Rows', '1-2 sets x 10-12 reps', 'Back'),
('Box Jumps', '3 sets x 10-12 jumps', 'Jumping'),
('Depth Jumps', '3 sets x 10-12 jumps', 'Landing'),

-- Day 2 Tuesday Lower Body weight training / Core Exercises --
('Calf Raise', '1-2 sets x 10-12 reps', 'Calfs'), -- activity id 6 - 10
('Front Squats', '1-2 sets x 10-12 reps', 'Legs'),
('Hamstring Curls', '1-2 sets x 10-12 reps', 'Glutes'),
('Plank', '3 x 30 seconds', 'Core'),
('Russian Twists', '3 x 30 seconds', 'obliques'),

-- Day 3 Wednesday Rest --
('Rest', 'Rest', 'Rest'), -- activity id  11 - 15
('Rest', 'Rest', 'Rest'),
('Rest', 'Rest', 'Rest'),
('Rest', 'Rest', 'Rest'),
('Rest', 'Rest', 'Rest'),

-- Day 4 Thursday Upper Body weight training / Lower body Plyometrics --
('Shoulder Press', '1-2 sets x 10-12 reps', 'Shoulder'), -- activity id 16 - 20
('Incline Press', '1-2 sets x 10-12 reps', 'Upper Chest'),
('Tricep Dips', '1-2 sets x 10-12 reps', 'Triceps'),
('Single Leg Hops', '3 sets x 10-12 jumps', 'Jumping'),
('Step Ups', '3 sets x 10-12 jumps', 'Single Leg Jumping'),

-- Day 5 Friday Lower Body weight training / Core/Hip Exercises --
('Dumbbell Lunge', '1-2 sets x 10-12 reps', 'Legs'), -- activity id 21 - 25
('Split Squat', '1-2 sets x 10-12 reps', 'Legs'),
('Romania Dead Lift', '1-2 sets x 10-12 reps', 'Posterior-Chain'),
('Side Plank', '3 x 30 seconds', 'obliques'),
('Clamshells', '3 x 30 seconds', 'gluteus'),

-- Day 6 & 7 Sat/Sun Rest --
('Rest', 'Rest', 'Rest'), -- activity id  26 - 35
('Rest', 'Rest', 'Rest'),
('Rest', 'Rest', 'Rest'),
('Rest', 'Rest', 'Rest'),
('Rest', 'Rest', 'Rest'),
('Rest', 'Rest', 'Rest'),
('Rest', 'Rest', 'Rest'),
('Rest', 'Rest', 'Rest'),
('Rest', 'Rest', 'Rest'),
('Rest', 'Rest', 'Rest'),

-- STRENGTH TRAINING --

-- Monday (Chest) activity_id 36 - 40 --
('Bench Press', '3-4 sets x 6-12 reps: A fundamental exercise for chest strength that uses a barbell.', 'Chest'),
('Dumbbell Flyes', '3-4 sets x 6-12 reps: Isolates the chest muscles using dumbbells.', 'Chest'),
('Push-ups', '3-4 sets x 6-12 reps: Bodyweight exercise engaging chest, triceps, and core.', 'Chest'),
('Pec Deck Machine', '3-4 sets x 6-12 reps: Isolates the chest muscles using machine resistance.', 'Chest'),
('Barbell Curl', '3-4 sets x 6-12: A fundamental bicep strength exercise using a barbell.', 'Biceps'),
('Cable Crossover', '3-4 sets x 6-12: Engages the chest muscles using a cable machine for resistance.', 'Chest'),

-- Tuesday (Biceps/Triceps) 41 - 45 --
('Hammer Curls', '3-4 sets x 6-12 reps: A variation of bicep curls targeting the brachialis muscle.', 'Biceps' ),
('Bicep Curls', '3-4 sets x 6-12 reps:  A classic exercise to enhance bicep strength.', 'Biceps'),
('Barbell Curls', '3-4 sets x 6-12 reps: Targets biceps using a barbell for resistance.', 'Biceps'),
('Push-down', '3-4 sets x 6-12 reps: A triceps isolation exercise using a cable machine.', 'Triceps'),
('Cable One Arm Extensions', '3-4 sets x 6-12 reps: Focuses on triceps using a cable machine.', 'Triceps'),

-- Wednesday (Back) 46 - 50 --
('Deadlift', '3-4 sets x 6-12 reps: A compound exercise engaging multiple muscle groups, especially the posterior chain.', 'Back'),
('One-arm Dumbell Row', '3-4 sets x 6-12 reps: Targets the upper back muscles.', 'Back'),
('Seated Cable Rows', '3-4 sets x 6-12 reps: A compound exercise focusing on the middle back.', 'Back'),
('Bent-over Row', '3-4 sets x 6-12 reps: Engages the entire back and utilizes a barbell.', 'Back'),
('Pull-down', '3-4 sets x 6-12 reps: Targets the latissimus dorsi muscles using a cable machine.', 'back'),

-- Thursday (Shoulders) 51 - 55 --
('Overhead Press', '3-4 sets x 6-12 reps: A compound exercise targeting the entire shoulder region.', 'Shoulders'),
('Side Lateral Raises', '3-4 sets x 6-12 reps: Isolates the lateral deltoid muscles.', 'Shoulders'),
('Arnold Press', '3-4 sets x 6-12 reps: A variation of the shoulder press named after Arnold Schwarzenegger.', 'Shoulders'),
('Front Raises', '3-4 sets x 6-12 reps: Targets the anterior deltoid muscles.', 'Shoulders'),
('Rear Delt Fly', '3-4 sets x 6-12 reps: Engages the posterior deltoid muscles.', 'Shoulders'),

-- Friday (Leg) 56 - 60 --
('Sqauts', '3-4 sets x 6-12 reps: 3-4 sets x 6-12 reps. A fundamental compound exercise targeting the entire lower body.', 'Legs'),
('Leg Extensions', '3-4 sets x 6-12 reps: Isolates the quadriceps muscles.', 'Legs'),
('Leg Curls', '3-4 sets x 6-12 reps: Focuses on the hamstring muscles.', 'Legs'),
('Calf Raises', '3-4 sets x 6-12 reps: Targets the calf muscles.', 'Legs'),
('Lunges', '3-4 sets x 6-12 reps: Engages the entire lower body with a focus on one leg at a time.', 'Legs'),

-- FAT LOSS  61 - 67 --
('Treadmill Running', '20-30 minutes of interval running: for increasing heart rate and burning calories.', 'Cardio'), -- activity_id 
('Jumping Jacks', '3 sets of 30-60 seconds: a full-body workout that also elevates the heart rate', 'Full Body, Cardio'),
('Bicycle Crunches', '3 sets of 15-20 reps: targets the core and also provides a bit of cardio if done at a faster pace', 'Abs, Core'),
('Push-ups', '3 sets of 10-15 reps: A compound movement that engages multiple muscles.', 'Chest, Triceps, Core'),
('Squats', '3 sets of 15-20 reps: Engages the major muscles of the lower body and also elevates heart rate if done at a consistent pace.', 'Legs, Glutes, Core'),
('Plyometric Lunges', '3 sets of 10-15 reps per leg: A powerful exercise that targets the legs while also providing cardiovascular benefits.', 'Legs, Glutes, Cardio'),
('Kettlebell Swings', '3 sets of 15-20 reps: A full-body movement that especially targets the posterior chain and also provides cardiovascular benefits.', 'Full Body, Cardio');