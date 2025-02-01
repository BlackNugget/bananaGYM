import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const WorkoutBarGraph = ({ workoutCounts }) => {
  const data = {
    labels: Object.keys(workoutCounts),
    datasets: [
      {
        label: "Workout Count",
        data: Object.values(workoutCounts),
        backgroundColor: "#007bff",
        borderColor: "#0056b3",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WorkoutBarGraph;
