import React, { useState } from 'react';

const WorkoutLog = ({ exercises, addWorkout }) => {
  const [workout, setWorkout] = useState({
    exercise: '',
    sets: '',
    reps: '',
    weight: '',
  });

  const handleInputChange = (e) => {
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value,
    });
  };

  const logWorkout = () => {
    if (workout.exercise && workout.sets && workout.reps && workout.weight) {
      addWorkout({
        ...workout,
        timestamp: new Date(),
      });
      setWorkout({ exercise: '', sets: '', reps: '', weight: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">Workout Log</h2>
      <div className="flex flex-col space-y-4">
        <select
          name="exercise"
          onChange={handleInputChange}
          value={workout.exercise}
          className="border p-2"
        >
          <option value="">Select Exercise</option>
          {exercises.map((exercise) => (
            <option key={exercise.id} value={exercise.name}>
              {exercise.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="sets"
          placeholder="Sets"
          onChange={handleInputChange}
          value={workout.sets}
          className="border p-2"
        />
        <input
          type="number"
          name="reps"
          placeholder="Reps"
          onChange={handleInputChange}
          value={workout.reps}
          className="border p-2"
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          onChange={handleInputChange}
          value={workout.weight}
          className="border p-2"
        />

        <button onClick={logWorkout} className="bg-green-500 text-white p-2 rounded-md">
          Log Workout
        </button>
      </div>
    </div>
  );
};

export default WorkoutLog;