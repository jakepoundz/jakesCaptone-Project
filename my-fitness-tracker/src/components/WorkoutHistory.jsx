import React from 'react';

const WorkoutHistory = ({ workoutLogs }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold dark:text-white">Workout History</h2>

      {workoutLogs.length > 0 ? (
      workoutLogs.map((log, index) => (
        <div key={index}>
          <p>Exercise: {log.exercise}</p>
          <p>Sets: {log.sets}</p>
          <p>Reps: {log.reps}</p>
          <p>Date: {new Date(log.date).toLocaleDateString()}</p>
        </div>
      ))
    ) : (
      <p>No workout history available.</p>
    )}
  </div>
  );
};

export default WorkoutHistory;