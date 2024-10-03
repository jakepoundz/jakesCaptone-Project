import './App.css';
import React, { useState, useEffect } from 'react';
import WorkoutLog from './components/WorkoutLog';
import WorkoutHistory from './components/WorkoutHistory';
import ProgressChart from './components/ProgressChart'; // Import the ProgressChart component
import SocialShareButtons from './components/SocialShareButtons';

function App() {
  const [exercises, setExercises] = useState([]);
  const [workoutLogs, setWorkoutLogs] = useState([]);
  const [muscleGroups, setMuscleGroups] = useState([]); // List of muscle groups for dropdown
  const [searchTerm, setSearchTerm] = useState(''); // Search term for exercise name
  const [isDarkMode, setIsDarkMode] = useState(false);
  

   // Fetch exercises initially
   useEffect(() => {
    fetchExercises();
    fetchMuscleGroups();
  }, []);

    // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the dark mode class to the html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Fetch all exercises
  const fetchExercises = async () => {
    try {
      const response = await fetch('https://wger.de/api/v2/exercise/');
      const data = await response.json();
      setExercises(data.results);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  // Fetch all muscle groups
  const fetchMuscleGroups = async () => {
    try {
      const response = await fetch('https://wger.de/api/v2/muscle/');
      const data = await response.json();
      setMuscleGroups(data.results);
    } catch (error) {
      console.error('Error fetching muscle groups:', error);
    }
  };

  // Search exercises by muscle group
  const searchExercisesByMuscle = async (muscleId) => {
    try {
      const response = await fetch(`https://wger.de/api/v2/exercise/?muscle=${muscleId}`);
      const data = await response.json();
      setExercises(data.results);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  // Filter exercises by search term (exercise name)
  const handleSearchByName = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter exercises based on search term locally
  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add a new workout log
  const addWorkout = (workout) => {
    setWorkoutLogs([workout, ...workoutLogs]);
  };



  return (

    <div className="app-container mx-auto bg-green-200 p-4">
    {/* Optionally, add an overlay */}
    <div className="overlay"></div>

    <div className="p-8 relative">
      <h1 className="text-4xl font-bold text-center mx-auto mb-8">Fitness Tracker</h1>

       {/* Toggle Dark Mode Button */}
       <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-lg bg-black-800 text-white dark:bg-gray-200 dark:text-gray-800"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

      {/* Workout Logging Section */}
      <WorkoutLog exercises={exercises} addWorkout={addWorkout} />

      {/* Workout History Section */}
      <WorkoutHistory workoutLogs={workoutLogs} />

      {/* Conditionally render ProgressChart if there are workout logs */}
      {workoutLogs.length > 0 && <ProgressChart workoutLogs={workoutLogs} />}

      {/* Place Social Share Buttons near progress */}
      <SocialShareButtons workoutLogs={workoutLogs} />
    </div>
    </div>
  );
}

export default App;