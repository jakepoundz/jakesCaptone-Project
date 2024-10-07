import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import React from 'react';

// Register chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ProgressChart = ({ workoutLogs }) => {
  if (!workoutLogs || workoutLogs.length === 0) {
    return <p>No workout data available.</p>;
  }

  const dates = workoutLogs.map(log => new Date(log.timestamp).toLocaleDateString());
  const weights = workoutLogs.map(log => parseFloat(log.weight) || 0); // Handle any NaN values gracefully

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Weight Lifted (kg)',
        data: weights,
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="chart-container bg-slate-400" style={{ height: '400px', width: '100%' }}>
      <Line data={data} />
    </div>
  );
};

export default ProgressChart;