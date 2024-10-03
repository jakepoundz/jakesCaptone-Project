import React from 'react';

const WorkoutHistory = ({ workoutLogs }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold dark:text-white">Workout History</h2>

      {workoutLogs.length === 0 ? (
        <p>No workouts logged yet.</p>
      ) : (
        workoutLogs.map((log, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <p><strong>Exercise:</strong> {log.exercise}</p>
            <p>
              <strong>Sets:</strong> {log.sets}, 
              <strong> Reps:</strong> {log.reps}, 
              <strong> Weight:</strong> {log.weight} kg
            </p>
            <p>
              <strong>Logged At:</strong> {new Date(log.timestamp).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default WorkoutHistory;