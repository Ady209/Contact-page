import React from 'react';
import { useQuery } from 'react-query';
import { Line } from 'react-chartjs-2';

const LineChart: React.FC = () => {
  const { data } = useQuery('historical', async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return response.json();
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  const dates = Object.keys(data.cases);
  const cases = Object.values(data.cases);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Cases',
        data: cases,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
