import { Line } from 'react-chartjs-2';

const ProgressChart = ({ workoutLogs }) => {
  const dates = workoutLogs.map(log => log.timestamp.toLocaleDateString());
  const weights = workoutLogs.map(log => parseFloat(log.weight));

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

  return <Line data={data} />;
};

export default ProgressChart;